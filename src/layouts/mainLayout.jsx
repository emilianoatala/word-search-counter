import React from 'react';
import styled from 'styled-components';
import logotype from '../assets/img/logotype.png'
import { breakpoint } from '../styles/constants';

const Container = styled.div`
    padding:0 20px;
`
const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:50px;
    width:100%;

    @media (min-width: ${breakpoint}){
        justify-content:flex-start;
    }
`
const Logo = styled.img`
    max-height:30px;
`
const Title = styled.h1`
    font-size:1.5rem;
    font-weight:bold;
    color: black;
    margin-left:10px;
`

const MainLayout = ({children}) => {
    return ( 
        <Container> 
            <Header>
                <Logo src={logotype}/>
                <Title>
                    Word Search Counter
                </Title>
            </Header>
            {children}
        </Container>
     );
}
 
export default MainLayout;