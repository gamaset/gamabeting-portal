import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getSideBar } from '../../services/games';
import history from "../../services/history";

import './menu.css';

type MenuItems = {
    urlLink: string,
    itemName: string
}

type State = {
    menuItems?: Array<any>
}


class Menu extends Component <any, State> {

    constructor() {
        super();
        this.state = {
            active: ""
        };
    }

    async loadMenuOptions() {
        this.setState({ menuItems: null });
        const menuItems = await getSideBar();
        this.setState({ menuItems: menuItems });
    } 

    async active(name: string) {
        await this.setState({
          active: name
        });
      }

    componentWillMount() {
        // this.loadMenuOptions();
    }

    render() {

        const { menuItems } = this.state;
        
        return (
            <div className="side-menu">
                <div id="menu__content">
                    <ul className="menu__content--list">
                    {menuItems && menuItems.map((options, i) => 
                        <li key={i} className={this.state.active === options.eventType.name ? "list--item active" : "list--item"} onClick={() => this.active(options.eventType.name)}>
                            {options.eventType.name}
                            <div className="list--item__subItems">
                                { options.children.map((subOptions, subIndex) => 
                                    <Link className="list--item__link" to="/teste" key={subIndex}>{subOptions.name}</Link>
                                )}
                            </div>
                            
                            
                        </li>
                    )}
                    </ul>
                </div>
                <div id="link" />
            </div>
        )
    }
}

export default Menu;