import React, { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://tva.staging.b2brain.com/search/autocomplete_org_all/')
        .then(res=> res.json())
        .then(data=>setData(data))
    },[])
    return [
        data
    ];
};

export default useData;