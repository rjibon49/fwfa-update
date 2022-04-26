import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import donate from './../../images/banner/donate.png';

const Ship = () => {
    return (
        <>
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
                                <form action="https://www.paypal.com/donate" method="post" target="_top">
                                    <input type="hidden" name="hosted_button_id" value="PWEN8NYUJZKS6" />
                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Ship;