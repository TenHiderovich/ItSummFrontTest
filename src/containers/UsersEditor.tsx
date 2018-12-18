import React from 'react';

// Components
import Sidebar from "../components/Sidebar";
import Users from "../components/Users";

import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
`

class Content extends React.Component {
    render () {
        return (
            <ContentWrapper>

                <Sidebar />

                <Users />

            </ContentWrapper>
        );
    }
}

export default Content;