import React, { useCallback, useState, useEffect } from "react";
import AdminPanelFormCSS from'./AdminPanelForm.module.css';

export const AdminPanelForm = React.memo((props) => {
  const {
    addUser,
    updateUserInfo,
  } = props;

  const [ userNameField, setUserNameField ] = useState(null);
  const [ userDepartmentField, setUserDepartmentField] = useState(null);

  const handleClick = useCallback(() => {
    const id = +new Date();
    const dateCreate = new Date().toString();

    const newUser = {
      id,
      userName: userNameField,
      userDepartment: userDepartmentField,
      dateOfCreation: dateCreate,
      dateOfChange: dateCreate,
    };
    
    addUser(newUser);

    setUserNameField(null);
    setUserDepartmentField(null);
  }, [addUser, userNameField, userDepartmentField]) ;

  const handleChange = useCallback((event) => {
    const {
      name,
      value,
    } = event.target;
    
    switch (name) {
      case 'userNameField':
        setUserNameField(value);
        break;

      case 'userDepartmentField':
        setUserDepartmentField(value);
        break;
    
      default:
        break;
    };
  }, []);

  useEffect(() => {
    if (updateUserInfo) {
      setUserNameField(updateUserInfo.userName);
      setUserDepartmentField(updateUserInfo.userDepartment);
    };
    console.log(updateUserInfo);
  }, [updateUserInfo]);

  return (
    <div>
      <h2>
        Form
      </h2>
      <section className={AdminPanelFormCSS.adminPanel}>
        <form
          className={AdminPanelFormCSS.form}
        >
          <fieldset>
            <div>
              <input
                type="text"
                id="userNameField"
                name="userNameField"
                className={AdminPanelFormCSS.input}
                placeholder="Username"
                value={(userNameField === null) ? '' : userNameField}
                onChange={(event) => {
                  handleChange(event);
                }}
                required
              />
            </div>

            <div>
              <select
                id="userDepartmentField"
                className={AdminPanelFormCSS.select}
                name="userDepartmentField"
                value={(userDepartmentField === null) ? '' : userDepartmentField}
                onChange={(event) => {
                  handleChange(event);
                }}
                required
              >
                <option value="">
                  Choose user department
                </option>
                <option 
                  value="development"
                >
                  development
                </option>
                <option 
                  value="bookkeeping"
                >
                  bookkeeping
                </option>
                <option 
                  value="management"
                >
                  management
                </option>
              </select>
            </div>

            <button
              type="button"
              className={AdminPanelFormCSS.button}
              onClick={handleClick}
            >
              Save
            </button>
          </fieldset>
        </form>
      </section>
    </div>
    )
  });
