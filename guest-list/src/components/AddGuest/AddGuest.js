import React from "react";
import AddGuestSCSS from'./AddGuest.module.scss';

export class AddGuest extends React.Component {
  state = {
    name: '',
    sex: 'm',
    age: '',
    visit: false,
  };

  handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
      event.preventDefault();
      const id = +new Date();
      const { addGuest } = this.props;
      const {
        name,
        sex,
        age,
      } = this.state;

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
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <input
            className={AddGuestSCSS.AddGuest__input}
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              this.handleChange(event);
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
              this.handleChange(event);
            }}
            required
          />
          <select
            className={AddGuestSCSS.AddGuest__select}
            name="sex"
            value={sex}
            onChange={(event) => {
              this.handleChange(event);
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
