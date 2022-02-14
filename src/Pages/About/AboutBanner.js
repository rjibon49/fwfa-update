import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './../Style/Style.css';
import bannaertop from './../../images/About/bannertop.png';
import Aos from 'aos';
import { Typewriter } from 'react-simple-typewriter';

const AboutBanner = () => {

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing:'ease-in'
        });
        
    },[])
    return (
        <section className='green-bg mb-5 py-5' >
            <Container className='py-5'>
                <Row className='banner-horizontal'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image src={bannaertop} className='images' data-aos="zoom-in"/> 
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className='text-white' >
                            <h2 className='text-center banner-title mb-4'>
                            <Typewriter
                                    // cursor
                                    // cursorStyle="_"
                                    typeSpeed={100}
                                    // deleteSpeed={50}
                                    delaySpeed={500}
                                    words={['About US']}
                                    />
                            </h2>
                            <p className='banner-details' data-aos="slide-left">
                            Financial Wellness for All, Inc. (FWFA) was established in December 2019 as we see there is a need in financial awareness, financial literacy, and financial coaching to help those unserved by the traditional financial adviser.  Our non-profit seeks to help everyone. We are a non-profit 501c3 tax exempt organization.  To the extent of the law – your donation is tax deductible.   
                            </p>
                        </div> 
                    </Col>
                </Row>
             </Container>
        </section>
    );
};

export default AboutBanner;