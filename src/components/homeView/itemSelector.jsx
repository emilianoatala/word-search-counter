import React from 'react';
import { Wrapper } from '../../common/styledComponents'
import CircularButton from '../../common/Buttons/circularButton'
import styled from 'styled-components';

const Index = styled.p`
    margin:0;
`

const ItemSelector = ({array, active, color, radius, action}) => {
    return ( 
        <Wrapper horizontalAlign="space-around" verticalAlign="center">
            {array.map((item, i) => (
                <Wrapper padding="10px" key={i}>
                    <CircularButton
                        radius={radius}
                        border={`2px solid ${color}`}
                        active={active === i ? "true" : "false"}
                        activeColor={color}
                        action={()=>action(i)}
                    >
                        <Index >{ i + 1 }</Index>
                    </CircularButton>
                </Wrapper>
            ))}
        </Wrapper>
     );
}
 
export default ItemSelector;