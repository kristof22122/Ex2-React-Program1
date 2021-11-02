import React from 'react';
import './App.css';
import { Users } from './components/styles/Users';
import { User } from './components/User/User';

const users = [
  {
    id: 1,
    userName: 'Homer',
    lastMessage: 'Hello! I am Homer',
    avatar: 'HomerSimpson.png',
    status: false,
  },
  {
    id: 2,
    userName: 'Bart',
    lastMessage: 'Hello! I am Bart',
    avatar: 'BartSimpson.png',
    status: false,
  },
  {
    id: 3,
    userName: 'Marge',
    lastMessage: 'Hello! I am Marge',
    avatar: 'MargeSimpson.png',
    status: true,
  },
  {
    id: 4,
    userName: 'Lisa',
    lastMessage: 'Hello! I am Lisa',
    avatar: 'LisaSimpson.png',
    status: false,
  },
  {
    id: 5,
    userName: 'Maggie',
    lastMessage: 'Hello! I am Maggie',
    avatar: 'MaggieSimpson.png',
    status: false,
  },
]


function App() {
  return (
    <div className="App">
      <h1>
        Telegram App
      </h1>
      <Users>
        {users.map(user => (
          <li
            key={user.id}
          >
            <User user={user} />
          </li>
        ))}
      </Users>      
    </div>
  );
}

export default App;
