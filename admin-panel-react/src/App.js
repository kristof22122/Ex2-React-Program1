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
    updateUserInfo: {},
    userName: '',
    userDepartment: '',
    query: '',
  };

  timeFormat = (time) => {
    if (time < 10) {
      return `0${time}`;
    } 
    return `${time}`;
  };
  
  dateBuilder = (currentDate) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    const day = days[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hr = currentDate.getHours();
    const min = currentDate.getMinutes();
    const hours = this.timeFormat(hr);
    const minutes = this.timeFormat(min);
  
    return `${day}, ${date} ${month} ${year}, ${hours}:${minutes}`;
  };

  getVisibleUsers = () => {
    const {
      query,
      users,
    } = this.state;

    let visibleUsers = [...users];

    if (query) {
      const lowerQuery = query.toLocaleLowerCase();

      visibleUsers = users
        .filter(user => user.userName.toLocaleLowerCase().includes(lowerQuery));
    }

    return visibleUsers;
  };

  addUser = (newUser) => {
    const {
      users,
    } = this.state;

    const {
      id: updateUserInfoId
    } = this.state.updateUserInfo;

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
          updateUserInfo: {},
        };
      });

      return;
    };

    this.setState(() => {
      setLocalStorageUsers([...users, newUser]);

      return {
        users: [...users, newUser],
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
      userDepartment
    } = user;

    this.setState(() => ({
      updateUserInfo: user,
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

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      userName,
      userDepartment,
    } = this.state;

    const id = +new Date();
    const dateCreate = this.dateBuilder(new Date())    

    const newUser = {
      id,
      userName,
      userDepartment,
      dateOfCreation: dateCreate,
      dateOfChange: dateCreate,
    };
    
    this.addUser(newUser);

    this.setState(() => {  
      return {
        userName: '',
        userDepartment: '',
      };
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
      updateUserInfo,
      userName,
      userDepartment,
      query,
    } = this.state;

    const visibleUsers = this.getVisibleUsers();

    return (
    <div className="App">
      <h1>
        Admin Panel React
      </h1>
      <AdminPanelForm
        updateUserInfo={updateUserInfo}
        dateBuilder={this.dateBuilder}
        addUser={this.addUser}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        userName={userName}
        userDepartment={userDepartment}
      />
      <AdminPanelTable
       users={visibleUsers}
       deleteUser={this.deleteUser}
       updateUser={this.updateUser}
       handleChange={this.handleChange}
       query={query}
      />
    </div>
    );
  }  
}

export default App;
