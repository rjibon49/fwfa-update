import React, { useRef } from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Facebook from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {

    const hancleClickLinkedin = () => {
        window.open("https://www.linkedin.com/company/71980528/");
    };

    const form = useRef();

    const sendEmail = (e) => {
        emailjs.sendForm('service_w6n0q0j', 'portfolio_template', form.current, 'user_BXxlWuVopHEZNoAJEVyHQ')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset();
          e.preventDefault();
      };

      const subscribeSuccessfully= () => {
        toast.success('Subscribe Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
    }

    return (
        <section className='green-bg sbshadow over'>
            <Container className='py-5'>
                <Row className='py-5 fbrow'>
                    <Col xs={12} sm={12} md={5} lg={6} xl={6}>
                        <div className='mb-3 f-contact'>
                            <h4 className='pb-4'>Contact Us</h4>
                            <p className='pb-2'><HomeIcon className="me-3"/> Greater Palm Spring, CA-USA</p>
                            <p className='pb-2'><LocalPhoneIcon className="me-3"/>(617) 371-7731</p>
                            <p className='pb-2'><EmailIcon className="me-3"/>info@financialwellnessforall.org</p>
                        </div>
                        <div className='f-icon'>
                            <h4 className='pb-4'>Follow Us</h4>
                            {/* <i className="fab fa-twitter me-2 fs-5" style={{color:"white"}}></i>
                            <i className="fab fa-facebook mx-2 fs-5" style={{color:"white"}}></i>
                            <i className="fab fa-instagram mx-2 fs-5" style={{color:"white"}}></i>
                            <i className="fab fa-youtube mx-2 fs-5" style={{color:"white"}}></i>
                            <i className="fab fa-linkedin mx-2 fs-5" style={{cursor:"pointer", color:"white"}} onClick={hancleClickLinkedin}></i> */}
                            <TwitterIcon className='mx-2 ' />
                            <Facebook  className='mx-2 '/>
                            <InstagramIcon className='mx-2 '/>
                            <YouTubeIcon className='mx-2 '/>
                            <LinkedInIcon className='mx-2 ' onClick={hancleClickLinkedin}/>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={6} xl={6}>
                        <Nav className="mx-auto fw-bold pb-3 text-white">
                            <Nav.Link as={Link} to="/home" className="btnt">Home</Nav.Link>
                            <Nav.Link as={Link} to="/events" className="btnt">Events</Nav.Link>
                            <Nav.Link as={Link} to="/blog" className="btnt">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/donation" className="btnt">Donation</Nav.Link>
                            <Nav.Link as={Link} to="/career" className="btnt">Career</Nav.Link>
                        </Nav>
                        <div className='mb-3 f-subs'>
                            <h3 className='ps-2 fw-bold text-white' >Subscribe to Our Newsletter</h3>
                            <p className='ps-2 btnt'>Please subcribe to our newsletter to receive updates from the organization (programs, webinar, career opportunities, volunteers, events, courses, and much more)</p>
                            <form ref={form} onSubmit={sendEmail} className="card-content my-5"> 
                                <div className="form-input text-center">
                                    <label for="email"></label>
                                    <input type="email" placeholder="Enter Your Email" className='subs'name="user_email" id="formGroupExampleInput"/>
                                    <Button className="subs-btn" type='submit' value="Send" onClick={subscribeSuccessfully}>Subscribe</Button>
                                </div>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={2000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable={false}
                                    pauseOnHover
                                />
                            </form>
                        </div>
                    </Col>
                </Row>
                <div className='text-center'>
                    <p>&copy; 2022 – Financial Wellness For All (FWFA) is a 501c3 non-profit organization.</p>
                </div>
            </Container>
        </section>
    );
};

export default Footer;