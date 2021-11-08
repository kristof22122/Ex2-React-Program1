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
  };

  sortGuests = () => {
    const { guests } = this.state;
    const copyGuest = [...guests];    
    return copyGuest.sort((guestX, guestY) => (guestX.visit - guestY.visit) || (guestX.name.localeCompare(guestY.name)));
  }

  addGuest = (newGuest) => {
    this.setState((currentState) => {
      const { guests } = currentState;

      return {
        guests: [...guests, newGuest],
      }
    });
  };

  visitGuest = (newGuestId) => {
    this.setState((currentState) => {
      const { guests } = currentState;

      return {
        guests: guests.map(guest => {
          if (guest.id === newGuestId) {
            return {
              ...guest,
              visit: !guest.visit,
            };
          };
    
          return guest;
        }),
      }
    });
  };

  render() {
    const sortGuests = this.sortGuests();

    return (
      <div className={AppSCSS.App}>
        <h1>
          Guest List
        </h1>
        <AddGuest
          addGuest={this.addGuest}
        />
        <GuestList
          guests={sortGuests}
          visitGuest={this.visitGuest}
        />
      </div>
    );
  }  
}

export default App;
