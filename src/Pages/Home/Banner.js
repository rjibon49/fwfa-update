import React from 'react';
import { Container} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import FWFAExplainerVideo from './../../videos/FWFAExplainerVideo.mp4';
// import bannerImg from './../../../videos/banner.png';

const Banner = () => {
    return (
        <div>
            <div>
                <h2 className='section-title'>We are passionate about our mission and we strive for excellence</h2>
            </div>
                <Container className='my-5 green-bg py-2'>
                
                {/* <div style={{height:"400px",}} className='green-bg pbshadow'>
                    <div className='banner-img'>
                        <Image src={play} style={{height:"120px"}}/>
                    </div>
                </div> */}
                <ReactPlayer
                className="react-pl"
                width='100%'
                height='730px'
                controls
                url={FWFAExplainerVideo}
                light={true}
                // playIcon
                />
            </Container>
        </div>
    );
};

export default Banner;