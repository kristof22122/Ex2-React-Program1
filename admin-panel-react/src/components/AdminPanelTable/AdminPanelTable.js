import React from 'react';
import AdminPanelTableCSS from'./AdminPanelTable.module.css';

import { User } from '../User/User';

export class AdminPanelTable extends React.Component {
  render() {
    const {
      users,
      deleteUser,
      updateUser,
      query,
      handleChange,
    } = this.props;

    return (
      <div className={AdminPanelTableCSS.App}>
        <h2>
          Admin Panel Table
        </h2>
        <div className={AdminPanelTableCSS.inputWrapper}>
          <input
            type="text"
            id="query"
            name="query"
            className={AdminPanelTableCSS.input}
            placeholder="Search"
            value={query}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </div>
        <table 
          className={AdminPanelTableCSS.table}
        >
          <thead
            className={AdminPanelTableCSS.thead}
          >
            <tr>
              <th
                className={AdminPanelTableCSS.th}
              >
                User Name
              </th>
              <th
                className={AdminPanelTableCSS.th}
              >
                Department
              </th>
              <th
                className={AdminPanelTableCSS.th}
              >
                Date of creation
              </th>
              <th
                className={AdminPanelTableCSS.th}
              >
                Date of change
              </th>
              <th
                className={AdminPanelTableCSS.th}
              >
                Update
              </th>
              <th
                className={AdminPanelTableCSS.th}
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
                <User
                  user={user}
                  deleteUser={deleteUser}
                  updateUser={updateUser}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
