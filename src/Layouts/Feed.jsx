import React from 'react';
import HousingCard from '../components/HousingCard/HousingCard';
import { InitDataContext } from '../InitDataProvider';

import axios from 'axios';
import { BASE_URL_FEED } from '../URL';
import SearchFail from './SearchFail';



const Feed = () => {
    const [response, setResponse] = React.useState([])

    const { initData } = React.useContext(InitDataContext);

    // React.useEffect(() => {

    //     try {
    //         axios.post(BASE_URL_FEED,{
    //             _auth: initData
    //         }).then((res) => {
    //             console.log(res);
    //             if (res.status === 200) {
    //                 setResponse(res.data.apartments)
    //             }
    //             else {
    //                 setResponse(null);
    //             }
    //         }) 
    //     } catch (error) {
    //         console.log('hey!');
    //         setResponse(null);
    //     }

        
    // }, [initData])


    return (
        <>
        <div>
            {/* {response && response.map((element, index) => {
                console.log(element);

                return <HousingCard 
                    key={index}
                    imgUrl={element[2].split('"').filter((url) => url.length > 2)[0]}
                    startMark={'не пришло из бд'}
                    classCategory={'не пришло из бд'}
                    title={element[0]}
                    metro={element[3]}
                    toMetroTime={'не пришло из бд'}
                    startingPrice={element[5]}
                />
            })}

            {!response && <SearchFail />} */}
            <SearchFail />
        </div>
        </>
    );
}
 
export default Feed;