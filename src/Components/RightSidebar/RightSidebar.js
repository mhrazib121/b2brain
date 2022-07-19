import React, { useState } from 'react';
import hero from '../../images/hero-image.png';
import brand from '../../images/Screenshot 2022-07-01 at 1.46.png';
import person from '../../images/Screenshot 2022-07-01 at 1.46 (1).png';
import './RightSidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';


const RightSidebar = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [tacker, setTacker] = useState('');

    const searchHandle = (e) => {
        const searchValue = e.target.value.toLowerCase();
        fetch(`https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${searchValue}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setSearchResult(data))
    };

    const searchReset = () => {
        setSearchResult([]);
        const inputField = document.getElementById("search-id");
        inputField.value = "";
    };

    const tackingHandle = (e) => {
        setTacker(e)
        console.log(e.company, ',', e.slug, 'is Tracked')
    };
    
    return (
        <div>
            <div className='top-bar'>
                <div className='search'>
                    {
                        searchResult.length > 0 ?
                            <FontAwesomeIcon className='faIcon' icon={faXmark} onClick={() => searchReset()} />
                            :
                            <FontAwesomeIcon className='faIcon' icon={faSearch} />
                    }
                    <input id="search-id" className='search-field' placeholder="Search by account name or website" type="text" onChange={searchHandle} />
                </div>
                <FontAwesomeIcon className='faIcon' icon={faBell} />
            </div>
            {
                searchResult.length > 0 ?
                    <div className='grid'>
                        {
                            searchResult.map(value =>
                                <div key={value?.slug} value={value}>
                                    <div className='single-data'>
                                        {
                                            value.logo ?
                                                <img src={value?.logo} alt="" />
                                                :
                                                <div>
                                                    <h2 style={{
                                                        backgroundColor: `${value.color}`,
                                                        padding: '18px 25px'
                                                    }}>
                                                        {value.company.slice(0, 1)}
                                                    </h2>
                                                </div>
                                        }
                                        <div>
                                            <h4>{value?.company}</h4>
                                            <p>{value?.website}</p>
                                        </div>
                                        <div>
                                            <button onClick={() => tackingHandle(value)}>
                                                {
                                                    tacker ?
                                                        'Tracking' : 'Track'
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    :
                    <div>
                        <img className='image-rightside' src={hero} alt="" />
                        <img className='image-rightside' src={brand} alt="" />
                        <img className='image-rightside' src={person} alt="" />
                    </div>
            }
        </div>
    );
};

export default RightSidebar;