import React from 'react';
import HousingCard from '../components/HousingCard/HousingCard';
import { InitDataContext } from '../InitDataProvider';

import url from '../Assets/fakeAPIImage1.png';

import axios from 'axios';
import { BASE_URL_FEED } from '../URL';
import SearchFail from './SearchFail';
import { Link } from 'react-router-dom';



const Feed = () => {

    const cropNumberMillions = (x) => {
        let newX = x.toString();
        switch (newX.length) {
          case 7:
            newX = newX.substring(0, 2).split('');
            newX.splice(1, 0, ',');
            return newX.join('')
          case 8:
            newX = newX.substring(0, 3).split('');
            newX.splice(2, 0, ',');
            return newX.join('')
          case 9:
            newX = newX.substring(0, 4).split('');
            newX.splice(3, 0, ',');
            return newX.join('')
          default:
            return x
          }
      };

    const [loading, setLoading] = React.useState(true);

     const [response, setResponse] = React.useState(null)

     const { initData } = React.useContext(InitDataContext);

     React.useEffect(() => {
			try {
				axios
					.post(BASE_URL_FEED, {
						_auth: initData
					})
					.then((res) => {
						setResponse(res.data.apartments);
						setLoading(false);
					})
					.catch((err) => {
						setLoading(false);
						setResponse(null);
					});
			} catch (error) {
				setResponse(null);
				setLoading(false);
			}
		}, [initData]);


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
                    toMetroTime={`${element[8]} мин.`}
                    startingPrice={cropNumberMillions(element[1])}
                    />
                </Link> 
            )}

            {/* {response && <div style={{color: 'white'}}>{JSON.stringify(response)}</div>} */}

            {response?.length === 0 && !loading && <SearchFail />}
        </div>
        </>
    );
}
 
export default Feed;