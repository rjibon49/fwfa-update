import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
// import UseBlogs from '../../../hooks/UseBlogs';
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import things from './../../videos/20Things.mp4'
import fiveeasy from './../../videos/fiveEasy.mp4'
import sixSimple from './../../videos/sixSample.mp4'
import gettingInto from './../../videos/gettingInto.mp4'
import sixTips from './../../videos/sixTips.mp4'
import ReactPlayer from 'react-player';

const OurBlog = () => {

    // const [bitem] = UseBlogs();

    return (
        <>
        <div className='my-5'>
            <div className='text-center green pb-5'>
                <h2 className='page-title'>Our Blog</h2>
            </div>
            <Container>
                <Row >
                    <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                        
                    </Col>
                </Row>
            <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                          }}
                        modules={[Autoplay, Pagination, Navigation]} 
                        className="mySwiper pb-5"
                    >
                        {/* {
                            bitem.map (item => <SwiperSlide key={item.id}> <div className='blog-card'>
                                    <Image className='images' src={item.images} />
                                    <Link to={`/blog/${item.id}`}><h3 className='blog-card-title'>{item.title.slice(0,20)}</h3> </Link>
                                    <p className='blog-card-details'>{item.details.slice(0, 250)}...<Link to={`/blog/${item.id}`}>continue Reading</Link></p>
                                    <span style={{fontSize:"10px", fontWeight:"700", lineHeight:"40px"}}>August 6, 2021</span>
                                </div>
                                </SwiperSlide> )
                        } */}
                        <SwiperSlide> 
                            <div className='blog-card'>
                                {/* <Image className='images' src={item.images} /> */}
                                <ReactPlayer 
                                    width='100%'
                                    height='100%'
                                    controls
                                    url={things}
                                    // light={bannerImg}
                                    // playIcon
                                    />
                                <div>
                        <Link as={Link} to={`/article1`} className=''> <h5 className='post-title'>20 Things Everyone Should Know About the Financial</h5></Link>
                        <p className='post-details'>When it comes to choosing the right financial professional for your particular needs, it might not take much time before you scratch your head wondering where to begin or what qualities and credentials are needed.. <Link as={Link} to={`/article1`} style={{color:"#26e761"}}> Continue Reading</Link></p> 
                    </div>
                                <span style={{fontSize:"10px", fontWeight:"700", lineHeight:"40px",color:"white"}}>August 6, 2021</span>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className='blog-card'>
                                {/* <Image className='images' src={item.images} /> */}
                                <ReactPlayer 
                                    width='100%'
                                    height='100%'
                                    controls
                                    url={fiveeasy}
                                    // light={bannerImg}
                                    // playIcon
                                    />
                                <div>
                        <Link as={Link} to={`/article2`} className=''> <h5 className='post-title'>Five Easy Steps You Can Try To Change Your Money Mindset</h5></Link>
                        <p className='post-details'>Change and control work side by side. Sometimes change is within your scope of control, while some remains outside it. However, there are times or situations where that you can’t control it..<Link as={Link} to={`/article2`} style={{color:"#26e761"}}> Continue Reading</Link></p>
                    </div>
                                <span style={{fontSize:"10px", fontWeight:"700", lineHeight:"40px"}}>August 6, 2021</span>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className='blog-card'>
                                {/* <Image className='images' src={item.images} /> */}
                                <ReactPlayer 
                                    width='100%'
                                    height='100%'
                                    controls
                                    url={sixSimple}
                                    // light={bannerImg}
                                    // playIcon
                                    />
                                <div>
                        <Link as={Link} to={`/article3`} className=''> <h5 className='post-title'>Six Simple Ways to Save More Money</h5></Link>
                        <p className='post-details'>Many people are suffering during this time. Some people lost their jobs, businesses are closed, and some continuously struggle to make ends meet with what they have. In short, saving money..<Link as={Link} to={`/article3`} style={{color:"#26e761"}}> Continue Reading</Link></p>
                    </div>
                                <span style={{fontSize:"10px", fontWeight:"700", lineHeight:"40px"}}>August 6, 2021</span>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className='blog-card'>
                                {/* <Image className='images' src={item.images} /> */}
                                <ReactPlayer 
                                    width='100%'
                                    height='100%'
                                    controls
                                    url={gettingInto}
                                    // light={bannerImg}
                                    // playIcon
                                    />
                                <div>
                        <Link as={Link} to={`/article4`} className=''> <h5 className='post-title'>Getting Into Good Financial State While You Are Young</h5></Link>
                        <p className='post-details'>When you are still in your 20’s, being carefree and unconcerned about the future is easy and simple. But financially, this can be a mistake. Getting into a good financial state while you are still young is worth it..<Link as={Link} to={`/article4`} style={{color:"#26e761"}}> Continue Reading</Link></p>
                    </div>
                                <span style={{fontSize:"10px", fontWeight:"700", lineHeight:"40px"}}>August 6, 2021</span>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className='blog-card'>
                                {/* <Image className='images' src={item.images} /> */}
                                <ReactPlayer 
                                    width='100%'
                                    height='100%'
                                    controls
                                    url={sixTips}
                                    // light={bannerImg}
                                    // playIcon
                                    />
                                <div>
                        <Link as={Link} to={`/article5`} className=''> <h5 className='post-title'>Six Tips To Finding a Budget-Friendly</h5></Link>
                        <p className='post-details'>Leaving your job, working as a freelancer, or becoming self-employed for any reason does not mean you cannot get budget-friendly health insurance. Today, we will cover six tips that can help you find health insurance..<Link as={Link} to={`/article5`} style={{color:"#26e761"}}> Continue Reading</Link></p>
                    </div>
                                <span style={{fontSize:"10px", fontWeight:"700", lineHeight:"40px"}}>August 6, 2021</span>
                                </div>
                        </SwiperSlide>
                    </Swiper>
            </Container>
            

            {/* <Carousel variant="dark">
                <Carousel.Item className='carousel-item-dot'>
                <Container>
                    <Row className=''>
                        {
                            bitem.map (item => <Col xs={12} sm={12} md={6} lg={4} xl={4} key={item.id}>
                                <div className='blog-card'>
                                    <Image className='images' src={item.images} />
                                    <Link to={`/blog/${item.id}`}><h3 className='blog-card-title'>{item.title.slice(0,20)}</h3> </Link>
                                    <p className='blog-card-details'>{item.details.slice(0, 250)}...<Link to={`/blog/${item.id}`}>continue Reading</Link></p>
                                    <span style={{fontSize:"10px", fontWeight:"700", lineHeight:"40px"}}>August 6, 2021</span>
                                </div>
                            </Col>).slice(0,3)
                        }
                    </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className='carousel-item-dot'>
                <Container>
                
                    <Row className=''>
                        {
                            bitem.map (item => <Col xs={12} sm={12} md={6} lg={4} xl={4} key={item.id}>
                                <div className='blog-card'>
                                    <Image className='images' src={item.images} />
                                    <Link to={`/blog/${item.id}`}><h3 className='blog-card-title'>{item.title.slice(0,20)}</h3> </Link>
                                    <p className='blog-card-details'>{item.details.slice(0, 250)}...<Link to={`/blog/${item.id}`}>continue Reading</Link></p>
                                    <span style={{fontSize:"10px", fontWeight:"700", lineHeight:"40px"}}>August 6, 2021</span>
                                </div>
                            </Col>).slice(1,4)
                        }
                    </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item className='carousel-item-dot'>
                    <Container>
                    <Row className=''>
                        {
                            bitem.map (item => <Col xs={12} sm={12} md={6} lg={4} xl={4} key={item.id}>
                                <div className='blog-card'>
                                    <Image className='images' src={item.images} />
                                    <Link to={`/blog/${item.id}`}><h3 className='blog-card-title'>{item.title.slice(0,20)}</h3> </Link>
                                    <p className='blog-card-details'>{item.details.slice(0, 250)}...<Link to={`/blog/${item.id}`}>continue Reading</Link></p>
                                    <span style={{fontSize:"10px", fontWeight:"700", lineHeight:"40px"}}>August 6, 2021</span>
                                </div>
                            </Col>).slice(6,9)
                        }
                    </Row>
                    </Container>
                </Carousel.Item>
                </Carousel> */}
                </div>
        </>
    );
};

export default OurBlog;