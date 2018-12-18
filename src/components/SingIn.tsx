import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

// Material elements
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';


import styled from 'styled-components';


const Form = styled.form`
  width: 345px;
`;

const SingInFormWrapper = styled.div`
  .singInForm__input{
    width: 100%;
  }
  
  .singInForm__btn{
    margin: 0 auto;
    text-transform: none;
  }
  
  .singInForm__card{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 350px;
  }
  
  .singInForm__input-group{
  display: flex;
  flex-direction: column;
  }
`;

class SingIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: ''
        };
    }

    handleSubmit(e){
        e.preventDefault();

        let uri = 'http://localhost/Users';
        axios.get(uri).then((res) => {
            console.log('123')
        });
    }
    render () {
        return (
            <SingInFormWrapper className="singInForm__wrapper">
                <Form className="" noValidate autoComplete="off">
                    <Card className="singInForm__card">

                        <CardActions className="singInForm__input-group">
                            <TextField
                                id="standard-dense"
                                label="Email"
                                className="singInForm__input"
                                type="email"
                                name="email"
                                margin="normal"
                                autoComplete="email"
                            />
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                className="singInForm__input"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                            />
                        </CardActions>

                        <CardActions>

                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                className="singInForm__btn"
                                onClick={this.handleSubmit}
                                >
                                Sing In
                            </Button>
                        </CardActions>

                    </Card>
                </Form>
            </SingInFormWrapper>
        );
    }
}

export default SingIn;