import React, { PureComponent } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';

interface HomeProps { }

interface HomeState { }

class HomePage extends PureComponent<HomeProps, HomeState> {
    render() {
        return (
            <div className="HomePage">
                <Header />

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