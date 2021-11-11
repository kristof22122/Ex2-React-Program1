import React from 'react';
import UserCSS from './User.module.css';

export const User = (props) => {
  const {
    id,
    userName,
    userDepartment,
    dateOfCreation,
    dateOfChange,
  } = props.user;

  const {
    deleteUser,
    updateUser,
  } = props;

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
};
