import React from 'react';
import AppSCSS from './App.module.scss';

import { AddGuest } from './components/AddGuest';
import { GuestList } from './components/GuestList';

const guestsFromServer = [
  {
    id: 1,
    name: 'Jon',
    sex: 'm',
    age: 25,
    visit: true,
  },
  {
    id: 2,
    name: 'Bob',
    sex: 'm',
    age: 20,
    visit: false,
  },
  {
    id: 3,
    name: 'Kate',
    sex: 'f',
    age: 23,
    visit: true,
  },
];

class App extends React.Component {
  state = {
    guests: guestsFromServer,
    name: '',
    sex: 'm',
    age: '',
    visit: false,
  };

  sortGuests = (guestList) => {
    return guestList.sort((guestX, guestY) => guestX.name.localeCompare(guestY.name))
    .sort((guestX, guestY) => guestX.visit - guestY.visit);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const id = +new Date();

    this.setState(currentState => {
      const {
        name,
        sex,
        age,
        guests,
      } = currentState;

      return {
        guests: [...guests, {
          id,
          name,
          sex,
          age: +age,
          visit: false,
        }],
        name: '',
        sex: 'm',
        age: '',
      }
    });
  };

  visitGuest = (event, newGuest) => {
    this.setState((currentState) => {
      const { guests } = currentState;

      return {
        guests: guests.map(guest => {
          if (guest === newGuest) {
            return {
              ...guest,
              visit: event.target.checked,
            };
          };
    
          return guest;
        }),
      }
    });
  };

  handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name,
      sex,
      age,
      guests,
    } = this.state;

    this.sortGuests(guests);

    return (
      <div className={AppSCSS.App}>
        <h1>
          Guest List
        </h1>
        <AddGuest 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={name}
          age={age}
          sex={sex}
        />
        <GuestList
          guests={guests}
          visitGuest={this.visitGuest}
        />
      </div>
    );
  }  
}

export default App;
