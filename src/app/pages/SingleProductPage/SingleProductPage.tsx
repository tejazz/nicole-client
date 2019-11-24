import React, { PureComponent } from 'react';
import './SingleProductPage.scss';
import Header from '../../components/Header/Header';

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

                <div className="SingleProductPage">
                    Single Product Page
                </div>
            </div>
        );
    }
}

export default SingleProductPage;