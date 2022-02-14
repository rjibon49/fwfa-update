import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import donate from './../../images/banner/donate.png';

const Ship = () => {
    return (
        <>
            <div >
                <h2 className='section-title'>Stewardship</h2>
            </div>
            <div className='green-bg sb-form'>
                <Container className='my-5'>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div>
                                <Image src={donate} className='ship-img' />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div className='sb-form'>
                                <Button className='donate-btn'>Donation</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Ship;