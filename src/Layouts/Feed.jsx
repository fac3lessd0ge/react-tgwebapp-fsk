import React from 'react';
import HousingCard from '../components/HousingCard/HousingCard';

import axios from 'axios';
import { BASE_URL_FEED } from '../URL';

import { useTelegramWebApp } from 'react-telegram-webapp';


const Feed = () => {
    const [response, setResponse] = React.useState([])

    const webApp = useTelegramWebApp();

    React.useEffect(() => {
        axios.post(BASE_URL_FEED,{
            _auth: webApp.initData
        }).then((res) => {
            const dat = res.data.page;
            setResponse(dat);
        })
    }, [webApp.initData])


    return (
        <div>
            {webApp.initData}
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