import React from 'react';
import { Users } from './components/styles/Users';
import { User } from './components/User/User';
import { TelegramApp } from './components/styles/TelegramApp'; 

const users = [
  {
    id: 1,
    userName: 'Homer',
    lastMessage: {
      author: 'You',
      message: 'Hello! I am Homer',
      time: '10:52',
    },
    avatar: 'HomerSimpson.png',
    status: false,
  },
  {
    id: 2,
    userName: 'Bart',
    lastMessage: {
      author: 'You',
      message: 'Hello! I am Bart',
      time: '9:52',
    },
    avatar: 'BartSimpson.png',
    status: false,
  },
  {
    id: 3,
    userName: 'Marge',
    lastMessage: {
      author: 'Maggie',
      message: 'Hello Marge!',
      time: '11:52',
    },
    avatar: 'MargeSimpson.png',
    status: true,
  },
  {
    id: 4,
    userName: 'Lisa',
    lastMessage: {
      author: 'You',
      message: 'Hello! I am Lisa',
      time: '08:52',
    },
    avatar: 'LisaSimpson.png',
    status: false,
  },
  {
    id: 5,
    userName: 'Maggie',
    lastMessage: {
      author: 'You',
      message: 'Hello! I am Maggie',
      time: '15:52',
    },
    avatar: 'MaggieSimpson.png',
    status: true,
  },
]


function App() {
  return (
    <TelegramApp>
      <h1>
        Telegram App
      </h1>
      <Users>
        {users.map(user => (
          <User
            user={user}
            key={user.id}
          />
        ))}
      </Users>   
    </TelegramApp>
  );
}

export default App;
