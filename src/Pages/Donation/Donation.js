import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import card from './../../images/card.png';
import bank from './../../images/bank.png';
import GoToTop from '../../GotoTop';

const Donation = () => {
    const radioButtonTop = {
        backgroundColor:"#d1ecd8",
        padding: "15px 40px",
        borderRadius: "5px",
        color: "black",
        fontSize: "20px",
        fontWeight: "500",
        margin: " 10px 10px"
    }
    return (
        <section className='green-bg'>
            <Container className='py-5'>
                <div className='bg-green py-5 rounded'>
                    <h1 className='text-center text-white mb-4'>Thank you for supporting FWFA</h1>
                    <h6 className='text-center text-white donate-detail'>Your generosity will go toward helping those struggling with their personal finances.  We will help them get to financial wellness in a holistic approach. Thank you again for your kind donation. Please reach out to us if you want to donate stocks or other special considerations.</h6>
                </div>
                <div className='p-5'>
                    <h3 className='fs-2 fw-bold'> Your Donation</h3>
                </div>
                <div className='d-flex justify-content-evenly mb-5'>
                    <div className="form-check form-check-inline" style={radioButtonTop}>
                        <input className="form-check-input" type="radio" name="onetime" id="inlineRadio1" value="" />
                        <label className="form-check-label" htmlFor="inlineRadio1">One-Time</label>
                    </div>
                    <div className="form-check form-check-inline" style={radioButtonTop}>
                        <input className="form-check-input" type="radio" name="monthly" id="inlineRadio2" value="" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Monthly</label>
                    </div>
                    
                    {/* <div>
                        <Button className='donatebtn d-block'>One-Time</Button>
                        <hr className='btn-bottom'/>
                    </div>
                    <div>
                        <Button className='donatebtn d-block'>Monthly</Button>
                        <hr className='btn-bottom'/>
                        <p className='text-center py-3'>Increase the impact of your gift. <br /> Make it monthly.</p>
                    </div> */}
                </div>
                <div className=''>
                    <p className='fw-bold pb-4'>Please select your tax-deductible gift amount below</p>
                    <div className=''>
                        <div className='d-flex justify-content-between px-4 mb-4 flex-wrap'>

                            <div className="form-check form-check-inline" style={radioButtonTop}>
                                <input className="form-check-input" type="radio" name="$100" id="inlineRadio3" value="$100" />
                                <label className="form-check-label" htmlFor="inlineRadio3">$100</label>
                            </div>
                            <div className="form-check form-check-inline" style={radioButtonTop}>
                                <input className="form-check-input" type="radio" name="$150" id="inlineRadio4" value="$150" />
                                <label className="form-check-label" htmlFor="inlineRadio4">$150</label>
                            </div>
                            <div className="form-check form-check-inline" style={radioButtonTop}>
                                <input className="form-check-input" type="radio" name="$200" id="inlineRadio5" value="$200" />
                                <label className="form-check-label" htmlFor="inlineRadio5">$200</label>
                            </div>
                            <div className="form-check form-check-inline" style={radioButtonTop}>
                                <input className="form-check-input" type="radio" name="$250" id="inlineRadio6" value="$250" />
                                <label className="form-check-label" htmlFor="inlineRadio6">$250</label>
                            </div>
                            <div className="form-check form-check-inline" style={radioButtonTop}>
                                <input className="form-check-input" type="radio" name="$300" id="inlineRadio7" value="$300" />
                                <label className="form-check-label" htmlFor="inlineRadio7">$300</label>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-5 col-12">
                                <label  className="form-label">Other</label>
                                <input type="text" className="form-control b-comment-form" id="inputAddress" placeholder="minimum payment $10.00" value="" name="inputValue"/>
                            </div>
                            
                            {/* <Button className='donatebtn '>$100</Button>
                            <Button className='donatebtn '>$150</Button>
                            <Button className='donatebtn'>$200</Button> */}
                        </div>
                        {/* <div className='d-flex justify-content-between px-5 mb-4'>
                            <Button className='donatebtn'>$250</Button>
                            <Button className='donatebtn'>$300</Button> */}
                            {/* <div></div>
                            <Button className='donatebtn' style={{paddingLeft:"90px"}}>others</Button> */}
                            {/* <div>

                                <Button className='donatebtn' style={{paddingLeft:"90px"}}>Others</Button>
                                <p className='text-center' style={{fontSize:"10px"}}> minimum payment $10.00</p>
                            </div> */}
                        {/* </div> */}
                    </div>
                </div>
                <div className='p-5'>
                    <h3 className='fs-2 fw-bold'> Payment Option</h3>
                </div>
                 <div className='d-flex justify-content-evenly px-5'>
                    {/* <div className='card-bd'>
                        <Link to={`/donation`} className='border-0'><Image src={card} className="bank-img" /></Link>
                    </div>
                    <Link to={`/donationbank`} className='border-0'>
                        <div className='bank'>
                            <Image src={bank} className="bank-img" />
                            <p>Bank Account</p>
                        </div>
                     </Link> */}

                    <div className="form-check form-check-inline" style={radioButtonTop}>
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" value="card" />
                        <label className="form-check-label" htmlFor="inlineRadio8">Card</label>
                    </div>
                    <div className="form-check form-check-inline" style={radioButtonTop}>
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" value="bank" />
                        <label className="form-check-label" htmlFor="inlineRadio9">Bank</label>
                    </div>
                    <div class="form-check form-switch">
                        {/* <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox bank</label> */}<span>Hello</span>
                            <input class="form-check-input d-block" type="checkbox" id="" />
                            <span>Okay</span>
                        {/* <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> */}
                    </div>
                </div> 

                    


               
                <form className="row g-3 p-5">
                    <div className="col-12">
                        <label  className="form-label">Caedit Card Number</label>
                        <input type="text" className="form-control b-comment-form" id="inputAddress" placeholder="" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Exp. Month</label>
                        <select id="inputState" className="form-select b-comment-form">
                        <option selected>Choose...</option>
                        <option>January</option>
                        <option>February</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Exp. Year</label>
                        <select id="inputState" className="form-select b-comment-form">
                        <option selected>Choose...</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">CVV</label>
                        <input type="number" className="form-control b-comment-form" id="" />
                    </div>
                    <div className="col-12">
                        <h4>Your Information</h4>
                        <div className="form-check">
                        <input className="form-check-input b-comment-form" type="checkbox" id="gridCheck" />
                        <label className="form-check-label ">
                            This gift on behalf of a company or organization
                        </label>
                        </div>
                    </div>
                    <div className="col-12">
                    <label  className="form-label">Company Name</label>
                    <input type="text" className="form-control b-comment-form" id="inputAddress" placeholder="" />
                    </div>
                    <div className="col-md-4">
                        <label  className="form-label">Title</label>
                        <select id="inputState" className="form-select b-comment-form">
                            <option selected>Choose...</option>
                            <option>Mrs</option>
                            <option>Mr</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control b-comment-form" id="" placeholder='' />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Last Name</label>
                        <input type="number" className="form-control b-comment-form" id="" />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control b-comment-form" id="inputEmail4" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input b-comment-form" type="checkbox" id="gridCheck" />
                        <label className="form-check-label">
                        Yes, I would like to receive email from Financial Wellness for All about their work in the field.
                        </label>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control b-comment-form" id="inputEmail4" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input b-comment-form" type="checkbox" id="gridCheck" />
                        <label className="form-check-label">
                        Yes, I would like to receive text messages from Financial Wellness for All about their work in the field.
                        </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control b-comment-form" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label className="form-label">Address 2</label>
                        <input type="text" className="form-control b-comment-form" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control b-comment-form" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label ">State</label>
                        <select id="inputState" className="form-select b-comment-form">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label className="form-label">Zip</label>
                        <input type="text" className="form-control b-comment-form" id="inputZip" />
                    </div>

                    <div className="col-12 text-center pt-5">
                        <button type="submit" className="" style={{fontSize:"40px" , fontWeight:"700", padding:"10px 40px", color:"white", backgroundColor:"#298B43", border:"0", borderRadius:"10px"}}>Donate</button>
                    </div>
                </form>

            </Container>
            <GoToTop />
        </section>
    );
};

export default Donation;