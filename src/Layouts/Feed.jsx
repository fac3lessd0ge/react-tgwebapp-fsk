import React from 'react';
import HousingCard from '../components/HousingCard/HousingCard';
import { InitDataContext } from '../InitDataProvider';

import axios from 'axios';
import { BASE_URL_FEED } from '../URL';
import TextContainer from '../components/TextField/TextContainer';



const Feed = () => {
    const [response, setResponse] = React.useState([])

    const { initData } = React.useContext(InitDataContext);

    React.useEffect(() => {
        axios.post(BASE_URL_FEED,{
            _auth: initData
        }).then((res) => 
            setResponse(res)
        )
    }, [])


    return (
        <div>
            <TextContainer>{JSON.stringify(response)}</TextContainer>
            

            {/* {response.map((element, index) => {
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
            })} */}
        </div>
    );
}
 
export default Feed;