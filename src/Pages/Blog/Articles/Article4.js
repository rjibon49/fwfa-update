import { Input } from '@mui/material';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogi from './../../../images/blog/blog.png'
import article3 from './../../../images/collaborative/school1.png'
import UseBlogs from '../../../hooks/UseBlogs';
import BlogCommentData from '../BlogCommentData';
import GoToTop from '../../../GotoTop';
import gettingInto from './../../../videos/gettingInto.mp4'
import ReactPlayer from 'react-player';

const ariaLabel = { 'aria-label': 'description' };

const Article4 = () => {

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
                    <div className='p-xl-5 p-lg-4 p-md-3 p-sm-1 green-bg mb-5 rounded pbshadow'>
                        {/* <Image src={article3} className='images'/> */}
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
                            url={gettingInto}
                            // light={bannerImg}
                            // playIcon
                            />
                        <div className='pb-5'>
                            <h5 className='post-title'>Getting Into Good Financial State While You Are Young</h5>

                            <p className='post-details'>When you are still in your 20’s, being carefree and unconcerned about the future is easy and simple. But financially, this can be a mistake. Getting into a good financial state while you are still young is worth it and planning long-term goals is essential.<br /> <br />

                            Why can’t you just think of the present? You can, but when you work on your financial situation now helps you create a better foundation for a brighter future. Here are some benefits of why you should start getting into a good financial state while you are still young. <br /> <br />

                            <p> <b>You Benefit from Compound Interest</b> </p>
                            <p>One of the biggest keys to building your wealth and savings for retirement is the power of compound interest. It means that the interest you earn on your money also earns interest. So, there is a potential for exponential growth.</p><br /> <p> For example, you make an initial investment of $5,000. It will earn a conservative annual return of 5%. And after a year, you will earn $250 (5% of $5,000), get a total of $5,250. After the second year, it will earn $262.50 (5% of $5,250), having your total up to $5,512.50.</p><br /><p> Your account balance will grow slowly but surely, and you’ll achieve that without any additional investment. When you reach the tenth year, your balance will grow up to $8,144.47. If you invest $250 per month with the same conditions, your balance will add up to $45,878.15. That will be a great return without much effort.</p><br />

                            <p> <b>You Have More Time Developing and Sticking to Good Habits</b> </p>
                            <p>Starting economical financial habits while you are still your or before you graduate from college will help you combat lifestyle inflation. It allows you to take advantage of years of good financial decisions. You don’t have to worry about being broke after being in the workforce for several years. </p> <br />

                            <p> <b>You, Will, Have Less Financial Regrets</b> </p>
                            <p>Many people will encourage you to make mistakes while you’re still young because you learn what you shouldn’t do. Additionally, it is less costly for you to make investments mistake now compared to when you make it when you are much older or mature. It’s because you still have many years ahead of you.</p> <br />
                            <p>However, it does not mean that you should make as many financial mistakes as possible. Some people wish they had known better from the beginning. Financing purchases you can’t afford, having a debt, and not paying your debt or taking your savings seriously can create become big regrets in the future. </p> <br />

                            <p> <b>You, Will, Achieve Your Financial Goals Faster</b> </p>
                            <p>The value you get when you start today can’t be stated enough. It will help you in achieving your financial goals quicker.</p> <br />
                            <p>When you invest at an earlier stage, you will also have the choice to retire earlier, if ever it’s an option you want to consider. There’s no problem in getting your finances settled today.</p> <br />

                            <p> <b>You, Will, Set a Great Example For Your Kids</b> </p>
                            <p>If you plan to have your own family or kids, getting into a financial state as early as now means that you can provide a good life for your family.</p> <br />
                            <p>What’s worse is if you are in a bad shape, you might be tempted to hide it from your family and children to not make them worry. However, kids can sense if something is going wrong. This will also teach them that money is taboo and you are not allowing them to foster a great relationship with money. This may hurt you in the future when they develop a mentality based on scarcity rather than abundance.</p> <br />
                            <p>Even if you choose to book accommodation near your place, there are often discounts for locals. You get to save on airfare costs. Being a tourist in your city or home town can be so much fun. It will give you little to no travel stress and travel time. You can even stay longer – which is worth more than the money you spent. </p> <br />
                            <p>In contrast, if you’re financially stable by the time you have kids, you don’t have to worry about such problems arising. You will be able to teach your kids how to manage their finances and have open conversations with them about this. Since kids learn by example, you must set a good example.</p> <br />

                            <p> <b>Your Quality of Life Will Be Better</b> </p>
                            <p>When you start getting into a good financial state when your young it gives you a better quality of life. By making good financial habits from the get-go, you will have to worry less later on.</p> <br />
                            <p>Saving at an early age to save up for big expenses will save you from all the stress. Having debt can take a toll on you, however, you can avoid it by making the right financial decisions.</p> <br />
                            <p> <b>It’s Never Too Late to Begin Getting into Good Financial State</b> </p>
                            <p>After everything we have discussed, I do hope you understand why it's ideal to get in a good financial state. Don’t be disappointed if you missed out on a few years. You still have time to make necessary decisions that will keep you on track and set you on course for a successful financial state and future.</p> <br />
                            
                            
                            </p> 
                        </div>

                        <BlogCommentData />  

                    </div>
                    
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <div className='green-bg text-center pbshadow py-4 mb-5 d-none d-md-none d-lg-block d-xl-block '>
                    <Input placeholder="Search here..." inputProps={ariaLabel} className="w-75 search"/>
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

export default Article4;