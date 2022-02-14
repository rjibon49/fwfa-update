import { Input } from '@mui/material';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogi from './../../../images/blog/blog.png'
import article1 from './../../../images/collaborative/business1.png'
import UseBlogs from '../../../hooks/UseBlogs';
import BlogCommentData from '../BlogCommentData';
import GoToTop from '../../../GotoTop';
import things from './../../../videos/20Things.mp4'
import ReactPlayer from 'react-player';

const ariaLabel = { 'aria-label': 'description' };

const Article1 = () => {

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
                            url={things}
                            // light={bannerImg}
                            // playIcon
                            />
                        <div className='pb-5'>
                            <h5 className='post-title'>20 Things Everyone Should Know About the Financial Industry</h5>
                            <p className='post-details'>When it comes to choosing the right financial professional for your particular needs, it might not take much time before you scratch your head wondering where to begin or what qualities and credentials are needed for you and your family. <br /> <br />
                            You can just check log onto the internet and you’ll see that there are lots of ways to learn more about financial education. However, going through all this information can leave someone to feel uncertain about how best to start. Having the correct information to start with will help you approach the financial industry with eyes wide open having both healthy skepticism that can protect you and confidence to make the right choice for you.
                            <br /> <br />
                            Your financial success is an outcome of your selection. Here is a list of questions, qualities, and truths that you should know about the financial industry. <br /> <br />
                            <b> 1.	Not all financial professionals are financial planners.</b> <br />

                            Simple letters that follow a financial professional’s name are there to let you know more about their specializations and credentials. If you are looking for comprehensive financial planning, make sure to keep your eyes on the CFP (Certified Financial Planner) designation as a beginning point.
                            Your financial success is an outcome of your selection. Here is a list of questions, qualities, and truths that you should know about the financial industry. <br /> <br />
                            <b> 2.	Have an idea of what your financial needs and goals are before contacting potential advisors.</b> <br />

                            Realizing your goals wants, and needs will help you in narrowing down the list of professionals you can reach out to and minimize your chances of working with someone who is not suitable for you and your circumstances. <br /> <br />
                            <b> 3.	No financial professional can guarantee that they can beat the market or promise returns.</b> <br />
                            If someone says they can beat the market, run. You should consider speaking to other financial professionals. <br /> <br />
                            <b> 4.	The way a financial professional is compensated shows conflicts of interest.</b> <br />
                            Try to ask your potential financial professional how they are compensated. They should disclose such detail to you with all honesty. If they earn a commission, you know they are paid by products they sell and not by the advice they give. A fee-only fiduciary advisor is compensated only when they give you and advice that puts your best interests first. <br /> <br />
                            <b> 5.	Insurance is an important element for your financial life but proceeds with extreme caution.</b> <br />
                            Financial professionals are very happy to sell insurance as a product. Just make sure that you know what to buy so that you do not purchase a policy that does not meet your needs. <br /> <br />
                            <b> 6.	You won’t know how good your financial advisor is until the markets take a tumble.</b> <br />
                            When the market is not doing well that’s where you will see how effective your financial advisor’s strategy is.  <br /> <br />
                            <b> 7.	No one knows the future.</b> <br />
                            Only God knows what will happen in the future. So, if you encounter a financial professional who tells you that they know what the financial landscape will look like tomorrow or years from now. Think again!  <br /> <br />
                            <b> 8.	Paying attention to financial media is a waste of your time.</b> <br />
                            Long-term investment for your financial future should not focus on daily market fluctuations. You should be able to ride out bumpy market cycles with a properly diversified portfolio.  <br /> <br />
                            <b> 9.	The most powerful indicator of financial success is making a plan.</b> <br />
                            If you don’t have a plan for the future, you will never be sure where you’re headed.  <br /> <br />
                            <b> 10.	Time is both your biggest ally and enemy to obtain financial independence.</b> <br />
                            When you start saving earlier you can enjoy the benefits of compound interest. Waiting longer and having not enough time for your money to grow to what you need. Even the slightest amount can work for you. But, having no savings has no guarantee in return. <br /> <br />
                            <b> 11.	A financial professional who is not a fiduciary is in product sales.</b> <br />
                            A fiduciary should represent your best interests. A financial professional who offers financial products is paid through commission, so there is a clear conflict of interest that is not guaranteed to favor the customer. <br /> <br />
                            <b> 12.	Check if the financial professional you are considering does what he or she advises.</b> <br />
                            If a financial professional doesn’t have herself or her family invested in what he’s suggesting for you, this is a red flag. You can ask how much of her own money is invested in what she’s advising. <br /> <br />
                            <b> 13.	A financial professional who teaches empowers his and her clients to succeed.</b> <br />
                            The more information you have about your finance, the better you’ll be able to make smart money decisions. <br /> <br />
                            <b> 14.	Simplified finances are often more successful than complex finances.</b> <br />
                            Complex financial solutions do not necessarily mean it's better. <br /> <br />
                            <b> 15.	There is no such thing as zero risks.</b> <br />
                            Always remember that there is some measure of risk with investments. You just need to understand how much risk you can conquer and how much risk is involved in the strategy before agreeing to it. <br /> <br />
                            <b> 16.	An everyday investor can DIY his or her finances successfully.</b> <br />
                            When you start to feel that your finances are growing to the point that you are not comfortable managing it or when you are worried that you are not doing your best to maximize your finances. That’s the time you can seek help from a financial professional.<br /> <br />
                            <b> 17.	Index funds are your friend.</b> <br />
                            These are great at lessening your portfolio costs and getting a return inefficient asset classes.<br /> <br />
                            <b> 18.	Tax planning goes hand-in-hand with your long-term financial plan.</b> <br />
                            Legally sheltering as much money as you can from paying taxes is a great way to maximize your wealth and place it towards what’s more important for you.<br /> <br />
                            <b> 19.	It’s not a question of “if” but a question of “when” something unexpected or bad will happen that can disrupt your finances and life.</b> <br />
                            Always be prepared for the unexpected. Having an emergency fund helps you keep your finances intact just in case there is any unforeseen event that may occur.<br /> <br />
                            <b> 20.	Similarly, something good will happen as well that can create an impact on your finances and life.</b> <br />
                            Also, be prepared if something good happens and anticipate your future needs so that you can take advantage and enjoy life’s precious gifts and special moments.<br /> <br />
                            <b> To Sum Up </b> <br />
                            When it comes to the financial industry, there is a lot of things you need to know, consider, and make decisions for. Make sure you have enough knowledge to help you recognize when something is suitable or when something is not right. The decisions you make and the action you take will lead you to your financial destination<br /> <br />

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

export default Article1;