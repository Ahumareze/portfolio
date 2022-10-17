import React from 'react';

//styles
import classes from './background.module.css';

//component
import Header from '../header/Header';

//icons
import {FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiDribbble} from 'react-icons/fi';

function Background({active, children}) {
    return (
        <div className={classes.container}>
            <Header active={active} />
            <div className={classes.section}>
                <div className={classes.main}>{children}</div>
                <div className={classes.links}>
                    <FiGithub className={classes.item} size={20} />
                    <FiTwitter className={classes.item} size={20}/>
                    <FiInstagram className={classes.item} size={20}/>
                    <FiLinkedin className={classes.item} size={20}/>
                    <FiDribbble className={classes.item} size={20}/>
                    <div className={classes.line} />
                </div>
            </div>
        </div>
    );
}

export default Background;