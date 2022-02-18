import { Input } from '@mui/material';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import blogi from './../../../images/blog/blog.png'
// import article5 from './../../../images/collaborative/employee1.png'
import UseBlogs from '../../../hooks/UseBlogs';
import BlogCommentData from '../BlogCommentData';
import GoToTop from '../../../GotoTop';
import sixTips from './../../../videos/sixTips.mp4'
import ReactPlayer from 'react-player';

const ariaLabel = { 'aria-label': 'description' };

const Article5 = () => {

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
                        {/*<Image src={article5} className='images'/>
                         <div className='text-center'>
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
                            url={sixTips}
                            // light={bannerImg}
                            // playIcon
                            />
                        <div className='pb-5'>
                            <h5 className='post-title'>Six Tips To Finding a Budget-Friendly Health Insurance When You Become Self-Employed</h5>

                            <p className='post-details'>Leaving your job, working as a freelancer, or becoming self-employed for any reason does not mean you cannot get budget-friendly health insurance. Today, we will cover six tips that can help you find health insurance. This is so you and your family can get the coverage you need no matter what your employment situation and status are. <br /> <br />

                            If you are planning to leave your corporate job and work for yourself, getting budget-friendly health insurance is likely one of your top concerns. The good thing is there are more protections now for those who leave the safety of a group health plan. <br /> <br />

                            This blog will discuss six helpful tips on how you can get affordable health insurance when you leave your job, become a freelancer, or become self-employed, so you and your family can get the coverage you need. <br /> <br />

                            <p> <b>Major Benefits of the Affordable Care Act (ACA)</b> </p>
                            <p>The Affordable Care Act (ACA) is also known as Obamacare which became a law in the year 2010 and significant provisions took effect last 2014. One critical benefit of ACA is that you cannot be charged sky-high premiums even if you have a preexisting medical condition or be denied coverage. Despite that insurers can charge various rates based on where you’re live, tobacco use, age, and family size.</p><br /> <p> ACA also removes annual and lifetime caps on your health coverage. And no matter how much care you receive, the law caps how much you have to pay for it.</p><br />

                            <p> <b>What is the Affordable Care Act (ACA) Subsidy?</b> </p>
                            <p>Obamacare or ACA also provided numerous low- and middle-income Americans a health subsidy, which reduces the cost of premiums based on your income and family size. It is a tax credit paid to your health insurance provider monthly, this allows you to have a lower premium. </p> <br /><p> The ACA subsidy applies to a household whose income is between 100% and 400% of your state’s federal poverty level. For 2020, an individual earning approximately less than $51,000 or a family of four making under $104,000 per year may qualify for an insurance subsidy.</p><br /><p> When you apply for an ACA plan, you will be given access to a marketplace account. This is where you can make necessary changes to your expected income or family size that may affect your tax credit. This allows you to correct these details quickly.</p><br />

                            <p> <b>How To Get Budget-Friendly Health Insurance</b> </p>
                            <p>When you go for it on your own, the price of a health plan can be appalling – especially if you just left a company that paid a big part of the insurance bill on your behalf.</p> <br />
                            <p>Remember that the high cost of health insurance pales when compared to the alternative. Being diagnosed with a severe illness or having a medical emergency that you cannot pay for can be overwhelming.</p> <br />
                            <p>Here are six ways you can find budget-friendly health insurance when you are no longer have job-based coverage or when you become self-employed for any reason:</p> <br />

                            <p> <b>1.	Join your partner or spouse’s plan</b> </p>
                            <p>If your partner or spouse has employer-covered health insurance, joining their plan can be a budget-friendly option. A group insurance costs much lower than individual coverage. And some employers usually pay for a portion of your premium as part of their benefits.</p> <br />
                            <p>But, some employers may not provide domestic partner benefits to unmarried couples. Make sure you check with the benefits administrator the conditions.</p> <br />
                            <p>Another option you can consider if you are still under 26 years old is to remain or join your parent’s health plan. ACA authorizes you to get health insurance using your parent’s plan even if you are not married, not financially dependent on them, or not living with them. But, this is no longer applicable once you are over the age of 26.</p> <br />

                            <p> <b>2.	Enroll in a state or federal marketplace plan</b> </p>
                            <p>ACA established state and federal marketplaces for customers who do not have access to employer-covered health plans. Here is a list of the states with health insurance exchanges:</p> <br />
                            <ul className='ms-4'>
                                <li>California</li>
                                <li>Colorado</li>
                                <li>Connecticut</li>
                                <li>District of Columbia</li>
                                <li>Idaho</li>
                                <li>Maryland</li>
                                <li>Massachusetts</li>
                                <li>Minnesota</li>
                                <li>Nevada</li>
                                <li>New York</li>
                                <li>Rhode Island</li>
                                <li>Vermont </li>
                                <li>Washington</li>
                            </ul><br />
                            <p>Wherever you live, you can start buying ACA-qualified health insurance at healthcare.gov. Remember that you can only apply for a policy during the yearly open enrollment period which is from November 1 to December 15. Your coverage will start in January of the coming year. </p> <br />
                            <p>If you miss the enrollment deadline, you will not get ACA health insurance until the coming year unless you qualify for special enrollment. This will allow you to buy or change coverage any time of the year. You will be given such if you have a major qualifying event like having a child, losing insurance at work, relocating, or getting married or divorced. However, you only have 60 days after the event occurs to enroll.</p> <br />
                            <p>If your income is too high to pass the qualification for a healthcare subsidy, you can still purchase a health plan through your state’s exchange or the federal. You can also purchase ACA-qualified health insurance from a health insurance broker or agent, an online insurance aggregator, or an insurance company</p> <br />

                            <p> <b>3.	Consider a high-deductible plan (HDHP)</b> </p>
                            <p>One tip to lessen the cost of health plan premiums is to select a high-deductible plan (HDHP). You enjoy lower monthly premiums but have higher out-of-pocket costs. Getting an HDHP makes more sense if you are relatively in good health, but, if you get ill, it can end up costing you more,</p> <br />
                            <p>One benefit of getting an HDHP is that you can qualify for a health savings account (HSA). HAS contributions are tax-deductible and you can withdraw it any time to pay for qualified medical expenses like prescription drugs, doctor co-pays, chiropractic, dental care, mental health care, and prescription eyeglasses.</p> <br />
                            <p>Paying for a wider range of HAS-eligible vision, mental, and dental costs on a tax-free basis can add up to bigger savings!</p> <br />
                            <p> <b>4.	Get short-term plan </b> </p>
                            <p>Don’t lose hope if you miss out on the deadline to enroll for ACA health insurance and you are not qualified for special enrollment. You can still buy short-term health insurance until the next enrollment window comes around.</p> <br />
                            <p>Just take note that short plans offer temporary coverage. Short plans can’t be found on the state or federal exchange, thus you can’t get a subsidy when you buy one. But, they can be more affordable than an ACA-qualified plan.</p> <br />
                            <p>Having short-term coverage is a better option than being uninsured. However, I suggest replacing it with a qualified health plan as soon as possible. It’s still the best way to have the protection you need against the huge financial risk of medical costs..</p> <br />
                            <p> <b>5.	Enroll in Medicaid and CHIP (Children’s Health Insurance Program) </b> </p>
                            <p>If you cannot afford a health plan, you may be eligible for free or low-cost coverage through CHIP or Medicaid at any time of the year, depending on your family size, income, and the state where you live in. </p> <br />
                            <p>Compared to ACA health insurance, state-run health plans do not have a set open enrollment period. So, if you are qualified the coverage can start any time of the year.</p> <br />
                            <p>When you finish your application at the state or federal health insurance exchange, you can also know if you qualify for coverage through CHIP programs and Medicaid.</p> <br />
                            <p> <b>6.	Get COBRA coverage </b> </p>
                            <p>If you leave your employment with a group health plan, you can enroll in COBRA (Consolidated Omnibus Budget Reconciliation Act) coverage. It is a regulation that gives you the choice to continue your employer-sponsored health plan after you are no longer employed. </p> <br />
                            <p>Instead of having your plan canceled the month you resign, you can use COBRA to continue getting the same benefits and choices you have before leaving your employer. In most cases, you can get COBRA benefits for up to 18 months.</p> <br />
                            
                            
                            </p> 
                        </div>

                        <BlogCommentData />  

                    </div>
                    
                </Col>
                <Col xs={12} sm={12} md={5} lg={4} xl={4}>
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

export default Article5;