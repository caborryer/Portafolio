import React from 'react';
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    firstContainer: {
      height: "500px",
      backgroundColor: "#fc758c",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      "& button": {
        backgroundColor: "white",
        color: "#fc758c",
        fontSize: '12px',
        fontFamily: 'MonserrantRegular',
        marginTop: '30px',
        borderRadius: "0px !important",
        "&:hover": {
          backgroundColor: "#f9365717",
          color: "white"
        }
      },
      "& button.MuiButton-text": {
        padding: "3px 10px !important"
    }
    },
    titleText: {
      fontSize: theme.spacing(6),
      fontFamily: 'questrial',
    },
    subTitleText: {
      fontSize: '16px',
      fontFamily: 'MonserrantRegular',
    }
  }));


export const Slider = () => {
    const classes = useStyles();

    return (
        <div className={classes.firstContainer}>
        <Typography className={classes.titleText}>EXPLORE BEYOND HORIZON</Typography>
        <Typography className={classes.subTitleText}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</Typography>
        <Button>View our work</Button>
      </div>
    )
}
