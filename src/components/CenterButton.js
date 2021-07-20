import React from 'react';
import {Box, makeStyles } from "@material-ui/core";
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined';

const useStyles = makeStyles((theme) => ({
    centerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:theme.spacing(3),
        marginBottom:theme.spacing(3),
        '& .MuiSvgIcon-root': {
            color:'#fc758c',
            marginRight: "6px"
        }
    },
    
}));

export const CenterButton = () => {
    const classes = useStyles();
    return (
        <Box className={classes.centerContainer}>
            <AppsOutlinedIcon/>
            <ReorderOutlinedIcon/>  
        </Box>
    )
}
