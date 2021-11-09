import React from "react";
import AdminPanelFormCSS from'./AdminPanelForm.module.css';

export class AdminPanelForm extends React.Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      userName,
      userDepartment,
    } = this.props;

    return (
      <div>
        <h2>
          Form
        </h2>
        <section className={AdminPanelFormCSS.adminPanel}>
          <form
            action="#"
            method="GET"
            className={AdminPanelFormCSS.form}
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <fieldset>
              <div>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  className={AdminPanelFormCSS.input}
                  placeholder="Username"
                  value={userName}
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  required
                />
              </div>

              <div>
                <select
                  id="disabledSelect"
                  className={AdminPanelFormCSS.select}
                  name="userDepartment"
                  value={userDepartment}
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
                type="submit"
                className={AdminPanelFormCSS.button}
              >
                Save
              </button>
            </fieldset>
          </form>
        </section>
      </div>
    )
  }
};
