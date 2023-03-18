import Typography from "@material-ui/core/Typography";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
const styles = (theme) =>
  createStyles({
    root: {
      padding: "20px 0 0 0",
    },
    label: {
      padding: `0 ${theme.spacing.unit * 2}px`,
      marginBottom: "11px",
    },
  });

const LoanDetails = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.label}>
        {props.children}
      </Typography>
      <Typography variant="subtitle1" className={classes.label}>
        {props.prefix} {props.value || props.min || 0}
      </Typography>
      <br />
    </div>
  );
};

export default withStyles(styles)(LoanDetails);
