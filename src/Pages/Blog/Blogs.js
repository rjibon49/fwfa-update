import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import UseBlogs from '../../hooks/UseBlogs';
import blogi from './../../images/blog/blog.png';
import './../Style/Style.css'
import { Link } from 'react-router-dom';
import { Input } from '@mui/material';
import GoToTop from '../../GotoTop';
import things from './../../videos/20Things.mp4'
import fiveeasy from './../../videos/fiveEasy.mp4'
import sixSimple from './../../videos/sixSample.mp4'
import gettingInto from './../../videos/gettingInto.mp4'
import sixTips from './../../videos/sixTips.mp4'
import ReactPlayer from 'react-player';
import Facebook from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Aos from 'aos';
import { Typewriter } from 'react-simple-typewriter';

const ariaLabel = { 'aria-label': 'description' };

const Blogs = () => {

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing:'ease-in'
        });
        
    },[])

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
                        <Image src={blogi} className='images' data-aos="zoom-in"/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className='text-center green horizontal'>
                            <h2 className='banner-title mb-4'>
                            <Typewriter
                                    // cursor
                                    // cursorStyle="_"
                                    typeSpeed={100}
                                    // deleteSpeed={50}
                                    delaySpeed={500}
                                    words={['Our Blog']}
                                    />
                            </h2>
                            <p className='banner-details' data-aos="slide-left">
                            Our curriculum has been designed to engage students regardless of their ethnicity, race, family structure, or socio-economic status. It is also designed to be an interactive experience for all with the aid of visuals and extensive narratives where necessary.
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
                <div className='pb-5 green-bg mb-5 pbshadow me-xl-5 me-md-1' data-aos="zoom-in">
                    <div className=''>
                        <ReactPlayer 
                            width='100%'
                            height='100%'
                            controls
                            url={things}
                            />
                    </div>
                    
                    <div>
                        <Link as={Link} to={`/article1`} className=''> <h5 className='post-title'>20 Things Everyone Should Know About the Financial Industry</h5></Link>
                        <div className='pb-4 ps-4'>
                                        <span className='pe-5' style={{fontSize:"10px"}}>Sunday, June-06</span>
                                        <span className='ps-5' style={{fontSize:"10px"}}>11:30 - 3:00</span>
                                    </div>
                        <p className='post-details'>When it comes to choosing the right financial professional for your particular needs, it might not take much time before you scratch your head wondering where to begin or what qualities and credentials are needed for you and your family.You can just check log onto the internet and you’ll see that there are lots of ways to learn more about financial education. However, going through all this information can leave someone to feel uncertain about how best to start. Having the correct information to start with will help you approach the financial industry with eyes wide open having both healthy skepticism that can protect you and confidence.. <Link as={Link} to={`/article1`} className='e-link'> Continue Reading</Link></p> 
                    </div>
                </div>
                <div className='pb-5 green-bg mb-5 pbshadow me-xl-5 me-md-1' data-aos="zoom-in">
                    <div className=''>
                        <ReactPlayer 
                            width='100%'
                            height='100%'
                            controls
                            url={fiveeasy}
                            />
                    </div>
                    
                    <div>
                        <Link as={Link} to={`/article2`} className=''> <h5 className='post-title'>Five Easy Steps You Can Try To Change Your Money Mindset</h5></Link>
                        <div className='pb-4 ps-4'>
                                        <span className='pe-5' style={{fontSize:"10px"}}>Sunday, June-06</span>
                                        <span className='ps-5' style={{fontSize:"10px"}}>11:30 - 3:00</span>
                                    </div>
                        <p className='post-details'>Change and control work side by side. Sometimes change is within your scope of control, while some remains outside it. However, there are times or situations where that you can’t control it and your financial health is one of them. People normally focus on the money aspects they cannot control such as returns or the market, instead of focusing on aspects they can control such as spending, investing, savings, goal-setting, and more..<Link as={Link} to={`/article2`} className='e-link'> Continue Reading</Link></p>
                    </div>
                </div>
                <div className='pb-5 green-bg mb-5 pbshadow me-xl-5 me-md-1' data-aos="zoom-in">
                    <div className=''>
                        <ReactPlayer 
                            width='100%'
                            height='100%'
                            controls
                            url={sixSimple}
                            />
                    </div>
                    
                    <div>
                        <Link as={Link} to={`/article3`} className=''> <h5 className='post-title'>Six Simple Ways to Save More Money</h5></Link>
                        <div className='pb-4 ps-4'>
                                        <span className='pe-5' style={{fontSize:"10px"}}>Sunday, June-06</span>
                                        <span className='ps-5' style={{fontSize:"10px"}}>11:30 - 3:00</span>
                                    </div>
                        <p className='post-details'>Many people are suffering during this time. Some people lost their jobs, businesses are closed, and some continuously struggle to make ends meet with what they have. In short, saving money can are challenging these days..<Link as={Link} to={`/article3`} className='e-link'> Continue Reading</Link></p>
                    </div>
                </div>
                <div className='pb-5 green-bg mb-5 pbshadow me-xl-5 me-md-1' data-aos="zoom-in">
                    <div className=''>
                        <ReactPlayer 
                            width='100%'
                            height='100%'
                            controls
                            url={gettingInto}
                            />
                    </div>
                    
                    <div>
                        <Link as={Link} to={`/article4`} className=''> <h5 className='post-title'>Getting Into Good Financial State While You Are Young</h5></Link>
                        <div className='pb-4 ps-4'>
                                        <span className='pe-5' style={{fontSize:"10px"}}>Sunday, June-06</span>
                                        <span className='ps-5' style={{fontSize:"10px"}}>11:30 - 3:00</span>
                                    </div>
                        <p className='post-details'>When you are still in your 20’s, being carefree and unconcerned about the future is easy and simple. But financially, this can be a mistake. Getting into a good financial state while you are still young is worth it and planning long-term goals is essential..<Link as={Link} to={`/article4`} className='e-link'> Continue Reading</Link></p>
                    </div>
                </div>
                <div className='pb-5 green-bg mb-5 pbshadow me-xl-5 me-md-1' data-aos="zoom-in">
                    <div className=''>
                        <ReactPlayer 
                            width='100%'
                            height='100%'
                            controls
                            url={sixTips}
                            />
                    </div>
                    
                    <div>
                        <Link as={Link} to={`/article5`} className=''> <h5 className='post-title'>Six Tips To Finding a Budget-Friendly Health Insurance When You Become Self-Employed</h5></Link>
                        <div className='pb-4 ps-4'>
                                        <span className='pe-5' style={{fontSize:"10px"}}>Sunday, June-06</span>
                                        <span className='ps-5' style={{fontSize:"10px"}}>11:30 - 3:00</span>
                                    </div>
                        <p className='post-details'>Leaving your job, working as a freelancer, or becoming self-employed for any reason does not mean you cannot get budget-friendly health insurance. Today, we will cover six tips that can help you find health insurance. This is so you and your family can get the coverage you need no matter what your employment situation and status are..<Link as={Link} to={`/article5`} className='e-link'> Continue Reading</Link></p>
                    </div>
                </div>
                </Col>
                <Col xs={12} sm={12} md={5} lg={4} xl={4}>
                    <div className='green-bg text-center pbshadow py-4 mb-5 d-none d-md-block d-lg-block d-xl-block '>
                    <Input placeholder="Search here..." inputProps={ariaLabel} className="w-75 search"/>
                    </div>
                    <div className='green-bg my-3 pbshadow text-center'>
                        <div className='py-5'>
                            <h6 className='pb-3 fw-bold fs-4'>Category</h6>

                            <Link to={`/school`}><p className='b-categoryItem'>School</p></Link>
                            <Link to={`/university`}><p className='b-categoryItem'>University</p></Link>
                            <Link to={`/business`}><p className='b-categoryItem'>Business</p></Link>
                            <Link to={`/nonprofit`}><p className='b-categoryItem'>Non-Profit</p></Link>
                            <Link to={`/employee`}><p className='b-categoryItem'>Employee</p></Link>
                        </div>
                    </div>
                    <div className='green-bg pbshadow d-none d-md-block d-lg-block d-xl-block'>
                        <div className='my-5 py-4'>
                            <div className='text-center pb-3 green'>
                                <h5 className='py-3'>Follow</h5>
                                <TwitterIcon className='mx-2 ' />
                                <Facebook  className='mx-2 '/>
                                <InstagramIcon className='mx-2 '/>
                                <YouTubeIcon className='mx-2 '/>
                                <LinkedInIcon className='mx-2 ' onClick={hancleClickLinkedin}/>
                            </div>
                        </div>
                    </div>

                    <div className='green-bg pbshadow'>
                        <div className='my-5 py-4'>
                            <div className=' pb-3 px-4'>
                                <h5 className='py-3 text-center'>Recent Post</h5>
                                {
                                    bls.map ( blo => <Row key={blo.id}>
                                        <Col lg={5} xl={5}>
                                            <div className=''>
                                                <Image src={blo.images} className='images my-3'/>
                                            </div>
                                        </Col>
                                        <Col lg={7} xl={7}>
                                            <div className='my-3'>
                                                <h6 className='recent-title'>{blo.title.slice(0,40)}</h6>
                                                <Link to={`/school`}><h6 className="recent-category">{blo.category}</h6></Link>
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

export default Blogs;