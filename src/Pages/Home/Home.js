import React from 'react';
import GoToTop from '../../GotoTop';
import AboutEvents from './AboutEvents';
import Banner from './Banner';
import Different from './Different';
import HomeEvents from './HomeEvents';
import OurBlog from './OurBlog';
import Ship from './Ship';
import SigninBanner from './SigninBanner';
import Slider from './Slider';

const Home = () => {
    return (
        <>
            <Slider />
            <Banner />
            <Ship />
            <Different />
            <HomeEvents />
            <AboutEvents />
            <OurBlog />
            <SigninBanner />
            <GoToTop />
        </>
    );
};

export default Home;