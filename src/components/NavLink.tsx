import React from 'react';
import { Link } from 'react-router-dom'

// Material elements
import MenuItem from '@material-ui/core/MenuItem';


import styled from 'styled-components';

interface SidebarProps {
    text: string,
    icon: string,
    link: string
}

const LinkWrapper = styled.div`
  width: 100%;
  line-height: 46px;
  
  .nav__link{
    color:#000;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;
const LinkText = styled.span`
  margin-left: 10px;
`;

class NavLink extends React.Component<SidebarProps> {

    render () {
        return (
            <>
                <MenuItem>
                    <LinkWrapper>

                        <Link
                            to={this.props.link}
                            className="nav__link"
                            >

                            <i className="material-icons">
                                {this.props.icon}
                            </i>

                            <LinkText>
                                {this.props.text}
                            </LinkText>

                        </Link>

                    </LinkWrapper>
                </MenuItem>
            </>
        );
    }
}

export default NavLink;