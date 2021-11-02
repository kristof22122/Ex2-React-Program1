import React from 'react';
import AppCSS from'./App.module.css';

import { User } from './components/User/User';

const users = [
  {
    id: 1,
    userName: 'Bob',
    userDepartment: 'bookkeeping',
    DateOfCreation: '26 October 2021, 16:59',
    DateOfChange: '26 October 2021, 16:59',
  },
  {
    id: 2,
    userName: 'Jon',
    userDepartment: 'development',
    DateOfCreation: '26 October 2021, 16:59',
    DateOfChange: '26 October 2021, 16:59',
  },
  {
    id: 3,
    userName: 'Kate',
    userDepartment: 'management',
    DateOfCreation: '26 October 2021, 16:59',
    DateOfChange: '26 October 2021, 16:59',
  },

];

function App() {
  return (
    <div className={AppCSS.App}>
      <h1>
        Admin Panel Table
      </h1>
      <table 
        className={AppCSS.table}
      >
        <thead
          className={AppCSS.thead}
        >
          <tr>
            <th
              className={AppCSS.th}
            >
              User Name
            </th>
            <th
              className={AppCSS.th}
            >
              Department
            </th>
            <th
              className={AppCSS.th}
            >
              Date of creation
            </th>
            <th
              className={AppCSS.th}
            >
              Date of change
            </th>
            <th
              className={AppCSS.th}
            >
              Update
            </th>
            <th
              className={AppCSS.th}
            >
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr
              key={user.id}
            >
              <User user={user} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
