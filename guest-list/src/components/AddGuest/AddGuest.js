import React from "react";
import AddGuestSCSS from'./AddGuest.module.scss';

export class AddGuest extends React.Component {
  state = {
    name: '',
    sex: 'm',
    age: '',
    ageError: '',
  };

  handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    this.setState({
      ageError: '',
      [name]: value,
    });
  };

  handleClick = () => {
    const id = +new Date();
    const { addGuest } = this.props;
    const {
      name,
      sex,
      age,
    } = this.state;

    if (isNaN(+age)) {
      this.setState(() => {
        return {
          ageError: 'Wrong age',
          name: '',
          sex: 'm',
          age: '',
        }
      });

      return;
    };

    const newGuest = {
      id,
      name,
      sex,
      age: +age,
      visit: false,
    };
    
    addGuest(newGuest);

    this.setState(() => {  
      return {
        name: '',
        sex: 'm',
        age: '',
      }
    });
  };

  render() {
    const {
      name,
      sex,
      age,
      ageError,
    } = this.state;

    return (
      <div
        className={AddGuestSCSS.AddGuest}
      >
        <h2>
          Add Guest
        </h2>
        <form
          className={AddGuestSCSS.AddGuest__form}
        >
          <input
            className={AddGuestSCSS.AddGuest__input}
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <input
            className={AddGuestSCSS.AddGuest__input}
            placeholder="Age"
            name="age"
            type="text"
            value={age}
            onChange={this.handleChange}
            required
          />
          {ageError && (
            <p>
              {ageError}
            </p>
          )}
          <select
            className={AddGuestSCSS.AddGuest__select}
            name="sex"
            value={sex}
            onChange={this.handleChange}
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
            type="button"
            onClick={this.handleClick}
          >
            Add Guest
          </button>
        </form>
      </div>
    )
  }
}
