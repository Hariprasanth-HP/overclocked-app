import logo from "./logo.svg";

import User from "./components/User";
import Applications from "./components/Applications";
import Offers from "./components/Offers";
import "./App.css";
import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import employee from "./components/employees.gif";
function App() {
  const [isApplication, setIsApplication] = useState(false);
  const [isOffers, setIsOffers] = useState(false);
  const handleApplication = () => {
    setIsApplication(!isApplication);
    {
      isOffers && setIsOffers(false);
    }
  };
  const handleOffers = () => {
    setIsOffers(!isOffers);
  };
  return (
    <div>
      <div className="spacer"></div>
      {!isApplication && (
        <div className="heading">
          <Typography className="loan_app_head" variant="h1">
            Loan Application
          </Typography>
          <div>
            <img
              style={{
                width: "211px",
                height: "127px",
                objectFit: "cover",
              }}
              src={employee}
            />
          </div>
        </div>
      )}

      <div className="App">
        <div className="user_application">
          <div
            className={isApplication ? "user_app" : "user_app_back"}
            style={{ animationName: isApplication ? "example" : "exampledown" }}
          >
            <User
              isApplication={isApplication}
              handleApplication={handleApplication}
            />
          </div>
          {isApplication && (
            <div className="application_app">
              <Applications handleOffers={handleOffers} />
            </div>
          )}
        </div>

        {isOffers && (
          <div className="offers_app">
            <Offers />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
