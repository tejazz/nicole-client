import React, { PureComponent } from 'react';
import './ProductListPage.scss';
import Header from '../../components/Header/Header';
import Select from '../../../assets/images/select.svg';
import Button from '../../components/Button/Button';
import { ProductListCard } from './ProductListCard';
import { ToggleItem } from './ToggleItem';
import { ToggleItemOptions } from './Constants';

interface ProductListProps {
    history: any;   // to-dp: define proper types
}

interface ProductListState {
    currentRoute: string;
    siteFilter: {
        amzin: boolean;
        amzgl: boolean;
        flpkt: boolean;
    },
    priceFilter: {
        lessThan10000: boolean;
        lessThan30001: boolean;
        moreThan30001: boolean;
    },
    displayFilter: boolean;
}

// default Price filter state
const initialPriceFilterState = {
    lessThan10000: false,
    lessThan30001: false,
    moreThan30001: false,
}

class ProductListPage extends PureComponent<ProductListProps, ProductListState> {
    constructor(props: ProductListProps) {
        super(props);

        this.state = {
            currentRoute: "List",
            siteFilter: {
                amzin: false,
                amzgl: false,
                flpkt: false,
            },
            priceFilter: {
                lessThan10000: false,
                lessThan30001: false,
                moreThan30001: false,
            },
            displayFilter: false,
        };
    }

    handleFilterChange = (filterType: string, filterSubType: string) => {
        if (filterType === "Price") {
            this.setState({
                priceFilter: {
                    ...initialPriceFilterState,
                    [filterSubType]: !this.state.priceFilter[filterSubType]
                },
            });
        } else {
            this.setState({
                siteFilter: {
                    ...this.state.siteFilter,
                    [filterSubType]: !this.state.siteFilter[filterSubType]
                }
            });
        }
    }

    renderFilterOptions = () => {
        this.setState({
            displayFilter: !this.state.displayFilter
        });
    }

    render() {
        console.log(this.state);

        const renderSiteToggleItems = (
            ToggleItemOptions.Site.map((item) => (
                <ToggleItem
                    Label={item.Label}
                    FilterType={item.FilterType}
                    FilterSubType={item.FilterSubType}
                    FilterTypeValue={this.state.siteFilter[item.FilterSubType]}
                    handleFilterChange={this.handleFilterChange}
                />
            ))
        );

        const renderPriceToggleItems = (
            ToggleItemOptions.Price.map((item) => (
                <ToggleItem
                    Label={item.Label}
                    FilterType={item.FilterType}
                    FilterSubType={item.FilterSubType}
                    FilterTypeValue={this.state.priceFilter[item.FilterSubType]}
                    handleFilterChange={this.handleFilterChange}
                />
            ))
        );

        return (
            <div className="ProductsListPage">
                <Header
                    currentRoute={this.state.currentRoute}
                    history={this.props.history}
                />

                <div className="ProductsListContainer">
                    <div className="FilterSection">
                        <input
                            type="text"
                            placeholder="Find Your Product Here"
                            className="FilterSection_Input"
                            onChange={() => { }}
                        />

                        <Button
                            label={"Filter Options"}
                            componentClass="Button"
                            customClass="FilterButton"
                            action={this.renderFilterOptions}
                        />

                        {/* multiple select allowed */}
                        <div
                            className={`FilterSection_Switches ${(this.state.displayFilter) ? "FilterSection_Switches--Show" : "FilterSection_Switches--Hide"}`}
                        >
                            <div className="SiteSwitch">
                                <p className="SiteSwitch_Label">Sites</p>

                                {renderSiteToggleItems}
                            </div>

                            {/* only single select allowed */}
                            <div className="PriceSwitch">
                                <p className="PriceSwitch_Label">Price Range</p>

                                {renderPriceToggleItems}
                            </div>
                        </div>
                    </div>

                    <div className="ListSection">
                        <ProductListCard />
                        <ProductListCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductListPage;