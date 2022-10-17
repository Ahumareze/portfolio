import React from 'react';

//styles
import classes from './languages.module.css';

//utuilties
import languages from '../../../../utilities/languages';

function Languages({image}) {

    const Item = ({img, name}) => {
        return(
            <div className={classes.item}>
                <img src={img} alt='' />
                <p>{name}</p>
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <img src={image} alt='' className={classes.polygon} />
            <div className={classes.main}>
                <p className={classes.title}>Languages and Tools</p>
                <div className={classes.mainContainer}>
                    {languages.map(i => (
                        <Item img={i.img} name={i.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Languages;