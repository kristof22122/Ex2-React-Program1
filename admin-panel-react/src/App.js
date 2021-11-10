import React from 'react';
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

class App extends React.Component {
  state = {
    users: [],
    updateUserInfoId: null,
    userName: '',
    userDepartment: '',
  };

  addUser = (newUser) => {
    const {
      users,
      updateUserInfoId,
    } = this.state;

    const {
      userName,
      userDepartment,
      dateOfChange,
    } = newUser;

    if (updateUserInfoId) {
      this.setState(() => {
        const {
          users,
        } = this.state;

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

        return {
          users: [...copyUsers],
          updateUserInfoId: null,
          userName: '',
          userDepartment: '',
        };
      });

      return;
    };

    this.setState(() => {
      setLocalStorageUsers([...users, newUser]);

      return {
        users: [...users, newUser],
        userName: '',
        userDepartment: '',
      };
    });
  };

  deleteUser = (userId) => {
    this.setState((currentState) => {
      const {
        users,
      } = currentState;

      const copyUsers = users.filter(user => user.id !== userId);

      setLocalStorageUsers(copyUsers);

      return {
        users: [...copyUsers],
      };
    });
  };

  updateUser = (user) => {
    const {
      userName,
      userDepartment,
      id,
    } = user;

    this.setState(() => ({
      updateUserInfoId: id,
      userName,
      userDepartment,
    }));
  };

  handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.setState(() => {
      return {
        users: [...localStorageUsers],
      };
    });
  };

  render() {
    const {
      userName,
      userDepartment,
      users,
    } = this.state;

    return (
    <div className="App">
      <h1>
        Admin Panel React
      </h1>
      <AdminPanelForm
        handleChange={this.handleChange}
        addUser={this.addUser}
        userName={userName}
        userDepartment={userDepartment}
      />
      <AdminPanelTable
        users={users}
        deleteUser={this.deleteUser}
        updateUser={this.updateUser}
      />
    </div>
    );
  }  
}

export default App;
