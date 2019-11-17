import React, { PureComponent } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';

interface HomeProps { }

interface HomeState {
    currentRoute: string;
}

class HomePage extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
            currentRoute: "Home"
        }
    }

    render() {
        return (
            <div className="HomePage">
                <Header
                    currentRoute={this.state.currentRoute}
                />

                <div className="HomeContainer">
                    <div className="HomeContainer_UrlSection">
                        Url Section
                    </div>

                    <div className="HomeContainer_OptionSection">
                        Option Section
                    </div>

                    <div className="HomeContainer_SiteSupportSection">
                        Site Support Section
                    </div>

                    <div className="HomeContainer_AnalyticsSection">
                        Analytics Section
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;