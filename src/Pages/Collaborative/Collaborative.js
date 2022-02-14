import React from 'react';
import GoToTop from '../../GotoTop';
import CollaborativeBanner from './CollaborativeBanner/CollaborativeBanner';
import CollaborativeLists from './CollaborativeLists/CollaborativeLists';

const Collaborative = () => {
    return (
        <div className='ae-form' style={{height:"100vh"}}>
            {/* <CollaborativeBanner />
            <CollaborativeLists /> */}
            <h1 style={{fontSize:"100px", color:"#505050"}}>Coming Soon</h1>
            <GoToTop />
        </div>
    );
};

export default Collaborative;