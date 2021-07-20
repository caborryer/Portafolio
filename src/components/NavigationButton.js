import React from 'react';
import {Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    buttonsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& button": {
            color: "#C1C1C1",
            textTransform: "none",
            marginRight: "3px",
            "&:hover": {
                backgroundColor: "#fc758c",
                color: "#fff"
            }
        }
    },
    
}));

export const NavigationButton = () => {
    const classes = useStyles();
    return (
        <Box className={classes.buttonsContainer}>
            <Button>All</Button>
            <Button>Branding</Button>
            <Button>Web</Button>
            <Button>Photography</Button>
            <Button>App</Button>
        </Box>
    )
}
