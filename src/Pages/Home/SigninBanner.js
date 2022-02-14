import React from 'react';
import { Button, Container} from 'react-bootstrap';

const SigninBanner = () => {
    return (
        <div className='green-bg my-5'>
            <Container className='my-5 bbimg'>
                <div className='sb-form pt-5'>
                    <Button className='signin-btn'><p className='p-0 m-0'>Sign in LMS</p></Button>
                    <p className='py-4' style={{color:"#000000ab"}}>Don’t have an account? <b>Sign up</b> </p>
                </div>
            </Container>
        </div>
    );
};

export default SigninBanner;