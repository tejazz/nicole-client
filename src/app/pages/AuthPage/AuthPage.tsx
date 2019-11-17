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
        return (
            <div className="AuthPage">
                <div className="Login">
                    <div className="AuthContainer">
                        <div className="AuthContainer_Logo">
                            <h2 className="Logo">Nicole</h2>
                        </div>

                        <div className="AuthContainer_Input">
                            <input className="Input" type="text" onBlur={() => { }} placeholder="Username/Email" />
                            <input className="Input" type="password" onBlur={() => { }} placeholder="Password" />
                        </div>

                        <div className="AuthContainer_Button">
                            <button className="Button">Sign In</button>
                            <button className="Button Button--Inactive">Sign Up</button>
                        </div>

                        <div className="AuthContainer_Forgot">
                            <p className="Link">Forgot Password</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthPage;