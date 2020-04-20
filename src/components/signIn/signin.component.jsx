import React from 'react';
import './signin.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle, auth, createUserOnSignIn } from '../../firebase/firebase.util';

export default class SignInComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserOnSignIn(user);

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

    handleOnChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput required type="email" name="email" value={this.state.email} handleChange={this.handleOnChange} label="Email" />
                    <FormInput required type="password" name="password" value={this.state.password} handleChange={this.handleOnChange} label="Password" />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}