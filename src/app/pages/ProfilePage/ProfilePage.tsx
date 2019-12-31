import React, { PureComponent } from 'react';
import './ProfilePage.scss';
import Header from '../../components/Header/Header';
import ProfileImage from '../../../assets/images/profile.svg';

interface ProfileProps {
    history: any;       // to-do: add proper type definition
}

class ProfilePage extends PureComponent<ProfileProps, {}> {
    render() {
        return (
            <div className="ProfilePage">
                <Header
                    currentRoute='Profile'
                    history={this.props.history}
                />

                <div className="ProfileContainer">
                    <div className="ProfileAccount">
                        <div className="ProfileAccount__ImgContainer">
                            <img
                                src={ProfileImage}
                                className="ProfileAccount__Img"
                                alt="Profile"
                            />
                        </div>

                        <div className="AccountDetails">
                            <p className="AccountDetails__Title">Account Details</p>

                            <div className="SingleText">
                                <p className="SingleText__Label">Name:</p>
                                <p className="SingleText__Value">Tarique Ejaz</p>
                            </div>

                            <div className="SingleText">
                                <p className="SingleText__Label">Email:</p>
                                <p className="SingleText__Value">tariqueejaz.93102@gmail.com</p>
                            </div>

                            <div className="SingleText">
                                <p className="SingleText__Label">Member Since:</p>
                                <p className="SingleText__Value">31/12/2019 21:00:25</p>
                            </div>
                        </div>
                    </div>

                    <div className="ProfileStatistics">
                        <div className="StatisticsCard">
                            <p className="StatisticsCard__Title">Tracking/Tracked Products</p>

                            <p className="StatisticsCard__NoProductsMessage">No Products Added</p>

                            <div className="TrackCard">
                                <p className="TrackCard__ProductName">Product Name</p>
                                <p className="TrackCard__GeneralCaption"><span className="TrackCard__Bold">Current Price:</span> Rs 99000</p>
                                <p className="TrackCard__GeneralCaption"><span className="TrackCard__Bold">Status:</span> Active</p>
                            </div>

                            <div className="TrackCard">
                                <p className="TrackCard__ProductName">Product Name</p>
                                <p className="TrackCard__GeneralCaption"><span className="TrackCard__Bold">Current Price:</span> Rs 99000</p>
                                <p className="TrackCard__GeneralCaption"><span className="TrackCard__Bold">Status:</span> Active</p>
                            </div>

                            <div className="TrackCard">
                                <p className="TrackCard__ProductName">Product Name</p>
                                <p className="TrackCard__GeneralCaption"><span className="TrackCard__Bold">Current Price:</span> Rs 99000</p>
                                <p className="TrackCard__GeneralCaption"><span className="TrackCard__Bold">Status:</span> Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;