import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseBlogs from '../../hooks/UseBlogs';

const HomeEvents = () => {

    const[evnt] = UseBlogs();

    return (
        <>
        <Container className='my-5'>
            <div className='text-center'>
                <h2 className='section-title'>Events</h2>
            </div>
            <Row className=''>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className='mb-5 mx-2'>
                        <h3 className='pb-3'>Todays Events</h3>
                        {
                            evnt.map(evn => <div className='green-bg' key={evn.id}>
                                <Image src={evn.images} className='images' />
                                <div className=''>
                                    <Link as={Link} to={`/article1`} className=''> <h3 className='black-title'>{evn.title}</h3> </Link>
                                        <div className='pb-3'>
                                             <p className='black-details'>{evn.details.slice(0,350)}..<Link as={Link} to={`/article1`} className='e-link'> Continue Reading</Link></p>
                                        </div>
                                        <div className='pb-4 ps-4'>
                                            <span className='pe-2' style={{fontSize:"10px"}}>Sunday, June-06</span>
                                            <span className='ps-2' style={{fontSize:"10px"}}>3:00 pm</span>
                                        </div>
                                </div>
                            </div>).slice(0,1)
                        }
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className=''>
                        <h3 className='pb-4 ms-5'>See All Events</h3>
                        <div className='green-bg py-4 mx-3'>
                        {
                            evnt.map(evn => <div className='p-3 ms-2' key={evn.id}>
                                <Row >
                                    <Col xl={4}> 
                                        <Image src={evn.images} className='images mb-4' />
                                    </Col>
                                    <Col xl={8}>
                                        <div className='pb-3'>
                                        <Link as={Link} to={`/article1`} className=''> <h3 className='recent-title ps-4'>{evn.title.slice(0,25)}</h3></Link>
                                            <div className='pb-1'>
                                                <p className='black-details'>{evn.details.slice(0, 150)}..<Link as={Link} to={`/article1`} className='e-link'> More Details</Link></p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>).slice(1,4)
                            
                        }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        </>
    );
};

export default HomeEvents;