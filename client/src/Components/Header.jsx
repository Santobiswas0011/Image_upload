import React from 'react';
import './style.css';

import { Box, AppBar, Toolbar, styled, Typography } from '@mui/material';

import {NavLink } from 'react-router-dom';

const Component = styled(AppBar)`
     background:#444;
     height:55px;
     display: flex;
     justify-content: center;
`
const LinkStyle = styled(NavLink)`
    text-decoration:none;
    color:inherit;
    font-size:20px;
    cursor: pointer;
`

const Header = () => {
   return (
      <Box>
         <Component>
            <Toolbar>
               <nav>
                  <LinkStyle to="/">Home</LinkStyle>&nbsp;&nbsp;&nbsp;
                  <LinkStyle to="/register">Register</LinkStyle>
               </nav>
            </Toolbar>
         </Component>
      </Box>
   )
}

export default Header;
