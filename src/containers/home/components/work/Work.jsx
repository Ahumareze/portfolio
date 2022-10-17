import React from 'react';
import { useState } from 'react';

//styles
import classes from './work.module.css';

//utilities
import workData from '../../../../utilities/workData';

function Work({image}) {
    const [active, setActive] = useState(0);

    const Tabs = ({name, id, isSelected}) => {
        return(
            <div className={classes.tabItem} onClick={() => setActive(id)}>
                <div className={`${classes.line} ${isSelected && classes.activeLine}`} />
                <p className={`${isSelected && classes.activeP}`}>{name}</p>
            </div>
        )
    };

    const Job = ({data}) => {
        return(
            <div className={classes.jobItem}>
                <p className={classes.workTitle}>{data.position} <span>@{data.company}</span> </p>
                <p className={classes.years}>{data.years}</p>
                <div className={classes.detailsContainer}>
                    {data.details.map((i, idx) => (
                        <div className={classes.details} key={idx}>
                            <div className={classes.bullet} />
                            <p>{i}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <img src={image} alt='' className={classes.polygon} />
            <div className={classes.main}>
                <p className={classes.title}>Work Experience</p>
                <div className={classes.mainContainer}>
                    <div className={classes.tabs}>
                        {workData.map((i, idx) => (
                            <Tabs name={i.tabName} id={idx} isSelected={active === idx} />
                        ))}
                    </div>
                    <Job data={workData[active]} />
                </div>
            </div>
        </div>
    );
}

export default Work;