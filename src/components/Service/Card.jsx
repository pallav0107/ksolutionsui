import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1),
    },
  },
}));

const CustomCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} style={{ fontFamily: "Arial", background: "#333333", color: "#FFFFFF" }}>
      <CardMedia
        component="img"
        alt={props.imgsrc}
        height="140"
        image={props.imgsrc}
        title={props.imgsrc}
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom style={{ color: "#FF3366" }}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#FFFFFF" }}>
          {props.textBody}
        </Typography>
        <Button component={NavLink} to="#" variant="contained" color="primary">
          {props.buttonContent}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
