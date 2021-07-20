import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {Box} from "@material-ui/core";
import { NavigationButton } from './NavigationButton';

import logo from '../assets/images/logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiAppBar-colorPrimary': {
            backgroundColor: '#ffff !important'
        },
        '& .MuiToolbar-regular':{
            display: 'flex',
            justifyContent: 'space-between'
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor:  "#c1c1c126" ,
        '&:hover': {
            backgroundColor:  "#c1c1c126",
        },
        color:"c1c1c1",
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiSvgIcon-root': {
            color: "#fc758c"
        }
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    image:{
        width: '12%'
    }
}));

export const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <img src={logo} alt="logo"  className={classes.image}/>
                    <Box className={classes.buttonsContainer}>
                       <NavigationButton/>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon color="#fc758c"/>
                            </div>
                            <InputBase
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
        
    )
}
