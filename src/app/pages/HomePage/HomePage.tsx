import React, { PureComponent } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import FLPKT from '../../../assets/images/flpkrt.jpg';
import AMZIN from '../../../assets/images/amzin.png';
import AMZGL from '../../../assets/images/amzgl.png';
import Select from '../../../assets/images/select.svg';

interface HomeProps { }

interface HomeState {
    currentRoute: string;
    isNotificationEnabled: boolean;
    isBudgetRequired: boolean;
}

class HomePage extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
            currentRoute: "Home",
            isBudgetRequired: false,
            isNotificationEnabled: false
        }
    }

    render() {

        return (
            <div className="HomePage">
                <Header currentRoute={this.state.currentRoute} />

                <div className="HomeContainer">
                    <div className="TrackSection">
                        <div className="UrlSection">
                            <p className="CardTitle">Give us the URL and just lay back</p>
                            <p className="CardCaption">You have located the product. Just copy and paste the url. Set your preferences and you are golden.</p>

                            <input
                                type="text"
                                className="UrlInput"
                                onBlur={() => { }}
                                placeholder="https://xxxamxxx.com"
                            />
                            <div className="UrlButton">
                                <Button
                                    label="Fetch URL"
                                    componentClass="Button"
                                    action={() => { }}
                                />
                            </div>
                        </div>

                        <div className="ProductSection">
                            <p className="CardTitle">The product you want us to track</p>
                        </div>
                    </div>

                    <div className="DetailSection">
                        <div className="OptionSection">
                            <p className="CardTitle">Enter your preferences</p>

                            <div className="Options">
                                <div className="SelectOption" onClick={() => this.setState({ isNotificationEnabled: !this.state.isNotificationEnabled })}>
                                    <p className="SelectOption_Label">Notifications</p>
                                    <img
                                        src={Select}
                                        alt="select"
                                        className="SelectOption_Icon"
                                        style={(!this.state.isNotificationEnabled) ? {visibility: "hidden"} : {visibility: "visible"}}
                                    />
                                </div>

                                <div className="SelectOption" onClick={() => this.setState({ isBudgetRequired: !this.state.isBudgetRequired })}>
                                    <p className="SelectOption_Label">Budget</p>
                                    <img
                                        src={Select}
                                        alt="select"
                                        className="SelectOption_Icon"
                                        style={(!this.state.isBudgetRequired) ? {visibility: "hidden"} : {visibility: "visible"}}
                                    />
                                </div>
                            </div>

                            <input
                                type="number"
                                placeholder="RS. XXXX"
                                onBlur={() => { }}
                            />
                        </div>

                        <div className="SiteSupportSection">
                            <p className="CardTitle">Supported Sites</p>

                            <div className="Sites">
                                <img
                                    src={FLPKT}
                                    alt="flpkt"
                                    className="Sites_Icon"
                                />
                                <img
                                    src={AMZIN}
                                    alt="amzin"
                                    className="Sites_Icon"
                                />
                                <img
                                    src={AMZGL}
                                    alt="amzgl"
                                    className="Sites_Icon"
                                />
                            </div>
                        </div>

                        <div className="AnalyticsSection">
                            <p className="CardTitle">Peeping into your previous choices</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;