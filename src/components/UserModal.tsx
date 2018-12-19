import React, {Component} from 'react';

// Material elements
import Modal from "@material-ui/core/Modal/Modal";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



import styled from 'styled-components';
import axios from "axios";
import Button from "@material-ui/core/Button";

const ModalContent = styled.form`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 600px;
    padding: 32px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    
    .modal__button{
      width: 160px;
    }
`;

interface parentProps {
    openModal: any,
    handleClose: any,
    name: any,
    email: any,
    password: any,
    modalName: any,
    disPass: any,
    handleSubmit: any
}

class UserModal extends Component<parentProps> {

    state = {
        viewUsers: false,
        creatingUsers: false,
        editingUsers: false,
        deletedUsers: false,
        viewArticles: false,
        creatingArticles: false,
        editingArticles: false,
        deletedArticles: false
    };

    private handleChangeTextField = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    private handleChangeCheckbox = name => event => {
        this.setState({
            [name]: event.target.checked ,
        });
    };

    private handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmit(this.state)
    }

    render() {
        return (
            <div>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.openModal}
                    onClose={this.props.handleClose}
                >
                    <ModalContent onSubmit={this.handleSubmit.bind(this)}>
                        <Typography variant="h6" id="modal-title">
                            {this.props.modalName}
                        </Typography>

                        <TextField
                            id="standard-name"
                            label="Name"
                            defaultValue={this.props.name}
                            type="text"
                            onChange={this.handleChangeTextField('name')}
                            margin="normal"
                        />
                        <TextField
                            // disabled={this.props.disPass}
                            id="standard-email"
                            label="Email"
                            defaultValue={this.props.email}
                            type="email"
                            onChange={this.handleChangeTextField('email')}
                            margin="normal"
                        />
                        <TextField
                            id="standard-disabled"
                            label="Password"
                            type="password"
                            defaultValue={this.props.password}
                            onChange={this.handleChangeTextField('password')}
                            margin="normal"
                        />

                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.viewUsers} onChange={this.handleChangeCheckbox('viewUsers')} value="viewUsers" />
                                }
                                label="Просмотр других пользователей"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.creatingUsers} onChange={this.handleChangeCheckbox('creatingUsers')} value="creatingUsers" />
                                }
                                label="Создание пользователей"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.editingUsers} onChange={this.handleChangeCheckbox('editingUsers')} value="editingUsers" />
                                }
                                label="Редактирование пользователей"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.deletedUsers} onChange={this.handleChangeCheckbox('deletedUsers')} value="deletedUsers" />
                                }
                                label="Удаление пользователей"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.viewArticles} onChange={this.handleChangeCheckbox('viewArticles')} value="viewArticles" />
                                }
                                label="Просмотр статей"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.editingArticles} onChange={this.handleChangeCheckbox('editingArticles')} value="editingArticles" />
                                }
                                label="Редактирование статей"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.creatingArticles} onChange={this.handleChangeCheckbox('creatingArticles')} value="creatingArticles" />
                                }
                                label="Создание статей"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={this.state.deletedArticles} onChange={this.handleChangeCheckbox('deletedArticles')} value="deletedArticles" />
                                }
                                label="Удаление статей"
                            />
                        </FormGroup>

                        <Button
                            variant="contained"
                            color="primary"
                            className="modal__button"
                            type="submit"
                        >
                            Сохранить
                        </Button>
                    </ModalContent>
                </Modal>

            </div>
        );
    }
}

export default UserModal;