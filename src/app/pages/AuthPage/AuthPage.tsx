import React, { PureComponent } from 'react';
import './AuthPage.scss';
import Button from '../../components/Button/Button';

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
        const Logo = (<div className="AuthContainer__Logo">
            <h2 className="Logo">Nicole</h2>
        </div>);

        const Login = (<div className="Login">
            <div className="AuthContainer__Input">
                <input className="Input" type="text" onBlur={() => { }} placeholder="Username/Email" />
                <input className="Input" type="password" onBlur={() => { }} placeholder="Password" />
            </div>

            <div className="AuthContainer__Button">
                <Button
                    label="Sign In"
                    componentClass="Button"
                    action={() => {}}
                />
                <Button
                    label="Sign Up"
                    componentClass="Button Button--Inactive"
                    action={() => this.setState({ login: false })}
                />
            </div>

            <div className="AuthContainer__Forgot">
                <p className="Link">Forgot Password</p>
            </div>
        </div>);

        const Signup = (
            <div className="Signup">
                <div className="AuthContainer__Input">
                    <input className="Input" type="text" onBlur={() => { }} placeholder="Enter Email" />
                    <input className="Input" type="text" onBlur={() => { }} placeholder="Enter Name" />
                    <input className="Input" type="password" onBlur={() => { }} placeholder="Enter Password" />
                    <input className="Input" type="password" onBlur={() => { }} placeholder="Confirm Password" />
                </div>

                <div className="AuthContainer__Button">
                    <Button
                        label="Sign Up"
                        componentClass="Button"
                        action={() => {}}
                    />
                </div>

                <div className="AuthContainer__Forgot">
                    <p className="Link" onClick={() => this.setState({ login: true })}>Go Back To Sign In</p>
                </div>
            </div>
        );

        return (
            <div className="AuthPage">
                <div className="AuthContainer">
                    {Logo}
                    {this.state.login ? Login : Signup}
                </div>
            </div>
        );
    }
}

export default AuthPage;