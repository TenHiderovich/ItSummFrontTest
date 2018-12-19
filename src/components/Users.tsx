import React from 'react';
import axios from 'axios';

// Components
import User from '../components/User'

// Material elements
import Fab from "@material-ui/core/Fab/Fab";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import List from '@material-ui/core/List';
import AddIcon from '@material-ui/icons/add';


import styled from 'styled-components';
import UserModal from "./UserModal";

const UserListWrapper = styled.div`
  width: 50%;
  max-width: 600px;
  margin-left: 300px;
  
  .user__add{
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 10;
  }
`;

class Users extends React.Component {

    state = {
        openModal: false,
        users: []
    };

    public handleOpen = () => {
        this.setState({
            openModal: true
        });
    };

    public handleClose = () => {
        this.setState({
            openModal: false
        });
    };

    componentWillMount() {
        axios.get('http://127.0.0.1:8000/api/user').then(resp => {
            this.setState({
                users: resp.data
            });
        }).catch(err => {
            console.log(err);
        })
    }

    public handleSubmit(state){
        let user = {
            name: state.name,
            email: state.email,
            password: state.password
        };

        axios.post('http://127.0.0.1:8000/api/user', user).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    render () {
        return (
            <div>
                <UserListWrapper>
                    <List>
                        {this.state.users.map((user) =>
                            <User
                                key={user.id}
                                userId={user.id}
                                name={user.name}
                                email={user.email}
                                password={user.password}
                                handleOpen={this.handleOpen}
                            />
                        )}
                    </List>

                    <Tooltip title="Add" aria-label="Add">
                        <Fab
                            color="secondary"
                            className="user__add"
                            onClick={this.handleOpen}
                        >
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </UserListWrapper>

                <UserModal
                    openModal={this.state.openModal}
                    key={null}
                    name={null}
                    email={null}
                    password={null}
                    handleClose={this.handleClose}
                    modalName={'Создать нового пользователя'}
                    disPass={null}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default Users;