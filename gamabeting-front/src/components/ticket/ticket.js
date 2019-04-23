import React, {Component} from 'react';
import CurrencyFormat from 'react-currency-format';
import { sendTicket } from '../../services/games';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './ticket.css';

type Props = {
    bet: Array<any>,
    removeBet: () => any,
    clear: () => any
}

type State ={
    oddValue: number,
    tipValue: number,
    name: string,
    betHash: string,
    error: string
}

class Ticket extends Component<Props, State> {

    constructor() {
        super();
        this.state = {
            oddValue: 0,
            tipValue: 0,
            name: "",
            taxId: ""
        };
        this.onChange = this.onChange.bind(this)
      }

      async sendTicket() {
            this.setState({hash: null, error: null})
            const sendData = {
                betValue: this.state.tipValue,
                taxId: this.state.taxId,
                events: this.props.bet

            };

        try{
            let response = await sendTicket(sendData);
            localStorage.clear();
            this.setState({hash: response.hashId});
            console.log('Response', response);

        }catch(err){
            this.setState({error: err.message});
            console.log('err: ' + JSON.stringify(err.message));
        }

      }

      async calculateAmount(oddValue, tipValue) {
          const totalAmount = oddValue * tipValue;
          return totalAmount;
      }

      onChange(e){
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           this.setState({taxId: e.target.value})
        }
     }

     showTicket() {
         document.getElementById("wrapper-ticket").setAttribute('style', 'display: block');
         document.getElementById("ticket-form").setAttribute('style', 'display: block');
         document.getElementsByTagName("body")[0].setAttribute('style', 'overflow: hidden');
     }

     hideTicket() {
        document.getElementById("wrapper-ticket").setAttribute('style', 'display: none');
        document.getElementById("ticket-form").setAttribute('style', 'display: none');
        document.getElementsByTagName("body")[0].setAttribute('style', 'overflow: auto');
     }

     closeModal() {
         document.getElementById("modal").setAttribute('style', 'display: none');
     }

    render() {
        let { oddValue, tipValue, hash, error } = this.state;

        return(
            <React.Fragment>
            {this.props.bet && this.props.bet.length > 0 &&
                <div className="ticket-popup__mobile" onClick={() => this.showTicket()}>
                    <span className="bet-count">{this.props.bet.length}</span>
                    <span className="bet-ticket-icon"><FontAwesomeIcon icon="file-invoice-dollar" /></span>
                </div>
            }
            <div id="wrapper-ticket">
            <form className="ticket__container" id="ticket-form">
                <div className="ticket__container--header">
                    Cupom de Apostas
                    <span className="close-mobile" onClick={() => this.hideTicket()}>X</span>
                </div>
                {
                    this.props.bet && this.props.bet.map((game, gameIndex) =>
                        
                        <div className="ticket__bet" key={gameIndex}>
                            <div className="ticket__bet--remove" onClick={() => this.props.removeBet(gameIndex)}>x</div>
                            <span className="ticket__bet--selected" name="description">{game.eventName} - <span className="ticket__bet--odd" name="odd">{game.market.price.odd}</span></span>
                            <span className="ticket__bet--market">{game.market.marketName}</span>
                            <span className="ticket__bet--event">{game.market.price.selectionName}</span>
                        </div>
                    )
                }
                {
                    this.props.bet && this.props.bet.length > 0 &&
                        <div className="bet__checkout">
                            <div className="ticket__container--header checkout">Aposta</div>
                            <div className="bet__checkout--value">
                                <span className="value__identifier">Identificador<input minLength="11" maxLength="11" placeholder="Identificador cliente" value={this.state.taxId} onChange={this.onChange}></input></span>
                                <div className="tip__container">
                                    <span className="value__multi">{oddValue = this.props.bet.reduce((acc, cur) => { return (acc * parseFloat(cur.market.price.odd)).toFixed(3)}, 1)} {() => this.setState({oddValue: oddValue})}  x</span>
                                    <CurrencyFormat 
                                        value={this.state.tipValue}
                                        decimalScale={2}
                                        fixedDecimalScale={true}
                                        decimalSeparator={"."}
                                        onValueChange={(values) => {
                                            const {formattedValue} = values;
                                            this.setState({tipValue: formattedValue})}}   
                                        />
                                    <span className="bet-return">Retornos <span className="bet-return--value">R$ {(oddValue * tipValue).toFixed(2)}</span></span>
                                </div>
                                <button type="button" disabled={this.props.bet.length <= 1  ? true : false} onClick={() => this.sendTicket()}>Enviar Palpite</button>
                            </div>
                        </div>
                }
                {
                hash && 
                <div className="hash-overlay">
                    <div className="hash__content" id="modal">
                        <div className="content--close" onClick={() => this.props.clear('modal', 'ticket-form')}>x</div>
                        <span className="content--subs">Informe o código abaixo ao seu operador</span>
                        <span className="content--hash">{hash}</span>
                    </div>
                </div>
                }
                {
                error &&
                <div className="hash-overlay">
                    <div className="hash__content" id="modal">
                        <div className="content--close" onClick={() => this.closeModal()}>x</div>
                        <span className="content--subs">Erro no envio do bilhete</span>
                        <span className="content--hash">{error}</span>
                    </div>
                </div>
                }
            </form>
            </div>
            </React.Fragment>
        )
    }

}

export default Ticket;