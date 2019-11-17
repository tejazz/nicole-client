import React, { PureComponent } from 'react';
import './AuthPage.scss';

interface AuthProps {

}

interface AuthState {
    login: boolean;
}

class AuthPage extends PureComponent<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);

        this.state = {
            login: true
        };
    }

    render() {
        const Login = (<div className="Login">
            <div className="AuthContainer_Input">
                <input className="Input" type="text" onBlur={() => { }} placeholder="Username/Email" />
                <input className="Input" type="password" onBlur={() => { }} placeholder="Password" />
            </div>

            <div className="AuthContainer_Button">
                <button className="Button">Sign In</button>
                <button className="Button Button--Inactive" onClick={() => this.setState({ login: false })}>Sign Up</button>
            </div>

            <div className="AuthContainer_Forgot">
                <p className="Link">Forgot Password</p>
            </div>
        </div>);

        const Signup = (
            <div className="Signup">
                <div className="AuthContainer_Input">
                    <input className="Input" type="text" onBlur={() => { }} placeholder="Enter Email" />
                    <input className="Input" type="text" onBlur={() => { }} placeholder="Enter Name" />
                    <input className="Input" type="password" onBlur={() => { }} placeholder="Enter Password" />
                    <input className="Input" type="password" onBlur={() => { }} placeholder="Confirm Password" />
                </div>

                <div className="AuthContainer_Button">
                    <button className="Button">Sign Up</button>
                </div>

                <div className="AuthContainer_Forgot">
                    <p className="Link" onClick={() => this.setState({ login: true })}>Go Back To Sign In</p>
                </div>
            </div>
        );

        return (
            <div className="AuthPage">
                <div className="AuthContainer">
                    <div className="AuthContainer_Logo">
                        <h2 className="Logo">Nicole</h2>
                    </div>

                    {this.state.login ? Login : Signup}
                </div>
            </div>
        );
    }
}

export default AuthPage;