import React, { StatelessComponent } from 'react';
import DefaultProduct from '../../../assets/images/default-product.svg';
import Button from '../../components/Button/Button';
import './ProductListCard.scss';

export const ProductListCard: StatelessComponent<{}> = () => {
    return (
        <div className="ProductListCard">
            <div className="ProductListCard__Image">
                <img
                    src={DefaultProduct}
                    alt="default-product"
                    className="ImageItem"
                />
            </div>

            <div className="ProductListCard__Details">
                <p className="ProductLabel ProductLabel--Title">Product Title</p>
                <p className="ProductLabel ProductLabel--Site">axxmaz.in</p>
                <p className="ProductLabel ProductLabel--Date">Created on: <span className="ProductLabel--DateValue">2019-11-24 08:00:14</span></p>

                <div className="ProductLabel--PriceTag">
                    <p className="GrowthTrend">Trend</p>
                    <p className="CurrencyTag">RS</p>
                    <p className="CurrencyValue">99,000</p>
                </div>
            </div>

            <div className="ProductListCard__Actions">
                <Button
                    label={"Purchase"}
                    componentClass="Button"
                    action={() => { }}
                />

                <Button
                    label={"Remove"}
                    componentClass="Button Button--Inactive"
                    action={() => { }}
                />
            </div>
        </div>
    );
}