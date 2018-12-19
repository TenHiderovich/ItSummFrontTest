import React from 'react';

// Components
import SingIn from '../components/SingIn';

import styled from 'styled-components';

const HomePageWrapper = styled.div`
  background-color: #3f51b5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

class Home extends React.Component {
    render () {
        return (
            <HomePageWrapper>
                <SingIn />
            </HomePageWrapper>
        );
    }
}

export default Home;