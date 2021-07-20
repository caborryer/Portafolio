import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    containerFooter:{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent:'center',
        '& p':{
            fontSize: '14px',
            color: '#C1C1C1',
            margin: '40px 0px',
            fontFamily: 'MonserrantRegular',
            '& span':{
                fontSize: '14px',
                color: '#fc758c',
                fontFamily: 'MonserrantRegular',
            }
        }

    },
    root: {
      '& .MuiBottomNavigationAction-root': {
          maxWidth: '57px',
          minWidth:'57px'
      },
      '& .MuiBottomNavigationAction-root.Mui-selected' : {
          color:'#fc758c'
      }

    },
  });


export const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.containerFooter}>
            <Typography>
                @2018 - 
                <span> Sneak  </span>
                All Right Reserved
            </Typography>
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
            <BottomNavigationAction  icon={<FacebookIcon />} />
            <BottomNavigationAction  icon={<TwitterIcon/>} />
            <BottomNavigationAction  icon={<YouTubeIcon />} />
            </BottomNavigation>
        </div>
        
    )
}
