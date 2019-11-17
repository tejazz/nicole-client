import React, { StatelessComponent } from 'react';
import './Header.scss';
import ProfileIcon from '../../../assets/images/profile.svg';
import AboutIcon from '../../../assets/images/about.svg';
import SignoutIcon from '../../../assets/images/signout.svg';
import ListIcon from '../../../assets/images/list.svg';

const Header: StatelessComponent<{}> = () => {
    return (
        <div className="Header">
            <p className="Header_Logo">NICOLE</p>

            <div className="Header_Navigation">
                <img
                    src={ListIcon}
                    className="IconImg"
                />
                <img
                    src={ProfileIcon}
                    className="IconImg"
                />
                <img
                    src={AboutIcon}
                    className="IconImg"
                />
                <img
                    src={SignoutIcon}
                    className="IconImg"
                />
            </div>
        </div>
    );
}

export default Header;