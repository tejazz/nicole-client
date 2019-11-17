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
                        <div className="Logo">
                            Nicole
                        </div>

                        <div className="AuthContainer_Input">
                            <input className="Input" type="text" onBlur={() => { }} />
                            <input className="Input" type="password" onBlur={() => { }} />
                        </div>

                        <div className="AuthContainer_Button">
                            <button className="Button">Sign In</button>
                            <button className="Button">Sign Up</button>
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