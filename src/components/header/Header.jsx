import React from 'react';

//styles
import classes from './header.module.css';

//utilities
import headerLinks from '../../utilities/headerLinks';


function Header({active}) {

    const activeLink = {opacity: 1};

    return (
        <div className={classes.container}>
            <div className={classes.logoContainer}>Ifeanyi</div>
            <div className={classes.linksContainer}>
                <div className={classes.links} style={headerLinks.home === active ? activeLink: {}}>{headerLinks.home}</div>
                <div className={classes.links} style={headerLinks.work === active ? activeLink: {}}>{headerLinks.work}</div>
                <div className={classes.links} style={headerLinks.projects === active ? activeLink: {}}>{headerLinks.projects}</div>
                <div className={classes.links} style={headerLinks.contact === active ? activeLink: {}}>{headerLinks.contact}</div>
            </div>
        </div>
    );
}

export default Header;