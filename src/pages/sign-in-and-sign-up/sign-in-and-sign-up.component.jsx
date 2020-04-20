import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignInComponent from '../../components/signIn/signin.component'
import SignUp from '../../components/signUp/signup.component';

export const SignInAndSignUpPage = () => (
    <div className="sign-singup-container">
        <SignInComponent />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage;