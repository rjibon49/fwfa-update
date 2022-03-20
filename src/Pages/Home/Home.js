import React from 'react';
import GoToTop from '../../GotoTop';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import AboutEvents from './AboutEvents';
import Banner from './Banner';
import Community from './Community';
import Different from './Different';
import HomeEvents from './HomeEvents';
import OurBlog from './OurBlog';
import Ship from './Ship';
import SigninBanner from './SigninBanner';
import Slider from './Slider';

const Home = () => {
    return (
        <>
            <Header />
            <div className='greenBg'>
                <Slider />
                <Banner />
                <Ship />
                <Different />
                <Community />
                <HomeEvents />
                <AboutEvents />
                <OurBlog />
                <SigninBanner />
            </div>
            <GoToTop />
            <Footer />
        </>
    );
};

export default Home;