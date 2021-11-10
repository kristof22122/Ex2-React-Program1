import React from 'react';
import UserCSS from './User.module.css';

export class User extends React.Component {
  render() {
    const {
      id,
      userName,
      userDepartment,
      dateOfCreation,
      dateOfChange,
    } = this.props.user;

    const {
      deleteUser,
      updateUser,
    } = this.props;

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
              updateUser({
                id,
                userName,
                userDepartment,
              });
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
              deleteUser(id);
            }}
          >
            delete
          </button>
        </td>
      </>
    );
  }  
};
