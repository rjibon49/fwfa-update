import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../Pages/Style/Style.css'
import article1 from './../../images/collaborative/business1'


const Blog = ({bl}) => {

    const {id, title, images, category, details} = bl;

    return (
    <>
        <div className='pb-5 green-bg mb-5 pbshadow me-5'>
            <div className=''>
                <Image src={article1} className='images'/>
            </div>
            
            <div>
                <Link as={Link} to={`/blog/${id}`} className=''> <h5 className='post-title'>{title}</h5></Link>
                <p className='post-details'>{details}</p> 
            </div>
            <div className='text-center'>
                <div className='py-2'>
                <Link to={`/blog/${id}`} className=''><i className="fas fa-user-circle mx-2 fs-5 green"></i>{category}</Link>
                    <i className=" mx-2 fs-4 green">|</i>
                    <i className="far fa-comment-dots mx-2 fs-5 green"> 03 Comments</i>
                </div>
            </div>
        </div>
    </>
    );
};

export default Blog;