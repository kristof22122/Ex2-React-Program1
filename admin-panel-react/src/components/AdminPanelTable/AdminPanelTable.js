import React from 'react';
import AdminPanelTableCSS from'./AdminPanelTable.module.css';

import { User } from '../User/User';

export class AdminPanelTable extends React.Component {
  state = {
    query: '',
  };

  search = (event) => {
    const {
      value,
    } = event.target;

    this.setState({
      query: value,
    });
  };

  getVisibleUsers = () => {
    const {
      query,
    } = this.state;

    const {
      users,
    } = this.props;

    let visibleUsers = [...users];

    if (query) {
      const lowerQuery = query.toLocaleLowerCase();

      visibleUsers = users
        .filter(user => user.userName.toLocaleLowerCase().includes(lowerQuery));
    };

    return visibleUsers;
  };

  render() {
    const {
      deleteUser,
      updateUser,
    } = this.props;

    const {
      query,
    } = this.state;

    const visibleUsers = this.getVisibleUsers();

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
            onChange={this.search}
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
            {visibleUsers.map(user => (
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
};
