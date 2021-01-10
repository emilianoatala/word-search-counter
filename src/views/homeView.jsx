import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/mainLayout';
import SearchBar from '../components/homeView/searchBar';
import styled from 'styled-components';
import { Wrapper, Paragraph } from '../common/styledComponents';
import searchIcon from "../assets/img/search-solid.svg"
import WordSearchItem from '../components/homeView/wordSearchItem';
import { verifyAllArrayAxis } from '../helpers/functions';
import { getWordSearchData } from '../services/wordSearchService';
import ItemSelector from '../components/homeView/itemSelector';
import { primaryColor } from '../styles/constants';


const Icon = styled.img`
    width:70%;
`

const Word = styled.h2`
    font-size: 30px;
    font-weight:bold;
    text-transform:uppercase;
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
        }
        getData()
    }, []);

    useEffect(() => data.length > 0 && setQuantityWords(verifyAllArrayAxis(data, selectedItem, word)), [data, word, selectedItem])

    return ( 
        <MainLayout>
            <Wrapper direction="column" horizontalAlign="center" padding="50px 0">

                <SearchBar placeholder="Search a word" action={setWord}>
                    <Icon src={searchIcon} alt="search"/>
                </SearchBar>
                
                <Paragraph margin="50px 0 30px 0" size="20px">Selected Word:</Paragraph>
                <Word>{ word }</Word>

                <Wrapper margin="60px 0">
                    <ItemSelector radius="30px" color={primaryColor} array={data} active={selectedItem} action={setSelectedItem}/>
                </Wrapper>

                <Wrapper margin="30px 0">
                    {data.length > 0 && <WordSearchItem array={ data[selectedItem] }/>}
                </Wrapper>

                <Paragraph align="center" size="20px">{`The word: "${word}" appears ${quantityWords} times`}</Paragraph>

            </Wrapper>
        </MainLayout>
     );
}
 
export default HomeView;