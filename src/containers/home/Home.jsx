import React from 'react';

// styles
import classes from './home.module.css';

//components
import { Background } from '../../components';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Languages from './components/languages/Languages';
import Projects from './components/projects/Projects';
import Work from './components/work/Work';

//utilities
import headerLinks from '../../utilities/headerLinks';

//images
import polygon1 from '../../assets/Polygon1.png';
import polygon2 from '../../assets/Polygon2.png';
import polygon3 from '../../assets/Polygon3.png';
import ifeanyi from '../../assets/ifeanyi.jpg';
import Contact from './components/contact/Contact';


function Home(props) {
    return (
        <Background active={headerLinks.home} >
            <Intro image={polygon1} />
            <About profile={ifeanyi} />
            <Work image={polygon2} />
            <Projects />
            <Languages image={polygon3} />
            <Contact />

            <div className={classes.footer}>
               <p>Designed and Built by Ifeanyi Ahumareze</p>
            </div>
        </Background>
    );
}

export default Home;