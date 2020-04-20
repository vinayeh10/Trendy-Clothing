import React from 'react';
import FormInput from '../form-input/form-input.component';
import { auth, createUserOnSignIn } from '../../firebase/firebase.util';
import CustomButton from '../custom-button/custom-button.component';
import './signup.styles.scss';


class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        let { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords dosn't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserOnSignIn(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        let { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an Account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={displayName}
                        onChange={this.handleChange}
                        required />
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={this.handleChange}
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={password}
                        onChange={this.handleChange}
                        required />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;