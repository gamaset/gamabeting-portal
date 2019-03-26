import React, { Component } from 'react';
import { getEventsDetails } from '../../services/games';
import moment from 'moment';

import EventList from '../../components/event-list/event-list';
import Ticket from '../../components/ticket/ticket';

import './eventDetails.css';

type State = {
    events?: Array<any>,
    bet?: Array<any>
}

class EventsDetails extends Component <State> {

    constructor() {
        super();
        this.state = {
            betList: JSON.parse(localStorage.getItem('bets')) || []
        };
    }

    async loadEvents() {
        this.setState({ events: null });
        const params = this.props.match.params;
        const competition = params.competitionId;
        const event = params.eventId;
        
        const events = await getEventsDetails(competition, event);
        
        this.setState({ events });

        console.log('Events', events);
    }

    async setBetToList(events: any) {
        let betPos = null;
        const newList = this.state.betList.map((betItem, betItemIndex) => {
            if(betItem.eventId === events.eventId) { betPos = betItemIndex } 
            return betItem;
        });

        if(betPos === null) {
            newList.push(events)
        } else {
            newList.splice(betPos, 1, events)
        }

        await this.setState({ betList: newList });
        localStorage.setItem('bets', JSON.stringify(newList));
    }

    async removeBetFromList(betItemIndex: number) {
        const newList = this.state.betList.filter((events, betIndex) => betIndex !== betItemIndex);

        await this.setState({ betList: newList });
        localStorage.setItem('bets', JSON.stringify(newList));
    }

    async clear(elem: string, formId: string) {
        localStorage.clear();
        this.setState({betList: []});
        document.getElementById(elem).setAttribute('style', 'display: none');
        document.getElementById(formId).reset();
    }

    componentWillMount() {
        this.loadEvents();
    }

    render() {

        const { events } = this.state;

        return(
            <React.Fragment>
                
                { events &&
                    <div className="event-details--container">
                        <div className="event-details__name">{events.events[0].name} - {moment(events.events[0].openDate).format(`DD [de] MMMM`)}</div>
                        <div className="games__list">
                            <EventList events={events && events} getBet={bet => this.setBetToList(bet)}/>
                        </div>
                        <div className="ticket">
                            <Ticket bet={this.state.betList && this.state.betList} removeBet={betIndex => this.removeBetFromList(betIndex)} clear={(elem, formId) => this.clear(elem, formId)}/>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default EventsDetails;