import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./offer.css";
const _ = require("lodash");
const Offers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.sfd.interview.ovckd.dev/v1/user/applications/1/offers";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Access-Control-Request-Method": "GET",
          "Access-Control-Request-Headers": "Content-Type, x-requested-with",
          Origin: url,
          authorization:
            "1251a1de9906a858d1fc697792a5f5a7065a5fe984a159b1d3c3bbea160aa39b",
        },
      });
      const data = await response.json();
      let sortedData = await _.orderBy(data, ["interest_rate"], ["asc"]);
      setData(sortedData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="offer_app">
        <Typography variant="h3">Offers</Typography>
      </div>

      <Box className="offer_cont">
        {data.map((offers, index) => {
          const { bank, bank_logo, interest_rate, tenure } = offers;
          return (
            <Card className="offer_card" sx={{ width: 345 }}>
              <CardActionArea>
                <CardMedia
                  style={{ objectFit: "contain" }}
                  component="img"
                  height="140"
                  image={bank_logo}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {bank}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Interest Rate :</strong> {interest_rate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Tenure (in months) : </strong>
                    {tenure}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </div>
  );
};

export default Offers;
