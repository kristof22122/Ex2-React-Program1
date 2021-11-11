import React, { useState, useEffect } from 'react';
import './App.css';

import { AdminPanelTable } from './components/AdminPanelTable/AdminPanelTable';
import { AdminPanelForm } from './components/AdminPanelForm/AdminPanelForm';

// localStorage.clear();

const setLocalStorageUsers = (newLocalStorageUsers) => {
  try {
    const stringifyNewLocalStorageUsers = JSON.stringify(newLocalStorageUsers);
    localStorage.setItem('localStorageUsers', stringifyNewLocalStorageUsers);
  } catch(error) {
    console.log('Error set Local Storage!');
    console.log(error);
  }
}

const getLocalStorageUsers = () => {
  try {
    const retrievedObject = localStorage.getItem('localStorageUsers');
    const parseRetrievedObject = JSON.parse(retrievedObject);

    if (Array.isArray(parseRetrievedObject)) {
      return parseRetrievedObject;
    }

    return [];
  } catch(error) {
    console.log('Error get Local Storage!');
    console.log(error);
    return [];
  }
};

let localStorageUsers = getLocalStorageUsers();

const App = () => {
  const [ users, setUsers ] = useState([]);
  const [ updateUserInfoId, setUpdateUserInfoId ] = useState(null);
  const [ userName, setUserName ] = useState('');
  const [ userDepartment, setUserDepartment ] = useState('');


  const addUser = (newUser) => {
    const {
      userName,
      userDepartment,
      dateOfChange,
    } = newUser;

    if (updateUserInfoId) {
      const copyUsers = users.map(user => {
        const {
          id: userId,
          dateOfCreation: userDateOfCreation,
        } = user;

        if (userId === updateUserInfoId) {
          user = {
            id: userId,
            userName,
            userDepartment,
            dateOfCreation: userDateOfCreation,
            dateOfChange,
          }

          return user;
        };

        return user;
      });

      setLocalStorageUsers(copyUsers);

      setUsers([...copyUsers]);
      setUpdateUserInfoId(null);
      setUserName('');
      setUserDepartment('');

      return;
    };

    setLocalStorageUsers([...users, newUser]);

    setUsers([...users, newUser]);
    setUserName('');
    setUserDepartment('');
  };

  const deleteUser = (userId) => {

    const copyUsers = users.filter(user => user.id !== userId);

    setLocalStorageUsers(copyUsers);

    setUsers([...copyUsers]);
  };

  const updateUser = (user) => {
    const {
      userName,
      userDepartment,
      id,
    } = user;

    setUpdateUserInfoId(id);
    setUserDepartment(userDepartment);
    setUserName(userName);
  };

  const handleChange = (event) => {
    const {
      name,
    } = event.target;

    let {
      value,
    } = event.target;

    if (value === null) {
      value = '';
    };

    switch (name) {
      case 'userName':
        setUserName(value);
        break;

      case 'userDepartment':
        setUserDepartment(value);
        break;
    
      default:
        break;
    };
  };

  useEffect(() => {
    setUsers([...localStorageUsers]);
  }, []);

  return (
    <div className="App">
      <h1>
        Admin Panel React
      </h1>
      <AdminPanelForm
        handleChange={handleChange}
        addUser={addUser}
        userName={userName}
        userDepartment={userDepartment}
      />
      <AdminPanelTable
        users={users}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </div>
  );
};

export default App;
