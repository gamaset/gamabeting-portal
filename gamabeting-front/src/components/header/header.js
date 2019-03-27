import React, {Component} from 'react';

import './header.css';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="header__grid-content">
                    <div className="header__grid-content--left">
                        <p className="title">CRBets</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;