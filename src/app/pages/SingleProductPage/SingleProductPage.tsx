import React, { PureComponent } from 'react';
import './SingleProductPage.scss';
import Header from '../../components/Header/Header';
import DefaultProduct from '../../../assets/images/default-product.svg';
import { LineChart } from 'recharts';
import Button from '../../components/Button/Button';

interface SingleProductProps {
    history: any;   // to-do: define proper types
};

interface SingleProductState {
    currentRoute: string;
}

class SingleProductPage extends PureComponent<SingleProductProps, SingleProductState> {
    constructor(props) {
        super(props);

        this.state = {
            currentRoute: "SingleProduct"
        }
    }

    render() {
        return (
            <div className="SingleProductPage">
                <Header
                    history={this.props.history}
                    currentRoute={this.state.currentRoute}
                />

                <div className="SingleProductPageContainer">
                    <div className="ProductDetails">
                        <div className="ProductDetails_Image">
                            <img
                                src={DefaultProduct}
                                alt="single-product"
                                className="SingleProductImage"
                            />
                        </div>

                        <div className="ProductDetails_Info">
                            <div className="InfoLabel">
                                <p className="InfoLabel_Title">Product Name</p>
                            </div>

                            <div className="InfoLabel">
                                <p className="InfoLabel_Title InfoLabel_Title--Secondary">amazon.in</p>
                            </div>

                            <div className="InfoLabel">
                                <p className="InfoLabel_Title">Created on:</p>
                                <p className="InfoLabel_Title InfoLabel_Title--Secondary">2019-11-25 12:00:00</p>
                            </div>

                            <div className="InfoLabel">
                                <p className="InfoLabel_Title">Updated on:</p>
                                <p className="InfoLabel_Title InfoLabel_Title--Secondary">2019-11-25 12:00:00</p>
                            </div>

                            <div className="InfoLabel">
                                <p className="InfoLabel--GrowthTrend">20%</p>
                            </div>

                            <div className="InfoLabel">
                                <p className="InfoLabel_Title">RS</p>
                                <p className="InfoLabel_Title InfoLabel_Title--Price">99,000</p>
                            </div>

                            <div className="InfoLabel">
                                <p className="InfoLabel_Title InfoLabel_Title--Secondary InfoLabel_Title--Separation">The product has been showing promise, in terms of price drop, and might continue to show this trend in the coming time.</p>
                            </div>

                            <div className="ProductButtons">
                                <Button
                                    label="Purchase"
                                    componentClass="Button"
                                    action={() => { }}
                                />

                                <Button
                                    label="Remove"
                                    componentClass="Button"
                                    action={() => { }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="Statistics">
                        <p className="Statistics_Title">Price Trend</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleProductPage;