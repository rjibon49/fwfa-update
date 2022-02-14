import React from 'react';
import { Container} from 'react-bootstrap';
import './../Style/Style.css'
import ReactPlayer from 'react-player';
import FWFAExplainerVideo from './../../videos/FWFAExplainerVideo.mp4';
// import bannerImg from './../../../videos/banner.png';

const Banner = () => {
    return (
        <div>
            <div>
                <h2 className='section-title'>We are passionate about our mission and we strive for excellence</h2>
            </div>
            <div className="green-bg py-2">
                <Container className='my-5 '>
                
                {/* <div style={{height:"400px",}} className='green-bg pbshadow'>
                    <div className='banner-img'>
                        <Image src={play} style={{height:"120px"}}/>
                    </div>
                </div> */}
                <ReactPlayer
                className="react-pl"
                width='100%'
                // height='400px'
                controls
                url={FWFAExplainerVideo}
                light={true}
                // playIcon
                />
            </Container>
            </div>
        </div>
    );
};

export default Banner;