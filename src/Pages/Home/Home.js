import React from 'react';
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../Components/RightSidebar/RightSidebar';
import './Home.scss'

const Home = () => {
    return (
        <div className='home-top'>
            {/* Left SiteBar */}
            <div className='left-side'>
                <LeftSidebar/>
            </div>
            {/* Right SiteBar */}
            <div className='right-side'>
                <RightSidebar/>
            </div>
        </div>
    );
};

export default Home;