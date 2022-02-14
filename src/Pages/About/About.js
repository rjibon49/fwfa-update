import React from 'react';
import GoToTop from '../../GotoTop';
import AboutBanner from './AboutBanner';
import AboutDetails from './AboutDetails';
import AboutMembers from './AboutMembers';

const About = () => {
    return (
        <>
            <AboutBanner />
            <AboutDetails />
            <AboutMembers />
            <GoToTop />
        </>
    );
};

export default About;