import { useEffect, useState } from "react";
import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import createStyles from "@material-ui/core/styles/createStyles";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/es/Icon/Icon";
import LoanDetails from "./LoanDetails";
import school from "./school.png";
import "./application.css";
const Applications = ({ handleOffers }) => {
  const [application, setApplication] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.sfd.interview.ovckd.dev/v1/user/applications";
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
      setApplication(data);
    };
    fetchData();
  }, []);

  const styles = (theme) =>
    createStyles({
      root: {},
      controls: {
        padding: 70,

        [theme.breakpoints.down("sm")]: {
          padding: "15px",
          position: "absolute",
          top: "145vw",
          left: 0,
          width: "100vw",
        },
      },
      toggleContainer: {
        height: 56,
        padding: `0 ${theme.spacing.unit * 2}px`,

        margin: `${theme.spacing.unit}px 0`,
        background: theme.palette.background.default,
        [theme.breakpoints.down("sm")]: {
          padding: " 20px 0 0 0",
          margin: "0 0 0 10px",
          width: "100%",
        },
      },
      toggleButton: {
        padding: 10,
        height: 50,
        width: "33.33%",
      },
      buttonGroup: {
        width: "100%",
      },
      label: {
        padding: `0 ${theme.spacing.unit * 2}px`,
      },
      buttonContainer: {
        padding: `20px ${theme.spacing.unit}px`,
        textAlign: "right",
      },
    });
  const values = {
    loanType: {
      title: "Education",
      icon: "school",
    },
    loanAmount: 1000,
    termLength: 12,
    interestRate: null,
    monthlyPayment: null,
  };
  return (
    <div className="app-container">
      {application.map((app, index) => {
        const { loan_amount, offers_url, university } = app;
        return (
          <Fragment>
            <div className="container">
              <div>
                <Typography variant="h3">Application</Typography>

                <div className="Application">
                  <div className="loanType">
                    <Typography variant="h6" className={styles.label}>
                      Loan Type
                    </Typography>
                    <ToggleButtonGroup
                      value={values.loanType.title}
                      exclusive
                      className={styles.buttonGroup}
                    >
                      <ToggleButton
                        value={values.loanType.title}
                        key={"1"}
                        className={styles.toggleButton}
                      >
                        <img
                          style={{ width: "34px", height: "28px" }}
                          src={school}
                        />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>

                  <LoanDetails
                    min={500}
                    max={5000}
                    step={1}
                    prefix="₹"
                    value={loan_amount}
                  >
                    Loan Amount
                  </LoanDetails>
                  <LoanDetails min={6} max={24} step={1} value={university}>
                    University
                  </LoanDetails>
                </div>
                <div className={styles.buttonContainer}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOffers}
                  >
                    Get Offers
                  </Button>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Applications;

// import { withRouter } from "react-router-dom";
// import {
//   changeLoanType,
//   changeModel,
//   getInterest,
// } from "../actions/PredictorActions";
// import CircularGraph from "../components/CircularGraph";
// import Hidden from "@material-ui/core/Hidden";
// import withWidth from "@material-ui/core/withWidth";
// import Icon from "@material-ui/core/es/Icon/Icon";
// const styles = (theme) =>
//   createStyles({
//     root: {},
//     controls: {
//       padding: 70,
//       [theme.breakpoints.down("sm")]: {
//         padding: "15px",
//         position: "absolute",
//         top: "145vw",
//         left: 0,
//         width: "100vw",
//       },
//     },
//     toggleContainer: {
//       height: 56,
//       padding: `0 ${theme.spacing.unit * 2}px`,
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       margin: `${theme.spacing.unit}px 0`,
//       background: theme.palette.background.default,
//       [theme.breakpoints.down("sm")]: {
//         padding: 0,
//         margin: 0,
//         width: "100%",
//       },
//     },
//     toggleButton: {
//       padding: 10,
//       height: 50,
//       width: "33.33%",
//     },
//     buttonGroup: {
//       width: "100%",
//     },
//     label: {
//       padding: `0 ${theme.spacing.unit * 2}px`,
//     },
//     buttonContainer: {
//       padding: `50px ${theme.spacing.unit}px`,
//       textAlign: "right",
//     },
//   });

// class PredictorForm extends React.Component {
//   componentDidMount() {
//     props.onInit(
//       props.values.loanAmount,
//       props.values.termLength
//     );
//   }

//   render() {
//     const { styles } = this.props;
//     return (

//     );
//   }
// }
