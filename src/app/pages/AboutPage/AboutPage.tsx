import React, { PureComponent } from 'react';
import './AboutPage.scss';
import Header from '../../components/Header/Header';

interface AboutProps {
    history: any;   // to-do: define proper types
}

class AboutPage extends PureComponent<AboutProps> {
    render() {
        return (
            <div className="AboutPage">
                <Header
                    currentRoute="about"
                    history={this.props.history}
                />

                <div className="AboutPageContainer">
                    About Page
                </div>
            </div>
        );
    }
}

export default AboutPage;