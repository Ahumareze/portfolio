import React from 'react';

//styles
import classes from './contact.module.css';

//component
import { Button } from '../../../../components';

function Contact(props) {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <p className={classes.title}>Let's Connect</p>
                <p className={classes.details}>I am currently availiable for new opportunities; both remote, on-site, and hybrid. Feel free to send an inbox and I'll get back to you.</p>
                <div>
                    <Button name={'Connect'} />
                </div>
            </div>
        </div>
    );
}

export default Contact;