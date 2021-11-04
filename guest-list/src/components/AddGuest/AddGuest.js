import React from "react";
import AddGuestSCSS from'./AddGuest.module.scss';

export class AddGuest extends React.Component {
  render() {
    const {
      handleSubmit,
      handleChange,
      name,
      age,
      sex,
    } = this.props;
    return (
      <div
        className={AddGuestSCSS.AddGuest}
      >
        <h2>
          Add Guest
        </h2>
        <form
          className={AddGuestSCSS.AddGuest__form}
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            className={AddGuestSCSS.AddGuest__input}
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              handleChange(event);
            }}
            required
          />
          <input
            className={AddGuestSCSS.AddGuest__input}
            placeholder="Age"
            name="age"
            type="text"
            value={age}
            onChange={(event) => {
              handleChange(event);
            }}
            required
          />
          <select
            className={AddGuestSCSS.AddGuest__select}
            name="sex"
            value={sex}
            onChange={(event) => {
              handleChange(event);
            }}
          >
            <option
              value="m"
            >
              Male
            </option>
            <option
              value='f'
            >
              Female
            </option>
          </select>
          <button
            className={AddGuestSCSS.AddGuest__button}
            type="submit"
          >
            Add Guest
          </button>
        </form>
      </div>
      
    )
  }
}