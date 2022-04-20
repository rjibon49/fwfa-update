import React from 'react';
import { Image } from 'react-bootstrap';
// import event1 from '../../images/Event/Event-poster-1.jpg'
import event1 from '../../images/Event/EventPoster2.1.jpg'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                { props.children}

                <Image src={event1} alt="EventPoster" className='posterImg'/>
                <a href="http://fwfacourse.com/" target="_blank" rel='noreferrer' className='webLink'>FWFACourse.com</a>
            </div>
        </div>
    ) : "" ;
};

export default Popup;