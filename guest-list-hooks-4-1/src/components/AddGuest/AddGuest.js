import React, { useState } from "react";
import AddGuestSCSS from'./AddGuest.module.scss';

export const AddGuest = (props) => {
  const { 
    addGuest
  } = props;

  const [ name, setName ] = useState(null);
  const [ sex, setSex ] = useState('m');
  const [ age, setAge ] = useState(null);
  const [ ageError, setAgeError ] = useState(null);

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    switch(name) {
      case 'name':
        setName(value);
        break;

      case 'sex':
        setSex(value);
        break;

      case 'age':
        setAge(value);
        break;

      default:
        break; 
    }

    setAgeError('');
  };

  const handleClick = () => {
    const guestAge = +age;

    if (isNaN(guestAge)) {
      setAgeError('Wrong age');

      return;
    };

    addGuest(name, sex, guestAge);

    setName(null);
    setSex('m');
    setAge(null);
  };

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
          value={name || ''}
          onChange={handleChange}
          required
        />
        <input
          className={AddGuestSCSS.AddGuest__input}
          placeholder="Age"
          name="age"
          type="text"
          value={age || ''}
          onChange={handleChange}
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
          onChange={handleChange}
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
          onClick={handleClick}
        >
          Add Guest
        </button>
      </form>
    </div>
  )
};
