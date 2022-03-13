import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../Style/Style.css'
// import './../Style/StyleNew.css'
import logo from './../../images/logo/fwfa-logo.png'
// import FacebookIcon from '@mui/icons-material/Facebook';
import Facebook from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    const hancleClickLinkedin = () => {
        window.open("https://www.linkedin.com/company/71980528/");
    };

    return (
    <>
        <div className='top-head'>
            <Container className='mt-3'>
                <Row className=''>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div className='py-1'>
                            <p className='top-text'><i className="fas fa-phone-alt me-2"></i> (617) 371-7731 <span className='px-3'> | </span>  <i className="fas fa-location-arrow me-2"></i> Greater Palm Spring, CA-USA</p>
                            
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div className="text-end py-1 top-text">
                            {/* <Link as={Link} to="fb"><i className="fab fa-twitter mx-2 fs-5 ico"></i></Link>
                            <Link as={Link} to="fb"><i className="fab fa-facebook mx-2 fs-5 ico"></i></Link>
                            <Link as={Link} to="fb"><i className="fab fa-instagram mx-2 fs-5 ico"></i></Link>
                            <Link as={Link} to="fb"><i className="fab fa-youtube mx-2 fs-5 ico"></i></Link> */}
                            <TwitterIcon className='mx-2 ico' />
                            <Facebook  className='mx-2 ico'/>
                            <InstagramIcon className='mx-2 ico'/>
                            <YouTubeIcon className='mx-2 ico'/>
                            <LinkedInIcon className='mx-2 ico' onClick={hancleClickLinkedin}/>
                            {/* <i className="fab fa-linkedin ms-2 fs-5 ico" style={{cursor:"pointer"}} onClick={hancleClickLinkedin}></i> */}
                            <span className='px-3 fw-bold'> English (US) </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <Navbar collapseOnSelect expand="lg" bg="" variant="light" sticky="top" className=" mt-1 bg-white pbshadow">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" className='logo'/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto menu">
                            <Nav.Link as={Link} to="/home" className="">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/program" className="">Program</Nav.Link>
                            <Nav.Link as={Link} to="/donation" className="">Donation</Nav.Link>
                            <Nav.Link as={Link} to="/collaborative" className="">Collaborative Partnership</Nav.Link>
                            <Nav.Link as={Link} to="/events" className="">Events</Nav.Link>
                            <Nav.Link as={Link} to="/blog" className="">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contacts" className="">Contact Us</Nav.Link>
                            {user?.email && <Nav.Link as={Link} to="/dashboard" className="">Dashboard</Nav.Link>}
                            {
                                user?.email && 
                                    <NavDropdown title="Profile" id="basic-nav-dropdown" style={{color:"white"}}>
                                        <Nav className="flex-column text-center">
                                            <span><small>Welcome</small></span>
                                            <span className="fw-bold">{user.displayName}</span>
                                            {/* <NavDropdown.Divider /> */}
                                            <NavDropdown.Item as={Link} to="/home" onClick={logout}>Logout</NavDropdown.Item>
                                        </Nav>
                                    </NavDropdown>
                            }  
                                {/*  :
                                <NavDropdown title="User" id="basic-nav-dropdown" className=''>
                                    <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/superAdmin">Login</NavDropdown.Item>
                                </NavDropdown> */}
                                

                            {/* <NavDropdown title="Login" id="basic-nav-dropdown" className=''>
                                <NavDropdown.Item as={Link} to="/signinTeacher">Teacher</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signinStudent">Student</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signinAffiliate">Affiliate</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Sign Up" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/signupTeacher">Teacher</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signupStudent">Student</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signupAffiliate">Affiliate</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
            </Container>
      </Navbar>
    </>
    );
};

export default Header;