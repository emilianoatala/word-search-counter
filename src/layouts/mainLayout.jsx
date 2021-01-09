import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding:0, 20px;
`
const Header = styled.div`
    display:flex;
    align-items:center;
    height:40px;
    width:100%;
`
const Logo = styled.img`
    max-height:30px;
`
const Title = styled.h1`
    font-size:1.8rem;
    font-weight:bold;
    color: black;
    margin-left:15px;
`
const MainLayout = ({children}) => {
    return ( 
        <Container>
            <Header>
                <Logo />
                <Title>
                    Word Search Counter
                </Title>
            </Header>
            {children}
        </Container>
     );
}
 
export default MainLayout;