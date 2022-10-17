import React from 'react';

//styles
import classes from './intro.module.css';

//component
import { Button } from '../../../../components';

function Intro({image}) {
    return (
        <div className={classes.intro}>
            <div className={classes.main}>
                <img src={image} alt='' />
                <div className={classes.main_intro}>
                    <p className={classes.name}>Hello, I am Ifeanyi Ahumareze</p>
                    <p className={classes.position}>{'Front-end Developer and UI/UX Designer'}</p>
                    <p className={classes.details}>I am a software developer based in Lagos, Nigeria with more than 3 years of pratical experience designing and building cool and interractive user interfaces for both web and mobile applications.</p>
                    <Button name={'Contact me'} />
                </div>
            </div>
        </div>
    );
}

export default Intro;