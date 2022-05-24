import React from 'react';
import HousingCard from '../components/HousingCard/HousingCard';
import { InitDataContext } from '../InitDataProvider';

import axios from 'axios';
import { BASE_URL_FEED } from '../URL';
import SearchFail from './SearchFail';
import { Link } from 'react-router-dom';



const Feed = () => {

    const [loading, setLoading] = React.useState(true);

     const [response, setResponse] = React.useState(null)

     const { initData } = React.useContext(InitDataContext);

     React.useEffect(() => {

         try {
             axios.post(BASE_URL_FEED,{
                _auth: initData
            }).then((res) => {
                console.log(res);
                // if (res.status === 200) {
                    setResponse(res.data.apartments)
                    setLoading(false);
                // }
                // else {
                //     setLoading(false);
                //     setResponse(null);
                // }
            }).catch(err => {setLoading(false); setResponse(null)})
        } catch (error) {
            console.log('hey!');
            setResponse(null);
            setLoading(false);
        }

        
    }, [initData])


    return (
        <>
        <div>
            {!response && loading && <>Загрузка...</>}
            {response?.length && response.map((element, index) =>  
                <Link to={`/react-tgwebapp-fsk/housing/${element[0]}`}>
                    <HousingCard 
                    key={index}
                    imgUrl={element[2].split('"').filter((url) => url.length > 2)[0]}
                    startMark={'не пришло из бд'}
                    classCategory={'не пришло из бд'}
                    title={element[0]}
                    metro={element[3]}
                    toMetroTime={'не пришло из бд'}
                    startingPrice={element[5]}
                />
                </Link> 
            )}

            {response && <div style={{color: 'white'}}>{JSON.stringify(response)}</div>}

            {response?.length === 0 && !loading && <SearchFail />}
        </div>
        </>
    );
}
 
export default Feed;