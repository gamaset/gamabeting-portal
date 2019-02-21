import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import history from "../../services/history";

import './menu.css';

type MenuItems = {
    urlLink: string,
    itemName: string
}

const menuItems: MenuItems[] = [
    {
       urlLink: "/ao-vivo",
       itemName: "Ao Vivo",
       iconName: "video"
    },
    {
        urlLink: "/futebol",
        itemName: "Futebol",
        iconName: "futbol"
    },
    {
        urlLink: "/futsal",
        itemName: "Futsal",
        iconName: "futbol"
    },
    {
        urlLink: "/nba",
        itemName: "NBA",
        iconName: "basketball-ball"
    }
]

class Menu extends Component <any, State> {

    render() {
        
        return (
            <div className="side-menu">
                <div id="menu__content">
                    <ul className="menu__content--list">
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

export default Menu;