import React, { Component } from 'react';

import './date-filter.css';

type Props = {
    changeDate: () => any
}

const periodOptions = [
    {
        period: "TODAY",
        name: "Hoje"
    },
    {
        period: "TOMORROW",
        name: "Amanhã"
    },
    {
        period: "NEXT_3_DAYS",
        name: "3 dias"
    }
]

class DateFilter extends Component<Props, any> {
    constructor() {
        super();
        this.state = {
          active: "TODAY"
        };
      }

    active(name: string) {
        this.setState({
          active: name
        });
      }

    render() {

        return (
            <div className="period-filter">
                <ul className="period-filter__items">
                {
                    periodOptions.map(({period, name}, i) => (
                        <li className={this.state.active === period ? "item active" : "item"} onClick={() => {this.props.changeDate(period); this.active(period) }}>{name}</li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

export default DateFilter;