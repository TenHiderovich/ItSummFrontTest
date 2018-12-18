import React from 'react';

// Components
import NavLink from "../components/NavLink";

// Material elements
import MenuList from '@material-ui/core/MenuList';
import IconButton from '@material-ui/core/IconButton';
import Power from '@material-ui/icons/PowerSettingsNew';

import styled from 'styled-components';

const SideBarWrapper = styled.div`
  position:fixed;
  width: 300px;
  height: 100vh;
  left: 0;
  top: 0;
  background-color:#EEEEEE;
  
  .sidebar__logout{
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
`


class Sidebar extends React.Component{
    render () {
        return (
            <>
                <SideBarWrapper>
                    <nav>
                        <MenuList>
                            <NavLink link={"/usersEditor"} text={"Пользователи"} icon={"rowing"}/>
                            <NavLink link={"/articlesEditor"} text={"Статьи"} icon={"insert_drive_file"}/>
                        </MenuList>
                    </nav>
                    <IconButton
                        aria-label="logout"
                        className="sidebar__logout"
                        >
                        <Power />
                    </IconButton>
                </SideBarWrapper>
            </>
        );
    }
}

export default Sidebar;