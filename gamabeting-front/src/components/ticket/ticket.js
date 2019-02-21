import React, {Component} from 'react';

import { brlFormatter } from '../../commons/formatter';

import './ticket.css';

type Props = {
    bet: Array<any>,
    removeBet: () => any
}


class Ticket extends Component<Props> {

    render() {

        return(
            <div className="ticket__container">
                <div className="ticket__container--header">
                    Cupom de Apostas 
                </div>
                {
                    this.props.bet.map((game, gameIndex) =>
                        
                        <div className="ticket__bet">
                            <div className="ticket__bet--remove" onClick={() => this.props.removeBet(gameIndex)}>x</div>
                            <span className="ticket__bet--selected">{game.bet.value} - <span className="ticket__bet--odd">{game.bet.odd}</span></span>
                            <span className="ticket__bet--market">{game.bet.type}</span>
                            <span className="ticket__bet--event">{game.name}</span>
                        </div>
                    )
                }
                <div className="bet__checkout">
                <div className="ticket__container--header checkout" onClick={() => this.productTest()}>Aposta</div>
                <div className="bet__checkout--value">
                    <span className="value__multi">{this.props.bet.reduce((acc, cur) => acc * cur.bet.odd, 0)} x</span>
                    <input type="text" placeholder="Valor aposta"></input><span className="bet-return">Retornos <span className="bet-return--value">{brlFormatter.format(23000)}</span></span>
                </div>
                </div>
            </div>
        )
    }

}

export default Ticket;