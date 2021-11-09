import React from 'react';
import UserCSS from './User.module.css';

export class User extends React.Component {

  delete = (userId) => {
    const {
      deleteUser,
    } = this.props;

    deleteUser(userId);
  };

  update = (userId, userName, userDepartment) => {
    const {
      updateUser,
    } = this.props;

    const userForUpdate = {
      id: userId,
      userName,
      userDepartment,
    };

    updateUser(userForUpdate);
  };



  render() {
    const {
      id,
      userName,
      userDepartment,
      dateOfCreation,
      dateOfChange,
    } = this.props.user;

    return (
      <>
        <td
          className={UserCSS.td}
        >
          {userName}
        </td>
        <td
          className={UserCSS.td}
        >
          {userDepartment}
        </td>
        <td
          className={UserCSS.td}
        >
          {dateOfCreation}
        </td>
        <td
          className={UserCSS.td}
        >
          {dateOfChange}
        </td>
        <td
          className={UserCSS.td}
        >
          <button
            type="button"
            className={UserCSS.userButton}
            onClick={() => {
              this.update(id, userName, userDepartment);
            }}
          >
            Update
          </button>
        </td>
        <td
          className={UserCSS.td}
        >
          <button
            type="button"
            className={UserCSS.userButton}
            onClick={() => {
              this.delete(id);
            }}
          >
            delete
          </button>
        </td>
      </>
    );
  }  
};
