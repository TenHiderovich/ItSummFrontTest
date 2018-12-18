import React, {Component} from 'react';

// Material elements
import Modal from "@material-ui/core/Modal/Modal";
import Typography from "@material-ui/core/Typography/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

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
    openModal: boolean,
    handleClose: any,
    title: string,
    body: string,
    modalName: string,
    handleSubmit: any
}

class ArticleModal extends Component<parentProps> {

    state = {
        title: this.props.title,
        body: this.props.body
    };

    private handleTitleChange(e){
        this.setState({
            title: e.target.value
        })
    }

    private handleBodyChange(e){
        this.setState({
            body: e.target.value
        })
    }

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
                            label="Зоголовок"
                            defaultValue={this.state.title}
                            onChange={this.handleTitleChange.bind(this)}
                            margin="normal"
                        />

                        <TextField
                            id="outlined-multiline-flexible"
                            label="Текст"
                            defaultValue={this.state.body}
                            multiline
                            rows="6"
                            onChange={this.handleBodyChange.bind(this)}
                            margin="normal"
                            variant="outlined"
                        />

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

export default ArticleModal;