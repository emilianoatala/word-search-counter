import React, { useEffect, useState } from 'react'
import { verifyArrayAxisX, verifyArrayAxisY, verifyArrayDiagonal } from './helpers/functions';
import { getWordSearchData } from './services/wordSearchService';
import HomeView from './views/homeView/homeView';

const App =  () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        const getData = async () => {
            let response = await getWordSearchData()
            setData(response.resources)
            let value = 0;

            response.resources[3].forEach(item => value += verifyArrayAxisX(item, "OIE"))
            value += verifyArrayAxisY(response.resources[3], "OIE")
            value += verifyArrayDiagonal(response.resources[3], "OIE")
            console.log(value)
        }
        getData()
    }, []);

    return ( 
        <HomeView data={data}></HomeView>
     );
}
 
export default App;