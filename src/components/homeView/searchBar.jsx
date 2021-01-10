import React, {useState} from 'react';
import styled from 'styled-components';
import CircularButton from '../../common/Buttons/circularButton';
import { Wrapper } from '../../common/styledComponents';
import { breakpoint, primaryColor } from '../../styles/constants';

const Container = styled(Wrapper)`
    width:90%;
    @media (min-width: ${breakpoint}){
        width:${props => props.width || "auto"};
    }
`

const Input = styled.input`
    width:${props => props.width || "auto"};
    border:none;
    outline:none;
`

const SearchBar = ({ children, placeholder, action }) => {
    const [word, setWord] = useState("")
    
    const validateAndSetWord = () => {
        if (word) {
            if (word.length >= 2) action(word.toUpperCase())
            else alert("the word must be at least 2 characters")
        }
        else alert("please write a word")
    }

    return ( 
        <Container
            width="50%"
            horizontalAlign="space-between"
            verticalAlign="center"
            padding="10px 10px"
            shadow="5px 5px 15px 2px rgba(0,0,0,0.27)"
            radius="20px">
            <Input
                type="text"
                placeholder={placeholder}
                width="90%"
                onChange={e => setWord(e.target.value)}
                onKeyPress={e => e.key === "Enter" && validateAndSetWord()} />
            <CircularButton radius="30px" color={primaryColor} action={() => validateAndSetWord()}>
                {children}
            </CircularButton>
        </Container>
     );
}
 
export default SearchBar;