import React from 'react'
import{ AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link } from 'react-router-dom'

import logo from '../../assets/owj-logo-light.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {

    const classes = useStyles();
    return (
        <div>
          <AppBar position="fixed" className={classes.appBar} color="inherit" />  
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit" >
                    <img src={logo} alt="One Woman's Junk" height="25px" className={classes.image} />
                    One Woman's Junk
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button} />
                    <IconButton component={Link} to="/cart" aria-label="Show Cart items" color="inherit" >
                        <Badge badgeContent={totalItems} color="secondary" >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
            </Toolbar>
        </div>
    )
}

export default Navbar
