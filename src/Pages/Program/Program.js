import React from 'react';
import GoToTop from '../../GotoTop';
import ProgramBanner from './ProgramBanner';
import ProgramLists from './ProgramLists';

const Program = () => {
    return (
        <div>
            <ProgramBanner />
            <ProgramLists />
            <GoToTop />
        </div>
    );
};

export default Program;