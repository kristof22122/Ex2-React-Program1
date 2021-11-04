import React from "react";
import GuestListSCSS from './GuestList.module.scss';

export class GuestList extends React.Component {
  render() {
    const { guests, visitGuest } = this.props;

    return (
      <>
        <h2>
          Guest Table
        </h2>
        <table
          className={GuestListSCSS.table}
        >
          <thead
            className={GuestListSCSS.thead}
          >
            <tr>
              <th
                className={GuestListSCSS.th}
              >
                Name
              </th>
              <th
                className={GuestListSCSS.th}
              >
                Age
              </th>
              <th
                className={GuestListSCSS.th}
              >
                Sex
              </th>
              <th
                className={GuestListSCSS.th}
              >
                Visit
              </th>
            </tr>
          </thead>
          <tbody>
            {guests.map(guest => (
              <tr
                key={guest.id}
              >
                <td
                  className={GuestListSCSS.td}
                >
                  {guest.name}
                </td>
                <td
                  className={GuestListSCSS.td}
                >
                  {guest.age}
                </td>
                <td
                  className={GuestListSCSS.td}
                >
                  {guest.sex}
                </td>
                <td
                  className={GuestListSCSS.th}
                >
                  <label
                    htmlFor={`visit-${guest.id}`}
                  >
                    Visit
                  </label>
                  <input
                    type="checkbox"
                    id={`visit-${guest.id}`}
                    name={`visit-${guest.id}`}
                    checked={guest.visit}
                    onChange={(e) => visitGuest(e, guest)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
      
    )
  } 
}
