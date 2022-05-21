import * as React from 'react';

import { Navigate } from 'react-router-dom';
// import { InitDataContext } from './InitDataProvider';


// import axios from 'axios';
// import { BASE_URL_PAGE } from './URL';

// const linksTo = {
//     0: '/testreactjs/first',
// 	1: '/testreactjs/first', 
// 	2: '/testreactjs/second',
// 	3: '/testreactjs/third',
// 	4: '/testreactjs/fourth',
// 	5: '/testreactjs/fifth',
//     6: '/testreactjs/feed'
// }

const Redirect = () => {
    // const [currentPage, setCurrentPage] = React.useState(null);

    // const { initData } = React.useContext(InitDataContext);

    // React.useEffect(() => {
    //     axios.post(BASE_URL_PAGE, {
    //         _auth: initData
    //     }).then((res) => {
    //         const dat = res.data.page;
    //         setCurrentPage(dat);
    //     })
    // }, [initData])
    return (
        <>
            {/* {(currentPage !== null) && <Navigate replace to={linksTo[currentPage + 1]}/>} */}
            <Navigate replace to={'/testreactjs/quiz'}/>
        </>  
    );
}
 
export default Redirect;