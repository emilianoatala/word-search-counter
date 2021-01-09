import React from 'react';
import styled from 'styled-components';
import CircularButton from '../../common/Buttons/circularButton';
import { Wrapper } from '../../common/styledComponents';

const Input = styled.input`
    width:${props => props.width || "auto"};
    border:none;
`

const SearchBar = ({children, placeholder}) => {
    return ( 
        <Wrapper
            width="50%"
            horizontalAlign="space-between"
            verticalAlign="center"
            padding="10px 10px"
            shadow="5px 5px 15px 2px rgba(0,0,0,0.27)"
            radius="20px">
            <Input placeholder={placeholder} width="90%" />
            <CircularButton radius="30px" color="yellow">
                {children}
            </CircularButton>
        </Wrapper>
     );
}
 
export default SearchBar;