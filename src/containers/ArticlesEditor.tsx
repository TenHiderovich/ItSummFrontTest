import React from 'react';

// Components
import Sidebar from "../components/Sidebar";
import Articles from "../components/Articles";

import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
`;

class Content extends React.Component {
    render () {
        return (
            <ContentWrapper>

                <Sidebar />

                <Articles />

            </ContentWrapper>
        );
    }
}

export default Content;