import React, {useState} from 'react';
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

const App = () => {
  const [ guests, setGuests] = useState([...guestsFromServer]);

  const sortGuests = () => {
    const copyGuest = [...guests];
    return copyGuest.sort((guestX, guestY) => (guestX.visit - guestY.visit) || (guestX.name.localeCompare(guestY.name)));
  }

  const addGuest = (newGuest) => {
    setGuests([...guests, newGuest]);
  };

  const visitGuest = (newGuestId) => {
    const copyGuest = guests.map(guest => {
            if (guest.id === newGuestId) {
              return {
                ...guest,
                visit: !guest.visit,
              };
            };
      
            return guest;
          });

    setGuests(copyGuest);
  };

  return (
    <div className={AppSCSS.App}>
      <h1>
        Guest List
      </h1>
      <AddGuest
        addGuest={addGuest}
      />
      <GuestList
        visitGuest={visitGuest}
        sortGuests={sortGuests}
      />
    </div>
  );
}

export default App;
