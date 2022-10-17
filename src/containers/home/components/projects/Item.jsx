import React from 'react';

//styles
import classes from './projects.module.css';

//icons
import {FiGithub, FiExternalLink} from 'react-icons/fi';

//test image
import testImage from '../../../../assets/projects/future_bank.jpg';

const Item = ({putRight, id, onHover, active, unActive, removeHover}) => {

    const right = (
        <div className={classes.itemContainer}>
            <div className={classes.item} onMouseEnter={() => onHover(id)} onMouseLeave={() => removeHover(id)} >
                <div className={classes.cover}>
                    <div className={classes.details}>
                        <p className={classes.projectName}>Future Bank - IOS UI kit</p>
                        <p className={classes.projectDetails}>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                        <div className={classes.links}>
                            <FiGithub className={classes.link} />
                            <FiExternalLink className={classes.link}  />
                        </div>
                    </div>
                    <div className={`${active ? classes.activeImage : classes.mainImage} ${unActive && classes.deactiveImage}`}>
                        <img src={testImage} alt='' />
                    </div>
                </div>
            </div>
            <div className={classes.languagesContainer}>
                <div className={classes.language}>
                    <div />
                    <p>Figma</p>
                </div>
            </div>
        </div>
    );

    const left = (
        <div className={classes.itemContainerLeft}>
            <div className={classes.item} onMouseEnter={() => onHover(id)} onMouseLeave={() => removeHover(id)} >
                <div className={classes.cover2}>
                    <div className={`${active ? classes.activeImage2 : classes.mainImage2} ${unActive && classes.deactiveImage2}`}>
                        <img src={testImage} alt='' />
                    </div>
                    <div className={classes.details2}>
                        <p className={classes.projectName}>Future Bank - IOS UI kit</p>
                        <p className={classes.projectDetails}>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                        <div className={classes.links}>
                            <FiGithub className={classes.link} />
                            <FiExternalLink className={classes.link}  />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.languagesContainer}>
                <div className={classes.language}>
                    <div />
                    <p>Figma</p>
                </div>
            </div>
        </div>
    )

    return(
        <>
            {putRight ? right : left}
        </>
    )
};

export default Item;