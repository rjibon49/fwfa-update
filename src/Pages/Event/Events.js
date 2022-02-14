import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
// import UseBlogs from '../../hooks/UseBlogs';
import home from './../../images/contact/home.png'
import phone from './../../images/contact/phone.png'
import email from './../../images/contact/email.png'
import { Link } from 'react-router-dom';
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

const Events = () => {

    // const [evnt] = UseBlogs();
    // const {title, images, details} = evnt;
    const hancleClickLinkedin = () => {
        window.open("https://www.linkedin.com/company/71980528/");
    };

    return (
        <section className='my-5'>
            <Container>
                <div className='text-center pb-5'>
                    <h2 className='page-title'>Events</h2>
                </div>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={7} xl={7}>
                        <div className='green-bg px-5 pb-5 me-xl-5 pbshadow'>
                            <div className='text-center py-5'>
                                <h3 className='event-t pb-4 fw-bold'>Upcoming Events</h3>
                                <h6 className='pb-4'>28 February 2022</h6>
                                <p className='pb-4 px-5'>Write Coming Soon here</p>
                            </div>
                            <div className='text-center text-white fw-bold d-flex justify-content-center pb-5'>
                                <p className='bg-green p-3 rounded mx-sm-1 mx-xl-3 '>23 <br /> Days</p>
                                <p className='bg-green p-3 rounded mx-sm-1 mx-xl-3'>23 <br /> Hrs</p>
                                <p className='bg-green p-3 rounded mx-sm-1 mx-xl-3'>07 <br /> Mins</p>
                                <p className='bg-green p-3 rounded mx-sm-1 mx-xl-3'>19 <br /> Secs</p>
                            </div>
                        </div>

                        
                        <div className='pb-5 green-bg my-5 pbshadow me-xl-5'>
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
                        <div className='pb-5 green-bg mb-5 pbshadow me-xl-5'>
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
                        <div className='pb-5 green-bg mb-5 pbshadow me-xl-5'>
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
                        <div className='pb-5 green-bg mb-5 pbshadow me-xl-5'>
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
                        <div className='pb-5 green-bg mb-5 pbshadow me-xl-5'>
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

                    <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                        <div className='green-bg my-3 pbshadow mx-xl-5 ms-lg-2'>
                            <div className='e-category'>

                                <Link to={`/school`}><p className='e-categoryItem'>School</p></Link>
                                <Link to={`/university`}><p className='e-categoryItem'>University</p></Link>
                                <Link to={`/business`}><p className='e-categoryItem'>Business</p></Link>
                                <Link to={`/nonprofit`}><p className='e-categoryItem'>Non-Profit</p></Link>
                                <Link to={`/employee`}><p className='e-categoryItem'>Employee</p></Link>
                            </div>
                        </div>
                        <div className='e-category-social d-none d-md-none d-lg-block d-xl-block'>
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
                        <div className='e-category-social d-none d-md-none d-lg-block d-xl-block'>
                        <h2 className='mt-5 py-5 text-center'>For More Inquiries</h2>
                            <div className='mb-5 pb-5 contact '>    
                                <p><i className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'><Image src={home} className='p-2 green-bg rounded mb-2'/></i><span className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'> Greater Palm Spring, CA-USA</span></p>
                                <p><i className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'><Image src={phone} className='p-2 green-bg rounded mb-2'/></i><span className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'>(617) 371-7731</span></p>
                                <p><i className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'><Image src={email} className='p-2 green-bg rounded'/></i><span className='ps-xl-4 ps-lg-3 ps-md-2 ps-sm-0'>Info@financialwellnessforall.org</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <GoToTop />
        </section>
    );
};

export default Events;