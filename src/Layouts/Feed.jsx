import React from 'react';
import HousingCard from '../components/HousingCard/HousingCard';
import { InitDataContext } from '../InitDataProvider';

import axios from 'axios';
import { BASE_URL_FEED } from '../URL';



const Feed = () => {
    const [response, setResponse] = React.useState([])

    const { initData } = React.useContext(InitDataContext);

    React.useEffect(() => {
        axios.post(BASE_URL_FEED,{
            _auth: initData
        }).then((res) => {
            const dat = res.data.page;
            setResponse(dat);
        })
    }, [initData])


    return (
        <div>
            {initData}
            {response.map((element, index) => {
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
        </div>
    );
}
 
export default Feed;