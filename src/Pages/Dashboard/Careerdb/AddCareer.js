import React, { useRef, useState } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '@tinymce/tinymce-react';

const AddCareer = () => {

    const editorRef = useRef(null);
//    const log = () => {
//      if (editorRef.current) {
//        console.log(editorRef.current.getContent());
//      }
//    };

    const [addProduct, setAddProduct ] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = {...addProduct};
        console.log(newProduct);
        newProduct[field] = value || editorRef.current.getContent();
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

                <Form.Group as={Col} className="mb-3">
                    <Form.Control type="text" name="ArticleName" onBlur={handleOnBlur} placeholder="Carrer Title" required />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control type="text" name="image" onBlur={handleOnBlur} placeholder="Position" required />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="number" name="image" onBlur={handleOnBlur} placeholder="Vacancy" required />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="date" name="image" onBlur={handleOnBlur} placeholder="Last Date" required />
                    </Form.Group>
                </Row>

                {/* <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Price"  name="price" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="categories" name="categories" onBlur={handleOnBlur} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Movement"  name="movement" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="Diameter" name="diameter" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="Dial Color" name="dialColor" onBlur={handleOnBlur} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Water Resistance"  name="waterResistance" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="Gender" name="gender" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control placeholder="Strap" name="strap" onBlur={handleOnBlur} />
                    </Form.Group>
                </Row>

                <Form.Group as={Col}>
                    <textarea className="form-control" name="description" onBlur={handleOnBlur} rows="3" placeholder="Item Description"></textarea>
                </Form.Group> */}

                    <Editor name="ArticleDetails" onBlur={handleOnBlur}
                        onInit={(evt, editor) => editorRef.current = editor}
                        // initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Roboto,Arial,sans-serif; font-size:14px }'
                        
                        }}
                    />
                    {/* <button onClick={log}>Log editor content</button> */}
                

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

export default AddCareer;