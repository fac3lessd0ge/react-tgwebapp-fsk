import React from 'react';

import { Navigate } from 'react-router-dom';
import { useTelegramWebApp } from 'react-telegram-webapp';

import axios from 'axios';
import { BASE_URL_PAGE } from './URL';

const linksTo = {
    0: '/testreactjs/first',
	1: '/testreactjs/first', 
	2: '/testreactjs/second',
	3: '/testreactjs/third',
	4: '/testreactjs/fourth',
	5: '/testreactjs/fifth',
    6: '/testreactjs/feed'
}

const Redirect = () => {
    const [currentPage, setCurrentPage] = React.useState(0);

    const webApp = useTelegramWebApp();

    console.log(webApp);

    React.useEffect(() => {
        axios.post(BASE_URL_PAGE, {
            _auth: webApp.initData
        }).then((res) => {
            const dat = res.data.page;
            setCurrentPage(dat);
        })
    }, [webApp])

    console.log(currentPage);

    return (
        <Navigate replace to={linksTo[currentPage] || linksTo[0]}/>
    );
}
 
export default Redirect;