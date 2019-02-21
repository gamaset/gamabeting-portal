import React, {Component} from 'react';

import './header.css';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="header__grid-content">
                    <div className="header__grid-content--left">
                        <p className="title">betWin</p>
                    </div>
                    <div className="header__grid-content--right">
                        <div className="login">
                            <form>
                                <input type="text" placeholder="Usuário"></input>
                                <input type="password" placeholder="Senha"></input>
                                <button>Entrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;