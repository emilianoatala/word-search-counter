import React, {useState} from 'react';
import styled from 'styled-components';
import CircularButton from '../../common/Buttons/circularButton';
import { Wrapper } from '../../common/styledComponents';

const Input = styled.input`
    width:${props => props.width || "auto"};
    border:none;
    outline:none;
`

const SearchBar = ({ children, placeholder, action }) => {
    const [word, setWord] = useState("")
    
    const validateAndSetWord = () => {
        if (word) {
            if (word.length >= 2) action(word)
            else alert("the word must be at least 2 characters")
        }
        else alert("please write a word")
    }

    return ( 
        <Wrapper
            width="50%"
            horizontalAlign="space-between"
            verticalAlign="center"
            padding="10px 10px"
            shadow="5px 5px 15px 2px rgba(0,0,0,0.27)"
            radius="20px">
            <Input placeholder={placeholder} width="90%" onChange={ e => setWord(e.target.value) }/>
            <CircularButton radius="30px" color="#fbde3f" action={() => validateAndSetWord()}>
                {children}
            </CircularButton>
        </Wrapper>
     );
}
 
export default SearchBar;