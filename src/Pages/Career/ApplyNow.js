import React from 'react';
import { Container, Button } from 'react-bootstrap';

const ApplyNow = () => {
    return (
        <Container className='p-5'>
            <h1 className='event-title'>Please Upload Your Resume</h1>
            <div className='ae-form py-5' style={{backgroundColor:"#F9F8F8", height:"50vh", boxShadow:"0 9px 8px 0 rgba(0, 0, 0, 0.2), 0 15px 13px 0 rgba(0, 0, 0, 0.19)", borderRadius:"10px", fontSize:"50px"}}>
                <i class="far fa-file-pdf"></i>
                <p style={{marginTop:"20px", fontSize:"14px"}}>Please upload your resume pdf format</p>
            </div>
            <div className='mt-5 text-end'>
                <Button className='app-btn'>Apply</Button>
            </div>
        </Container>
    );
};

export default ApplyNow;