import React, { PureComponent } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

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
                    <p className="HomeContainer_Title">Url Section</p>
                    <div className="HomeContainer_UrlSection">
                        <input type="text" className="UrlInput" onBlur={() => {}}/>
                        <Button
                            label="Fetch URL"
                            className="Button"
                            action={() => {}}
                        />
                    </div>

                    <p className="HomeContainer_Title">Option Section</p>
                    <div className="HomeContainer_OptionSection">
                    </div>

                    <p className="HomeContainer_Title">Site Support Section</p>
                    <div className="HomeContainer_SiteSupportSection">
                    </div>

                    <p className="HomeContainer_Title">Analytics Section</p>
                    <div className="HomeContainer_AnalyticsSection">
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;