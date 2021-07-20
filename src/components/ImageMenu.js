import React from 'react';
import { Button, Box, makeStyles } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
//import itemData from './itemData';

import imagen1 from '../assets/images/imagen1.jpg';
import imagen2 from '../assets/images/imagen2.jpg';
import imagen3 from '../assets/images/imagen3.jpg';
import imagen4 from '../assets/images/imagen4.jpg';
import imagen5 from '../assets/images/imagen5.jpg';

const useStyles = makeStyles((theme) => ({
    containerMore:{
      display: 'flex',
      justifyContent:'center',
      flexDirection: 'column',
      "& button": {
        backgroundColor: "white",
        color: "#fc758c",
        fontSize: '12px',
        marginTop: '30px',
        borderRadius: "0px !important",
        // '& .MuiButton-label': {

        // },
        "&:hover": {
          backgroundColor: "#f9365717",
          color: "white"
        }
      },
      "& button.MuiButton-text": {
        padding: "3px 10px !important"
    }
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(4),
      '& .MuiImageList-root' : {
        overflowY: 'hidden'
      },
      
    },
    imageList: {
      width: 500,
      height: 450,
    },
  }));

  const itemData = [
      {
        img: imagen1,
        title: 'Image',
        author: 'author',
        cols: 1
       },
       {
        img: imagen2,
        title: 'Image2',
        author: 'author2',
        cols: 2
       },
       {
        img: imagen3,
        title: 'imagen3',
        author: 'author3',
        cols: 2
       },
       {
        img: imagen4,
        title: 'Image4',
        author: 'author4',
        cols: 1
       },
       {
        img: imagen5,
        title: 'Image5',
        author: 'author5',
        cols: 3
       }
     ]



export const Menu = () => {
    const classes = useStyles();
    return (
      <div className={classes.containerMore}>
        <div className={classes.root}>
          <ImageList rowHeight={160} className={classes.imageList} cols={3}>
            {itemData?.map((item) => (
              <ImageListItem key={item?.img} cols={item?.cols || 1}>
                <img src={item?.img} alt={item?.title} />
              </ImageListItem>
            ))}
          </ImageList> 
        </div>
      {/* <Button>Show me more</Button> */}
      </div>
        
    )
}
