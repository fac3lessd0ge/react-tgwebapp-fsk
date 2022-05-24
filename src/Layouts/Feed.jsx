import React from 'react';
import HousingCard from '../components/HousingCard/HousingCard';
import { InitDataContext } from '../InitDataProvider';

import url from '../Assets/fakeAPIImage1.png';

import axios from 'axios';
import { BASE_URL_FEED } from '../URL';
import SearchFail from './SearchFail';
import { Link } from 'react-router-dom';



const Feed = () => {

    const [loading, setLoading] = React.useState(true);

    const [resp, setResp] = React.useState('nichego');

     const [response, setResponse] = React.useState(null)

     const { initData } = React.useContext(InitDataContext);

     React.useEffect(() => {

         try {
             axios.post(BASE_URL_FEED,{
                _auth: initData
            }).then((res) => {
                // if (res.status === 200) {
                    setResp(res.data)
                    setResponse(res.data.apartments)
                    setLoading(false);
                // }
                // else {
                //     setLoading(false);
                //     setResponse(null);
                // }
            }).catch(err => {setLoading(false); setResponse(null); setResp('Ошибка!!! 1')})
        } catch (error) {
            console.log('hey!');
            
            setResp('ошибка!!! 2')
            setResponse(null);
            setLoading(false);
        }

        
    }, [initData])


    return (
        <>
        <div>
            {!response && loading && <>Загрузка...</>}
            {response && response !== [] && response.map((element, index) =>  
                <Link to={`/react-tgwebapp-fsk/housing/${element[0]}`}>
                    <HousingCard 
                    key={index}
                    imgUrl={element[4]}
                    title={element[3]}
                    metro={element[5]}
                    toMetroTime={element[8]}
                    startingPrice={element[1]}
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