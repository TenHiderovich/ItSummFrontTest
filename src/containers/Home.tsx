import React from 'react';

// Components
import Sidebar from "../components/Sidebar";

import styled from 'styled-components';


const ContentWrapper = styled.div`
  display: flex;
`;


class Home extends React.Component {
    render () {
        return (
            <ContentWrapper>

                <Sidebar />

            </ContentWrapper>
        );
    }
}

export default Home;