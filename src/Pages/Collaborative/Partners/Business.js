import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import business from './../../../images/program/business.png';
import UseBlogs from '../../../hooks/UseBlogs';
import { Link } from 'react-router-dom';
import { Input } from '@mui/material';
import GoToTop from '../../../GotoTop';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

const ariaLabel = { 'aria-label': 'description' };


const Business = () => {

    const [schools] = UseBlogs();

    return (
        <>
        <Header />
        <section className='green-bg mb-5'>
            <Container className='py-5'>
                <Row className='banner-horizontal'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image src={business} className='banner-images'/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className='text-center green horizontal'>
                            <h2 className=' banner-title mb-4'>
                                Business
                            </h2>
                            <p className='banner-details'>
                            We offer financial services and advice to businesses to help them make the smart financial decisions.
                            </p>
                        </div>
                    </Col>
                </Row>
             </Container>
        </section>
        <Container>
        <Row>
                <Col xs={12} sm={12} md={7} lg={8} xl={8}>
                <div className='green-bg text-center pbshadow py-4 mb-5 d-sm-block d-md-none'>
                    <Input placeholder="Search here..." inputProps={ariaLabel} className="w-75 search"/>
                </div>
                    {
                        schools.map (school => <div className='pb-5 green-bg mb-5 pbshadow me-xl-5 me-lg-4 me-md-0 me-sm-0' key={school.id}>
                        <div className=''>
                            <Image src={school.images} className='images'/>
                        </div>
                        
                        <div>
                            <Link to={`/blog/${school.id}`} className=''> <h5 className='post-title'>{school.title}</h5></Link>
                            <p className='post-details'>{school.details} <Link to={`/school/${school.id}`} style={{color:"#F37559"}}> ...Keep Reading</Link></p> 
                        </div>
                        <div className='text-center'>
                            <div className='py-2'>
                            <Link to={`/blog/${school.id}`} style={{color:"#F37559"}}><i className="fas fa-user-circle mx-2 fs-5 green"></i>{school.category}</Link>
                                <i className=" mx-2 fs-4 green">|</i>
                                <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                            </div>
                        </div>
                    </div>)
                    }
                </Col>
                <Col xs={12} sm={12} md={5} lg={4} xl={4}>
                    <div className='green-bg text-center pbshadow py-4 mb-5 d-none d-md-block d-lg-block d-xl-block'>
                    <Input placeholder="Search here..." inputProps={ariaLabel} className="w-75 search"/>
                    </div>
                    <div className='green-bg my-5 pbshadow'>
                        <div className='category'>
                            <h4 className='p-category'>Category</h4>

                            <Link to={`/school`}><p className='p-categoryItem'>School</p></Link>
                            <Link to={`/university`}><p className='p-categoryItem'>University</p></Link>
                            <Link to={`/business`}><p className='p-categoryItem'>Business</p></Link>
                            <Link to={`/nonprofit`}><p className='p-categoryItem'>Non-Profit</p></Link>
                            <Link to={`/employee`}><p className='p-categoryItem'>Employee</p></Link>
                        </div>
                    </div>
                    <div className='green-bg pbshadow d-none d-md-block d-lg-block d-xl-block'>
                        <div className='my-5 py-4'>
                            <div className='text-center pb-3 green'>
                                <h5 className='py-3'>Follow</h5>
                                <i className="fab fa-twitter mx-2 fs-3 "></i>
                                <i className="fab fa-facebook mx-2 fs-3 "></i>
                                <i className="fab fa-instagram mx-2 fs-3 "></i>
                                <i className="fab fa-youtube mx-2 fs-3 "></i>
                                <i className="fab fa-linkedin mx-2 fs-3 "></i>
                            </div>
                        </div>
                    </div>

                    <div className='green-bg pbshadow'>
                        <div className='my-5 py-4'>
                            <div className=' pb-3 px-4'>
                                <h5 className='py-3 text-center'>Recent Post</h5>
                                {
                                    schools.map ( blo => <Row key={blo.id}>
                                        <Col lg={5} xl={5}>
                                            <div className=''>
                                                <Image src={blo.images} className='images my-3'/>
                                            </div>
                                        </Col>
                                        <Col lg={7} xl={7}>
                                            <div className='my-3'>
                                                <h6 className='recent-title'>{blo.title.slice(0,40)}</h6>
                                                <h6 className="recent-category">{blo.category}</h6>
                                            </div>
                                        </Col>
                                    </Row>)
                                }
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <GoToTop />
        <Footer />
        </>
    );
};

export default Business;