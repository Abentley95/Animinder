import React from 'react';
// import styled from 'styled-components';
// import Link from 'react-router-dom';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {
    state={}
    
    submit = (data) => {
        console.log(data);
    }

    render () {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm submit={this.submit}/>
            </div>
        );
    }
}

export default LoginPage