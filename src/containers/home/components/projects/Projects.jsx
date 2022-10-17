import React, {useState} from 'react';

//styles
import classes from './projects.module.css';

import Item from './Item';

function Projects({image}) {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [deactive, setdeactive] = useState(null);

    const onHover = (id) => {
        setHoveredItem(id)
    }

    const removeHover = (id) => {
        setdeactive(id);
        setHoveredItem(null);
        setTimeout(() => {
            setdeactive(false)
        }, 300)
    }

    return (
        <div className={classes.container}>
            <img src={image} alt='' className={classes.polygon} />
            <div className={classes.main}>
                <p className={classes.title}>Some Of My Recent Projects</p>
                <div className={classes.mainContainer}>
                    <Item putRight id={1} onHover={(e) =>onHover(e)} unActive={deactive === 1} active={hoveredItem === 1} removeHover={(e) => removeHover(e)}/>
                    <Item putRight={false} id={2} onHover={(e) => onHover(e)} unActive={deactive === 2} active={hoveredItem === 2} removeHover={(e) => removeHover(e)}/>
                    <Item putRight id={3} onHover={(e) => onHover(e)} unActive={deactive === 3} active={hoveredItem === 3} removeHover={(e) => removeHover(e)}/>
                    <Item putRight={false} id={4} onHover={(e) => onHover(e)} unActive={deactive === 4} active={hoveredItem === 4} removeHover={(e) => removeHover(e)}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;