import React, { FunctionComponent } from 'react';
import './AboutPage.scss';
import Header from '../../components/Header/Header';

interface AboutProps {
    history: any;       // to-do: add proper type definition
};

const AboutPage: FunctionComponent<AboutProps> = (props) => {
    return (
        <div className="AboutPage">
            <Header
                history={props.history}
                currentRoute="About"
            />

            <div className="AboutContainer">
                <div className="AboutCard">
                    <p className="AboutCard__Title">What is Nicole?</p>
                    <p className="AboutCard__Details">
                        Have you ever seen a product on one of your beloved e-commerce paltforms and wondered if there was a simpler way you could track the price of that product and be notified about the price changes for free?
                        <br /><br />
                        Nicole is here to help you out. It is built for this very purpose. It will track, update and notify you on any changes - hassle-free.
                        <br /><br />
                        Give it the URL of the product you want to be tracked. Mention a budget in case you feel the weight of the long impending month-end round the corner and simply lay back. It would take care of the rest.
                        <br /><br />
                        Don't see the e-commerce site of your choice listed? Don't worry. Check the next section for contributions. Submit your feedback and Nicole will try to get your beloved site indexed at the earliest.
                        <br /><br />
                        Time to take Nicole out for a spin.
                    </p>
                </div>

                <div className="AboutCard">
                    <p className="AboutCard__Title">Learn More or Contribute</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;