import React, { PureComponent } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import FLPKT from '../../../assets/images/flpkrt.jpg';
import AMZIN from '../../../assets/images/amzin.png';
import AMZGL from '../../../assets/images/amzgl.png';
import Select from '../../../assets/images/select.svg';
import DefaultProduct from '../../../assets/images/default-product.svg';

interface HomeProps {
    history: any;   // to-do: define proper types
}

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
        const mockChartData = [
            { label: "Product1", value: 10 },
            { label: "Product2", value: 40 },
            { label: "Product3", value: 50 },
            { label: "Product4", value: 90 },
            { label: "Product5", value: 100 },
            { label: "Product6", value: 110 },
            { label: "Product7", value: 50 },
            { label: "Product8", value: 90 },
            { label: "Product9", value: 100 },
            { label: "Product10", value: 110 },
        ];

        return (
            <div className="HomePage">
                <Header
                    currentRoute={this.state.currentRoute}
                    history={this.props.history}
                />

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
                            <div className="HomeButton">
                                <Button
                                    label="Fetch URL"
                                    componentClass="Button"
                                    action={() => { }}
                                />
                            </div>
                        </div>

                        <div className="ProductSection">
                            <p className="CardTitle">The product you want us to track</p>

                            <div className="ProductCard">
                                <img
                                    src={DefaultProduct}
                                    className="ProductImage"
                                    alt="product-image"
                                />

                                <div className="ProductDetails">
                                    <p className="ProductDetails_Label">Default Product Name - Some Specification</p>
                                    <p className="ProductDetails_Label ProductDetails_Label--Secondary">xxxwnb.com</p>
                                    <div className="ProductDetails_Price">
                                        <p className="ProductDetails_Label">RS</p>
                                        <p className="ProductDetails_Label ProductDetails_Label--Primary">99,000</p>
                                    </div>
                                </div>
                            </div>
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
                                        style={(!this.state.isNotificationEnabled) ? { opacity: 0.3 } : { opacity: 1 }}
                                    />
                                </div>

                                <div className="SelectOption" onClick={() => this.setState({ isBudgetRequired: !this.state.isBudgetRequired })}>
                                    <p className="SelectOption_Label">Budget</p>
                                    <img
                                        src={Select}
                                        alt="select"
                                        className="SelectOption_Icon"
                                        style={(!this.state.isBudgetRequired) ? { opacity: 0.3 } : { opacity: 1 }}
                                    />
                                </div>
                            </div>

                            {(this.state.isBudgetRequired) ? <input
                                type="number"
                                placeholder="RS. XXXX"
                                className="OptionSection_Input"
                                onBlur={() => { }}
                            /> : null}

                            <div className="HomeButton">
                                <Button
                                    label="Add Product"
                                    componentClass="Button"
                                    action={() => { }}
                                />
                            </div>
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

                            <div className="AnalyticsSection_Graph">
                                <p className="Graph_FallbackLabel">No data to show at present</p>

                                {/* <BarChartComponent chartData={mockChartData}/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;