import React from 'react';

// Components
import UserModal from './UserModal';

// Material elements
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography/Typography"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Edit from '@material-ui/icons/Edit';

import styled from 'styled-components';
import axios from "axios";

const UserWrapper = styled.div`
    margin-bottom: 50px;
    
    .user__more{
      margin-top: 10px;
    }
    
    .user__wrapper{
      position: absolute;
      top: 5px;
      right: -50px;
    }
   
    .user__paper{
      position: absolute;
      top: 0;
      right: -100px;
    }
    
    .user__email{
      margin-bottom: 10px;
    }
`;

interface userProps {
    key: number,
    name: string,
    email: string,
    password: string,
    handleOpen: any,
    userId: number
}

class User extends React.Component<userProps> {

    state = {
        openModal: false,
        open: false
    };

    private handleClick = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    private handleClickAway = () => {
        this.setState({
            open: false,
        });
    };

    private handleOpen = () => {
        this.setState({
            openModal: true
        });
    };

    public handleClose = () => {
        this.setState({
            openModal: false
        });
    };

    public handleSubmit(state){
        let user = {
            title: state.title,
            body: state.body
        };
        axios.patch('http://127.0.0.1:8000/api/user/' + this.props.userId, user).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    private handleDeleteSubmit(e){
        e.preventDefault();
        axios.delete('http://127.0.0.1:8000/api/user/' + this.props.userId).then(res => {
            console.log(res)
        })
    }

    render () {

        const { open } = this.state;

        return (
            <div>
                <UserWrapper>
                    <ListItem className="user__item">
                        <ListItemText>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h2"
                                >
                                {this.props.name}
                            </Typography>

                            <Typography
                                component="p"
                                className="user__email"
                            >
                                {this.props.email}
                            </Typography>
                        </ListItemText>

                        <ClickAwayListener onClickAway={this.handleClickAway}>
                            <div className="user__wrapper">

                                <IconButton
                                    aria-label="More"
                                    className="user__actions"
                                    onClick={this.handleClick}
                                    >
                                    <MoreVertIcon />
                                </IconButton>

                                {open ? (
                                    <div className="user__paper">
                                        <Tooltip title="edit">
                                            <IconButton
                                                aria-label="edit"
                                                className="user__delete"
                                                onClick={this.handleOpen}
                                            >
                                                <Edit />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton
                                                aria-label="Delete"
                                                className="user__delete"
                                                onClick={this.handleDeleteSubmit.bind(this)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                ) : null}

                            </div>
                        </ClickAwayListener>

                        <UserModal
                            openModal={this.state.openModal}
                            name={this.props.name}
                            email={this.props.email}
                            password={this.props.password}
                            handleClose={this.handleClose}
                            modalName={'Редактировать пользователя'}
                            disPass={'disabled'}
                            handleSubmit={this.handleSubmit.bind(this)}
                        />
                    </ListItem>
                </UserWrapper>
            </div>
        );
    }
}

export default User;