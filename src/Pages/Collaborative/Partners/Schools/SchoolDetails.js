import { Input } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import GoToTop from '../../../../GotoTop';
import UseBlogs from '../../../../hooks/UseBlogs';
import school from './../../../../images/program/school.png';

const ariaLabel = { 'aria-label': 'description' };

const SchoolDetails = () => {

    const {schoolId} =useParams();

    const [schoolDetail, setSchoolDetail] = useState({});

    useEffect(() => {
        const url = `https://api.npoint.io/1eedb30fc7addb69b6d4/${schoolId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setSchoolDetail(data))
    },[schoolDetail]);

    const {title, images, category, details} = schoolDetail; 

    const [bls] = UseBlogs();

    const hancleClickLinkedin = () => {
        window.open("https://www.linkedin.com/company/71980528/");
    };

    return (
        <>
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
                            When it comes to choosing the right financial professional for your particular needs, it might not take much time before you scratch your head wondering where to begin or what qualities and credentials are needed for you and your family.You can just check log onto the internet and you’ll see that there are lots of ways to learn more about financial education. However, going through all this information can leave someone to feel uncertain about how best to start. Having the correct information to start with will help you approach the financial industry with eyes wide open having both healthy skepticism that can protect you and confidence..
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
                    <div className='p-xl-5 p-lg-4 p-md-3 p-sm-1 green-bg mb-5 rounded pbshadow'>
                        <Image src={images} className='images'/>
                        <div>
                            <h5 className='post-title'>{title}</h5>
                            <p className='post-details'>{details}</p> 
                        </div>

                        <div className='text-center'>
                            <div className='py-2'>
                                <a href="#"><i className="fas fa-user-circle mx-2 fs-5 green"></i>{category}</a>
                                <i className=" mx-2 fs-4 green">|</i>
                                <a href="#"><i className="far fa-comment-dots mx-2 fs-5 green"></i>03 Comments</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={5} lg={4} xl={4}>
                <div className='green-bg text-center pbshadow py-4 mb-5 d-none d-md-block d-lg-block d-xl-block '>
                    <Input placeholder="Search here..." inputProps={ariaLabel} className="w-75 search"/>
                    </div>
                    <div className='green-bg my-5 pbshadow text-center'>
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
                                <h5 className='py-3 '>Recent Post</h5>
                                {
                                    bls.map ( blo => <Row key={blo.id}>
                                        <Col lg={5} xl={5}>
                                            <div className=''>
                                                <Image src={blo.images} className='images my-3'/>
                                            </div>
                                        </Col>
                                        <Col lg={7} xl={7}>
                                            <div className='my-3'>
                                                <h5 className='recent-title'>{blo.title.slice(0,40)}</h5>
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
        </>
    );
};

export default SchoolDetails;