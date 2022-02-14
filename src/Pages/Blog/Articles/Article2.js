import { Input } from '@mui/material';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogi from './../../../images/blog/blog.png'
import article1 from './../../../images/collaborative/business1.png'
import UseBlogs from '../../../hooks/UseBlogs';
import BlogCommentData from '../BlogCommentData';
import GoToTop from '../../../GotoTop';
import fiveeasy from './../../../videos/fiveEasy.mp4'
import ReactPlayer from 'react-player';

const ariaLabel = { 'aria-label': 'description' };

const Article2 = () => {

    // const {blogId} =useParams();

    // const [blogDetail, setBlogDetail] = useState({});

    // useEffect(() => {
    //     const url = `https://api.npoint.io/1eedb30fc7addb69b6d4/${blogId}`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data =>setBlogDetail(data))
    // },[blogId]);

    // const {title, images, category, details} = blogDetail; 

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
                        <Image src={blogi} className='banner-images'/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className='text-center green horizontal'>
                            <h2 className='banner-title mb-4'>
                                Our Blog
                            </h2>
                            <p className='banner-details'>
                            Our curriculum has been designed to engage students regardless of their ethnicity, race, family structure, or socio-economic status. It is also designed to be an interactive experience for all with the aid of visuals and extensive narratives where necessary.
                            </p>
                        </div>
                    </Col>
                </Row>
             </Container>
        </section>

        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                <div className='green-bg text-center pbshadow py-4 mb-5 d-sm-block d-md-block d-lg-none d-xl-none'>
                    <Input placeholder="Search here..." inputProps={ariaLabel} className="w-75 search"/>
                </div>
                    <div className='p-xl-5 p-lg-4 p-md-3 p-sm-1 green-bg mb-5 rounded pbshadow '>
                        {/* <Image src={article1} className='images'/> */}
                        {/* <div className='text-center'>
                            <div className='py-2'>
                                <i className="fas fa-user-circle mx-2 fs-5 green"></i>{category}
                                <i className=" mx-2 fs-4 green">|</i>
                                <i className="far fa-comment-dots mx-2 fs-5 green">03 Comments</i>
                            </div>
                        </div> */}
                        <ReactPlayer 
                            width='100%'
                            height='100%'
                            controls
                            url={fiveeasy}
                            // light={bannerImg}
                            // playIcon
                            />
                        <div className='pb-5'>
                            <h5 className='post-title'>Five Easy Steps You Can Try To Change Your Money Mindset</h5>

                            <p className='post-details'>Change and control work side by side. Sometimes change is within your scope of control, while some remains outside it. However, there are times or situations where that you can’t control it and your financial health is one of them. People normally focus on the money aspects they cannot control such as returns or the market, instead of focusing on aspects they can control such as spending, investing, savings, goal-setting, and more. <br /> <br />

                            When it comes to personal finance, feeling in control or not has something to do with your financial perspective also known as the money mindset. So, what exactly is money mindset, and do you have the capability to change it? Let’s find out.
                            <br /> <br />

                            <b> What’s a Money Mindset?</b> <br />

                            A money mindset is a unique perspective, narrative, and attitude you create using your thoughts, beliefs, and actions towards money. It extends beyond the bounds of your personal life and enters your general feelings about finances.<br /> <br />
                            Your money mindset tells you the way you spend, manage, save, and invest your finances. When you have a better understanding of your perspective towards finances, you start to see where your financial habits come from. Having a money mindset can influence your opinion and actions, which can have both positive and negative effects.<br /> <br />
                            When you have a healthy money mindset you can feel more secure, confident, energized, and more knowledgeable about your financial life. But if you have a negative money mindset you might feel guarded, uncomfortable, or anxious about your current financial shape. <br /> <br />
                            By asking some of these questions you will get to know more of your money mindset:<br /> <br />
                            <ul className='ms-4'>
                                <li>How does your financial situation make you feel?</li>
                                <li>Are you comfortable talking with your parents, friends, spouse, etc. regarding money matters?</li>
                                <li>Do you like your financial habits?</li>
                                <li>Is your financial future secure?</li>
                                <li>Do you often compare your financial situation with other people?</li>
                                <li>Are you confident that you can achieve your financial goals?</li>
                            </ul><br />
                            <p> <b>Five Steps to Change Your Money Mindset for the Better</b> </p>
                            <p>Personal finances change and fluctuate which gives you time for improvement. Take note that your money mindset is something that you have control of. Here are some tips on how you can evolve and make more progress:</p> <br />
                            <p> <b>1.	Believe You are Destined and Deserve Success</b> </p>
                            <p>Having that belief that you can reach your goal and be successful is the first step. Once you have that foundation, you can start creating habits that support those beliefs. <br />When you have this kind of attitude it gives you time to find success and set new financial goals. Having your goals is the foundation of your financial plan. Once your goals are set, you can start creating your key milestones to celebrate your work towards them. </p> <br />
                            <p><b>2.	Picture Your Future Self</b></p>
                            <p> Picturing yourself 5, 10, 20, even 30 years from now helps you check if you are on the right track to attaining it. When you have an idea of your future self, you can get the motivation that you need to get there. </p> <br />
                            <p><b>3.	Give Freely and Generously</b></p>
                            <p> When you are comfortable giving back to society through organizations, causes and people say something about your money mindset. In general, those who knowingly make space for giving feel more secure, confident, and fulfilled with their money. <br />Every person has their capacity of giving, but when you are comfortable with giving some of your money away, you can move from a space of scarcity to a space of abundance. <b /> Having an abundance mindset sets you up for financial success and structures your financial situation in a way that gives meaning and fulfillment.</p> <br />

                            <p><b>4.	Employ Yourself with Knowledge</b></p>
                            <p>One of the greatest ways to fight negative habits is by learning and doing healthier financial habits. Financial management is something that you need to work on and spend time with to get right.</p> <br />
                            <ul className='ms-4'>
                                <li>Allot some of your time in reading books, articles, and blogs. Such resources can widen your perspective and help you improve the areas where you are having a hard time.</li>
                                <li>Ask your family and friend if you have any questions. They might share some of their wisdom, knowledge, or experience that can help you.</li>
                                <li>Seek help from a financial professional. They can help you address your money mindset and give you practical tools to improve it.</li>
                            </ul><br />
                            <p>Having as much knowledge gives you power. It also helps you make the most of the resources you have that will help you shift your mindset.</p> <br />

                            <p><b>5.	Know Where You Are and Where You Want To Be</b></p>
                            <p>If you want to change something, you need to understand these two elements:</p> <br />
                            <ol className='ms-4'>
                                <li>Where you are.</li>
                                <li>Where you want to be.</li>
                            </ol><br />
                            <p>You need to know your risk tolerance, set your goals, and collaborate with someone you trust. All of these elements will help you in creating a positive and fulfilling money mindset.</p> <br />
                            <p><b>Live Plentifully</b></p>
                            <p>Your money mindset fuels your attitudes, thoughts, and perspectives towards money. Take note of the control you have when it comes to how you view, approach, and manage your finances. When you know and understand your current money mindset, you can create positive habits that will help you accomplish your goals.</p> <br />
                            

</p> 
                        </div>

                        <BlogCommentData />  

                    </div>
                    
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <div className='green-bg text-center pbshadow py-4 mb-5'>
                        <Input placeholder="Search here..." inputProps={ariaLabel} className="w-75"/>
                    </div>
                    <div className='green-bg my-3 pbshadow text-center'>
                        <div className='p-5'>
                            <h6 className='pb-3 fw-bold fs-4'>Category</h6>

                            <Link to={`/school`}><p className='b-categoryItem'>School</p></Link>
                            <Link to={`/university`}><p className='b-categoryItem'>University</p></Link>
                            <Link to={`/business`}><p className='b-categoryItem'>Business</p></Link>
                            <Link to={`/nonprofit`}><p className='b-categoryItem'>Non-Profit</p></Link>
                            <Link to={`/employee`}><p className='b-categoryItem'>Employee</p></Link>
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
                                                <Link to={`/blog/${blo.id}`}> <h5 className='recent-title'>{blo.title.slice(0,40)}</h5></Link>
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

export default Article2;