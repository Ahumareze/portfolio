import React from 'react';

//styles
import classes from './button.module.css';

function Button({name}) {
    return (
        <div className={classes.button} data-testid='button'>
            {name}
        </div>
    );
}

export default Button;