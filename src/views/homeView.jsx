import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/mainLayout';
import SearchBar from '../components/homeView/searchBar';
import styled from 'styled-components';
import { Wrapper } from '../common/styledComponents';
import searchIcon from "../assets/img/search-solid.svg"
import WordSearchItem from '../components/homeView/wordSearchItem';
import { verifyAllArrayAxis } from '../helpers/functions';
import { getWordSearchData } from '../services/wordSearchService';

const Icon = styled.img`
    width:70%;
`

const HomeView = () => {
    const [data, setData] = useState([])
    const [word, setWord] = useState("OIE")
    const [selectedItem, setSelectedItem] = useState(0)
    const [quantityWords, setQuantityWords] = useState(0)
    
    useEffect(() => {
        const getData = async () => {
            let response = await getWordSearchData()
            setData(response.resources)
            setQuantityWords(verifyAllArrayAxis(response.resources, selectedItem, word))
        }
        getData()
    }, []);

    useEffect(() => data.length > 0 && setQuantityWords(verifyAllArrayAxis(data, selectedItem, word)), [data, word, selectedItem])

    console.log(word)
    return ( 
        <MainLayout>
            <Wrapper direction="column" horizontalAlign="center" padding="50px 0">
                <SearchBar placeholder="Search any word (default OIE)" action={setWord}>
                    <Icon src={searchIcon}/>
                </SearchBar>



                <Wrapper margin="60px 0">
                    {data.length > 0 && <WordSearchItem array={ data[selectedItem] }/>}
                </Wrapper>
            </Wrapper>
        </MainLayout>
     );
}
 
export default HomeView;