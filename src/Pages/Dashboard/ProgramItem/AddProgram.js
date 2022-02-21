import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '@tinymce/tinymce-react';

const AddProgram = () => {

    const [addProduct, setAddProduct ] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...addProduct};
        console.log(newProduct);
        newProduct[field] = value;
        setAddProduct(newProduct);
        console.log(e.target.value);
    }

    const handleProductSubmit = e => {
        const productAdd = {
            ...addProduct
        }
        fetch('https://hidden-taiga-98154.herokuapp.com/tes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productAdd)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                toast.success('Product Added Successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    });
            }
        })
        e.target.reset();
        e.preventDefault();
    };
    
    
    // const addedSuccessFully= () => {
        
    // }
    


    return (
        <Container className="bg-dark px-4 py-5 mb-4 rounded">
            <Form className="mb-3 mx-5" onSubmit={handleProductSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Control type="text" name="programName" onBlur={handleOnBlur} placeholder="Program Title" required />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control type="text" name="image" onBlur={handleOnBlur} placeholder="Image" required />
                    </Form.Group>
                </Row>


                <Form.Group as={Col}>
                    <textarea className="form-control" name="programDescription" onBlur={handleOnBlur} rows="10" placeholder="Program Description"></textarea>
                </Form.Group> 
                

                <div className="text-center mt-5">
                    <Button variant="danger" type="submit" className="w-50" >
                        Submit
                    </Button>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                />
          </Form>
        </Container>
    );
};

export default AddProgram;