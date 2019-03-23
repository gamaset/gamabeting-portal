import React, { Component } from 'rect';

import './top-menu.css';

class TopMenu extends Component<any> {

    render() {

        return (
            <div className="top-menu">
                <div id="top-menu__content">
                    <ul className="top-menu__content--list">
                        {menuItems.map(({ urlLink, itemName, iconName }, i) => (
                            <li
                            className="list--item"
                            key={i}
                            >
                            <Link className="list--item__link" to={urlLink}>
                                <FontAwesomeIcon className="list--item__link--icon" icon={iconName} />
                                {itemName}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="link" />
            </div>
        )
    }

}