import React, { PureComponent } from 'react';
import './SingleProductPage.scss';
import Header from '../../components/Header/Header';
import DefaultProduct from '../../../assets/images/default-product.svg';
import { LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ReferenceLine, AreaChart, Area } from 'recharts';
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

        const mockData = [
            { label: '2019-11-25', price: 12 },
            { label: '2019-11-26', price: 20000 },
            { label: '2019-11-27', price: 1233 },
            { label: '2019-11-29', price: 9000 },
            { label: '2019-11-30', price: 23000 },
            { label: '2019-12-10', price: 11220 },
            { label: '2019-12-11', price: 10 },
            { label: '2019-12-13', price: 92 },
            { label: '2019-11-15', price: 356 },
        ]

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
                        <p className="Statistics_Title">Price Trend (RS)</p>

                        <div className="Statistics_Graph">
                            {(mockData.length > 0) ? (
                                <ResponsiveContainer width="100%">
                                    <AreaChart height={500} data={mockData}
                                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="label" />
                                        <YAxis />
                                        <Tooltip />
                                        <ReferenceLine y={10000} stroke="red" strokeDasharray="3 3" />
                                        <Legend />
                                        <Area type="monotone" dataKey="price" stroke="black" strokeWidth={3} fillOpacity={0.3} fill="black" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            ) : (
                                    <p className="Statistics_DefaultMessage">No data records currently present</p>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleProductPage;