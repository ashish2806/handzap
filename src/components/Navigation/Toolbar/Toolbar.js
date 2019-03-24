import React from 'react';
import classes from './Toolbar.css';

import NavigationItems from '../NavigationItems/Navigationitems'
const Toolbar = (props) =>(
    <header className="Toolbar">
        <div className={classes.DrawerToggle} onClick={props.getclicked} >
            <div></div>
            <div></div>
            <div></div>
        </div>
               <nav className={classes.DesktopOnly}><NavigationItems authenticate={props.auth} /></nav>
        
    </header>
);

export default Toolbar;