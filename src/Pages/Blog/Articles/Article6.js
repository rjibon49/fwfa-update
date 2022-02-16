import { Input } from '@mui/material';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogi from './../../../images/blog/blog.png'
import bgb from './../../../images/bgb.png';
import UseBlogs from '../../../hooks/UseBlogs';
import BlogCommentData from '../BlogCommentData';
import GoToTop from '../../../GotoTop';
import things from './../../../videos/20Things.mp4'
import ReactPlayer from 'react-player';

const ariaLabel = { 'aria-label': 'description' };

const Article6 = () => {

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
                    <Input placeholder="Search here.." inputProps={ariaLabel} className="w-75 search"/>
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
                            <h5 className='post-title'>Retirement is different for everyone</h5>
                            <p className='post-details'>Retirement is not one-size-fits-all. Because Social Security is more than just retirement benefits, we want to provide you with the information you need to plan for retirement and to make informed decisions. This document will help. <br /> <br />

                            <h6>Earnings are essential</h6>
                            <p>You have probably been paying Social Security and Medicare taxes (also known as FICA taxes, or SECA taxes if you are self-employed) since you first began working. Learn more about these taxes at <a rel="noopener noreferrer" href="www.ssa.gov/people/materials/pdfs/EN-05-10297.pdf" target="_blank">EN-05-10297 pdf</a> . Your Social Security Statement contains information about your earnings history and the Social Security and Medicare taxes you paid, and provides estimates for future retirement, disability, and survivors benefits. Use your Statement to check your earnings each year.These earnings are used to determine your eligibility for Social Security benefits and your benefit amount. If you see an error on your earnings record, report it to us. Learn how at <a href="www.ssa.gov/pubs/EN-05-10081.pdf" target="_blank">EN-05-10081 pdf</a>.</p> <br />

                            <h6>Keep in mind</h6>
                            <p>Social Security is not meant to be your only source of income in retirement. On average, Social Security will replace about 40 percent of your annual pre-retirement earnings, although this can vary substantially based on each person’s circumstances. Your full retirement age is 67. Starting retirement benefits before your full retirement age (as early as age 62) lowers this percentage and starting benefits after your full retirement age (up to age 70) increases it. Learn more at <a href="www.ssa.gov/pubs/EN-05-10035.pdf" target="_blank">EN-05-10035 pdf</a>.</p> <br />

                            <h6>Save for retirement</h6>
                            <p>Social Security is not meant to be your only source of income in retirement. You will likely need other savings, investments, pensions, or retirement accounts to live comfortably in retirement. Because your retirement could last 20 years or more, it is important to begin your financial planning as early as possible.</p> <br />

                            <div className='row'>
                                <div className='col-xl-8 col-lg-8 col-md-7 col-sm-12'>
                                    <ul>

                                        <li>If you have a workplace retirement plan, be sureto find out how it works so that you can make themost of it. Your employer might match some or allof your plan contributions. If your employer does notoffer a plan, there are other ways to save and investon your own. Learn more about how to save at <a href="www.savingmatters.dol.gov/employees.htm" target="_blank">employees</a>.</li>

                                        <li>The earlier you start saving, the more time you willhave to build your retirement income. For moreinformation on investing and saving, check out <a href="www.investor.gov" target="_blank">investor</a>.</li>

                                        <li>Any amount you can save will add up over time.You can find a savings calculator at <a href="www.investor.gov/additional-resources/free-financial-planning-tools/compound-interest-calculator" target="_blank">free-financial-planning-tools/compound-interest-calculator</a>.</li>

                                    </ul>
                                </div>

                                <div className='col-xl-4 col-lg-4 col-md-5 col-sm-12 d-none d-md-block d-lg-block d-xl-block'>
                                    <Image src={bgb} alt="Pigi Bank" className='images'/>
                                </div>                                
                            </div><br />

                            <h6>Social Security will be there when you retire</h6>
                            <p>retireThe Social Security taxes you pay go into the Social Security Trust Funds that are used to pay benefits to current beneficiaries. The Social Security Board of Trustees estimates that, based on current law, the Trust Funds will be able to pay benefits in full and on time until 2034. In 2034, Social Security would still be able to pay about $780 for every $1,000 in benefits scheduled. Learn more at <a href="www.ssa.gov/people/materials/pdfs/EN-05-10229.pdf" target="_blank">EN-05-10229 pdf.</a></p> <br />

                            <h6>Benefits last as long as you live</h6>
                            <p>Your Social Security benefits last as long as you live. Our Life Expectancy Calculator can provide a rough estimate of how long you might live based on your age and gender: <a href="www.ssa.gov/planners/lifeexpectancy.html" target="_blank">lifeexpectancy.</a></p> <br />

                            <h6>Unable to work due to a mental or physical disability</h6>
                            <p>A disability can occur at any age. If you become unable to work due to a mental or physical disability, and you meet certain eligibility requirements, you and your family may be able to receive Social Security disability benefits. Learn more at <a href="www.ssa.gov/disability" target="_blank">disability.</a></p> <br />

                            <h6>Benefits for family members</h6>
                            <p>Social Security is here for you even before your retirement years. Children, widows, and widowers may receive survivors benefits to help them cope with the financial loss if you die. Find out more at <a href="www.ssa.gov/pubs/EN-05-10084.pdf" target="_blank">EN-05-10084 pdf.</a></p> <br />

                            <h6>Impact of other retirement plans</h6>
                            <p>Most pensions or other retirement plans do not affect your Social Security benefits. But if you participate in a retirement plan or receive a pension based on work for which you did not pay Social Security tax, it could lower your benefits. Learn more at <a href="www.ssa.gov/gpo-wep" target="_blank">gpo-wep.</a></p> <br />

                            <h6>We are here for you</h6>
                            <p>youSocial Security covers about 96 percent of American workers. To learn more about Social Security and what it means to you, visit <a rel="nofollow" href="www.ssa.gov" >www.ssa.gov .</a></p>

                            </p>
                        </div>

                        <BlogCommentData />  

                    </div>
                    
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <div className='green-bg text-center pbshadow py-4 mb-5 d-none d-md-none d-lg-block d-xl-block '>
                    <Input placeholder="Search here.." inputProps={ariaLabel} className="w-75 search"/>
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

export default Article6;
