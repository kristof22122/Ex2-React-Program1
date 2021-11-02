import React from 'react';
import UserCSS from './User.module.css';

export const User = (props) => {
  const {
    userName,
    userDepartment,
    DateOfCreation,
    DateOfChange,
  } = props.user;

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
          {DateOfCreation}
      </td>
      <td
        className={UserCSS.td}
      >
        {DateOfChange}
      </td>
      <td
        className={UserCSS.td}
      >
        <button
          type="button"
          className={UserCSS.userButton}
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
        >
          delete
        </button>
      </td>
    </>
  );
};
