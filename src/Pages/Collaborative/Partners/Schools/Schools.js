import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import school from './../../../../images/program/school.png';
import UseBlogs from '../../../../hooks/UseBlogs';
import { Link } from 'react-router-dom';
import { Input } from '@mui/material';
import School from './School';
import Header from '../../../Shared/Header';
import Footer from '../../../Shared/Footer';

const ariaLabel = { 'aria-label': 'description' };


const Schools = () => {

    const [schools] = UseBlogs();

    const hancleClickLinkedin = () => {
        window.open("https://www.linkedin.com/company/71980528/");
    };

    return (
        <>
        <Header />
        <section className='green-bg mb-5'>
            <Container className='py-5'>
                <Row className='banner-horizontal'>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image src={school} className='banner-images'/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className='text-center green horizontal'>
                            <h2 className=' banner-title mb-4'>
                                School
                            </h2>
                            <p className='banner-details'>
                            We partnership with reputed schools to provide financial education, and leadership training to help students with financial wellness - we help them make the right financial decisions to make their future secure.
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
                        schools.map (school => <School
                            key={school.id}
                            school = {school}>
                        </School>)
                    }
                </Col>
                <Col xs={12} sm={12} md={5} lg={4} xl={4}>
                <div className='green-bg text-center pbshadow py-4 mb-5 d-none d-md-block d-lg-block d-xl-block '>
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
                    <div className='green-bg pbshadow d-none d-md-none d-lg-block d-xl-block'>
                        <div className='my-5 py-4'>
                            <div className='text-center pb-3 green'>
                                <h5 className='py-3'>Follow</h5>
                                <i className="fab fa-twitter mx-2 fs-3 "></i>
                                <i className="fab fa-facebook mx-2 fs-3 "></i>
                                <i className="fab fa-instagram mx-2 fs-3 "></i>
                                <i className="fab fa-youtube mx-2 fs-3 "></i>
                                <i className="fab fa-linkedin mx-2 fs-3 " onClick={hancleClickLinkedin}></i>
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
        <Footer />
        </>
    );
};

export default Schools;