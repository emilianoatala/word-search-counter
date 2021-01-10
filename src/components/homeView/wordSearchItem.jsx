import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../common/styledComponents';

const Word = styled.p`
    font-size:100%;
`

const WordSearchItem = ({array}) => {
    return ( 
        <Wrapper direction="column" width="300px" padding="10px" border="1px solid gray" radius="30px">
            {array.map((row,i) => 
                <Wrapper key={i} horizontalAlign="space-around" padding="10px 0" width="100%">
                    {row.map((value, index) => 
                        <Wrapper key={`${index}-${value})`} horizontalAlign="center" verticalAlign="center" width={`calc(100%/${row.length})`} height="50px">
                            <Word>{value}</Word>
                        </Wrapper>
                    )}
                </Wrapper>
            )}
        </Wrapper>
     );
}
 
export default WordSearchItem;