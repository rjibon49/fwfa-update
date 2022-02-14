import { Input } from '@mui/material';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogi from './../../../images/blog/blog.png'
import article3 from './../../../images/collaborative/school1.png'
import UseBlogs from '../../../hooks/UseBlogs';
import BlogCommentData from '../BlogCommentData';
import GoToTop from '../../../GotoTop';
import sixSimple from './../../../videos/sixSample.mp4'
import ReactPlayer from 'react-player';

const ariaLabel = { 'aria-label': 'description' };

const Article3 = () => {

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
                            url={sixSimple}
                            // light={bannerImg}
                            // playIcon
                            />
                        <div className='pb-5'>
                            <h5 className='post-title'>Six Simple Ways to Save More Money</h5>

                            <p className='post-details'>Many people are suffering during this time. Some people lost their jobs, businesses are closed, and some continuously struggle to make ends meet with what they have. In short, saving money can are challenging these days. <br /> <br />

                            There are so many expenses within daily life that by themselves seem insignificant. But, they can add up swiftly, which consumes a significant amount of your income. When you add up all your regular expenses, the thought of lessening them and saving money can seem intimidating. From homes and cars to entertainment and food the list of expenses seems limitless.
                            <br /> <br />
                            Likewise, lessening costs and being strategic about how to meet financial needs can also add up as significant savings. Here are some of our recommendations on how you can save more money especially during this time.
                            <br /> <br />

                            <p> <b>First, Understand Wants vs. Needs</b> </p>
                            <p>This is the most evident step you should do to eliminate unnecessary expenses. What we are implying is that you should evaluate what might be an expense that you can easily live without. </p> <br />
                            <p> <b>Second, Explore Home Entertainment</b> </p>
                            <p>Rather than going out, you may consider entertaining yourself, your family, and friends at home. You can enjoy a nice dinner, watch a film, drink some cocktails, and listen to music in the comfort of your home and at a lesser price. You will be surprised at how fun it is to host a game night at home. </p> <br />
                            <p> <b>Third, Reinvent Lunch</b> </p>
                            <p>Buying lunch at work or ordering lunch may seem like a small expense but this can add up if you are not careful. One way you can save money is by stretching your food allowance even further. You can do this by making extra food during dinner and bring the leftovers to work and eat them for lunch. Look for a nice place to rest, watch people, and enjoy your savings.</p> <br />
                            <p> <b>Fourth, Consider Public Transportation/ Carpooling</b> </p>
                            <p>The cost of gasoline instantly adds up if you bring your car to work by yourself each day. You may ride your bike. Or consider riding public transportation like trains or buses. Or you may try joining a ride-sharing/ carpool program. Helps you save more money. It gives you more time to read a book while in transit or to simply enjoy the view.</p> <br />
                            <p> <b>Fifth, Discover Local Travel and Staycations</b> </p>
                            <p>Summer is coming! An upcoming trip may not be far off. When reviewing your options, restrain yourself a little. Go for a staycation instead of an expensive vacation away from home. You may also opt to stay at your home or hometown to remove or lessen the travel and hotel costs. </p> <br />
                            <p>Even if you choose to book accommodation near your place, there are often discounts for locals. You get to save on airfare costs. Being a tourist in your city or home town can be so much fun. It will give you little to no travel stress and travel time. You can even stay longer – which is worth more than the money you spent. </p> <br />
                            <p> <b>Sixth, Reorganize Grocery Shopping</b> </p>
                            <p>Let’s discuss food. If you pay more attention to your choices while grocery shopping and prioritize price over luxury, your daily expense on food can instantly drop. Consider purchasing some items in bulk, try looking for “two-for-one” or “buy one, get one” deals, use coupons/ discount cards, and store or freeze the extra items you bring home. You can also plan your meals ahead of time and list down what you need to buy. </p> <br />
                            <p>The total of numerous and seemingly small decisions throughout your daily life can create a huge impact on your life. Allows you to save up more money. Monitor your daily spending across various categories mentioned above in about two weeks. Then, try to apply our recommendations for another two weeks. You will be surprised by how much money you will be able to save or use to treat yourself, even your family. Happy saving!</p> <br />
                            
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

export default Article3;