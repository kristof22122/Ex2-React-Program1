import React, { useState, useEffect, useCallback } from 'react';
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
  const [ updateUserInfo, setUpdateUserInfo ] = useState(null);

  const addUser = useCallback((userName, userDepartment) => {
    const id = +new Date();
    const dateCreate = new Date().toString();

    const newUser = {
      id,
      userName,
      userDepartment,
      dateOfCreation: dateCreate,
      dateOfChange: dateCreate,
    };

    const updateStates = (valueForUserState) => {
      setLocalStorageUsers(valueForUserState);
      setUsers(valueForUserState);
    }

    if (updateUserInfo !== null) {
      const copyUsers = users.map(user => {
        const {
          id: userId,
          dateOfCreation: userDateOfCreation,
        } = user;

        if (userId === updateUserInfo.id) {
          return {
            id: userId,
            userName,
            userDepartment,
            dateOfCreation: userDateOfCreation,
            dateOfChange: dateCreate,
          };
        };

        return user;
      });
      
      updateStates([...copyUsers]);

      setUpdateUserInfo(null);
      return;
    };

    updateStates([...users, newUser]);
  }, [updateUserInfo, users]);

  const deleteUser = useCallback((userId) => {

    const copyUsers = users.filter(user => user.id !== userId);

    setLocalStorageUsers(copyUsers);

    setUsers([...copyUsers]);
  }, [users]) ;

  const updateUser = useCallback((user) => {
    setUpdateUserInfo(user);
  }, []);

  useEffect(() => {
    setUsers([...localStorageUsers]);
  }, []);

  return (
    <div className="App">
      <h1>
        Admin Panel React
      </h1>
      <AdminPanelForm
        addUser={addUser}
        updateUserInfo={updateUserInfo}
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
