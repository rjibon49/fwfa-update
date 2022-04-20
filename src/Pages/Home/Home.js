import React, { useEffect, useState } from 'react';
import GoToTop from '../../GotoTop';
import Popup from '../Popup/Popup';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import AboutEvents from './AboutEvents';
import Banner from './Banner';
import Community from './Community';
import Different from './Different';
import EventPoster from './EventPoster';
import HomeEvents from './HomeEvents';
import OurBlog from './OurBlog';
import Ship from './Ship';
import SigninBanner from './SigninBanner';
import Slider from './Slider';
import event1 from '../../images/Event/Event-poster-1.jpg'
import { Image } from 'react-bootstrap';

const Home = () => {
    const [buttonOnPopup, setButtonPopup] = useState(false)
    const [timedPopup, setTimedPopup] = useState(false)

    useEffect(() => {
        setTimeout (() => {
            setTimedPopup(true)
        }, 5000);
    }, []);

    return (
        <>
            <Header />
            <div className='greenBg'>
                {/* <button onClick={() => setButtonPopup(true)}>popup</button> */}
                <Popup trigger={timedPopup} setTrigger={setTimedPopup} >
                    {/* <Image src={event1} alt="EventPoster"  style={{width:"75%"}} /> */}
                </Popup>
                <Slider />
                <EventPoster />
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