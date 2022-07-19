import React, { useState } from 'react';
import logo from '../../images/B2Brain.png';
import './LeftSidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faUser, faList, faGear, faUsers, faMessage } from '@fortawesome/free-solid-svg-icons';

const LeftSidebar = () => {
    const [isOpenAcc, setIsOpenAcc] = useState(false);
    const [isOpenPre, setIsOpenPre] = useState(false);
    // const handleCollaps = () => {
    //     const contentClass = document.getElementsByClassName("content");
    //     // contentClass.style.display = "block";
    //     console.log(contentClass.content);

    // }
    return (
        <div className='left-sidebar'>
            <div className='top-section'>
                <img className='logo' src={logo} alt="" />
                <h2 className='tittle'> B2Brain </h2>
            </div>
            <div>
                <ul>
                    <FontAwesomeIcon className='faIcon' icon={faHome} />
                    Dashboard
                </ul>
                <ul>
                    <FontAwesomeIcon className='faIcon' icon={faStar} />
                    Intels
                </ul>
                <ul>
                    <FontAwesomeIcon className='faIcon' icon={faUser} />
                    Leads
                </ul>
                <ul onClick={() => setIsOpenAcc(!isOpenAcc)} className='collapsible'>
                    <FontAwesomeIcon className='faIcon' icon={faList} />
                    Accounts
                    {isOpenAcc ?
                        <div className='content'>
                            <p>Manage All</p>
                            <p>Track new Accounts</p>
                            <p>Bulk import</p>
                        </div>
                        : null
                    }
                </ul>

                {/* Preferences */}
                <ul onClick={() => setIsOpenPre(!isOpenPre)} className='collapsible'>
                    <FontAwesomeIcon className='faIcon' icon={faGear} />
                    Preferences
                    {isOpenPre ?
                        <div className='content'>
                            <p>Product Focous</p>
                            <p>Intel Performance</p>
                            <p>Lead Person</p>
                        </div>
                        : null
                    }
                </ul>
                <ul>
                    <FontAwesomeIcon className='faIcon' icon={faUser} />
                    Integrations
                </ul>
                <ul>
                    <FontAwesomeIcon className='faIcon' icon={faUsers} />
                    Team
                </ul>
                <ul>
                    <FontAwesomeIcon className='faIcon' icon={faMessage} />
                    Help/Support
                </ul>
            </div>
        </div>
    );
};

export default LeftSidebar;