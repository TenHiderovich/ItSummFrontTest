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

class SingIn extends React.Component{
    state = {
        email: null,
        password: null
    };

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e){
        e.preventDefault();
        const {email , password} = this.state;

        axios.post('http://127.0.0.1:8000/api/login', {email , password})
            .then((res) => {
                this.setState({err: false});
                console.log(res)
                // this.props.history.push("home") ;
            }).catch(err=> {
            this.setState({err: true});
            console.log(err)
        });
    }

    render () {

        return (
            <SingInFormWrapper className="singInForm__wrapper">
                <Form
                    noValidate
                    autoComplete="off"
                    method="POST"
                    action="/"
                    onSubmit={this.handleSubmit.bind(this)}
                >
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
                                onChange={this.onChange.bind(this)}
                            />

                            <TextField
                                id="standard-password-input"
                                label="Password"
                                className="singInForm__input"
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                margin="normal"
                                onChange={this.onChange.bind(this)}
                            />

                        </CardActions>

                        <CardActions>

                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                className="singInForm__btn"
                                type="submit"
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