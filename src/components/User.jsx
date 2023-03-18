import React from "react";
import { useEffect, useState } from "react";
import "./user.css";
import student from "./student.png";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { Button, CardMedia, Typography } from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";

const User = ({ handleApplication, isApplication }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.sfd.interview.ovckd.dev/v1/user";
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
      setUser(data);
    };
    fetchData();
  }, []);
  const styles = (theme) =>
    createStyles({
      buttonContainer: {
        padding: `20px ${theme.spacing.unit}px`,
        textAlign: "right",
      },
    });
  return (
    <div className="usercontainer">
      <div className="card">
        {isApplication && (
          <Typography style={{ textAlign: "center" }} variant="h3">
            Profile
          </Typography>
        )}

        <div className="profile_details">
          <div className="profile_images">
            <CardMedia
              style={{ objectFit: "contain" }}
              component="img"
              height="140"
              image={student}
              alt="green iguana"
            />
          </div>
          <div className="profile">
            <h2>{user.name}</h2>
            <div className="specification">
              <span>{user.email}</span>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleApplication}
              >
                <Typography variant="body2" component="h2">
                  Application
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
