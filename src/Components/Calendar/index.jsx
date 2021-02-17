import React, { Component } from 'react';
import CheckedDay from './CheckedDay';
import Month from './Month';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <CheckedDay date={date} />
        <Month date={date} />
      </div>
    );
  }
}

export default Calendar;
