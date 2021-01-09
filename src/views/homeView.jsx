import React from 'react';
import MainLayout from '../layouts/mainLayout';
import SearchBar from '../components/homeView/searchBar';
import styled from 'styled-components';
import { Wrapper } from '../common/styledComponents';

const Icon = styled.i`
    
`

const HomeView = ({data}) => {
    return ( 
        <MainLayout>
            <Wrapper direction="column" horizontalAlign="center" padding="50px 0">
                <SearchBar placeholder="Search any word (defaut 0IE)" >
                        
                </SearchBar>
            </Wrapper>
        </MainLayout>
     );
}
 
export default HomeView;