import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase';

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <div className="login__logo">
                <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-128.png' alt=''/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
