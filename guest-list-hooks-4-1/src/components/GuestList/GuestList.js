import React from "react";
import GuestListSCSS from './GuestList.module.scss';

export const GuestList = (props) => {
  const {
    visitGuest,
    guests,
  } = props;

  const sortGuests = () => {
    const copyGuest = [...guests];
    return copyGuest.sort((guestX, guestY) => (guestX.visit - guestY.visit) || (guestX.name.localeCompare(guestY.name)));
  }

  const sortedGuests = sortGuests();

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
          {sortedGuests.map(guest => {
            const {
              id,
              name,
              age,
              sex,
              visit,
            } = guest;

            return (
              <tr
                key={id}
              >
                <td
                  className={GuestListSCSS.td}
                >
                  {name}
                </td>
                <td
                  className={GuestListSCSS.td}
                >
                  {age}
                </td>
                <td
                  className={GuestListSCSS.td}
                >
                  {sex}
                </td>
                <td
                  className={GuestListSCSS.th}
                >
                  <label
                    htmlFor={`visit-${id}`}
                  >
                    Visit
                  </label>
                  <input
                    type="checkbox"
                    id={`visit-${id}`}
                    name={`visit-${id}`}
                    checked={visit}
                    onChange={() => visitGuest(id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
};
