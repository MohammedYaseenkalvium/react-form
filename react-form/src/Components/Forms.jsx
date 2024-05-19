import React, { useState } from "react";

const Forms = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  //   const firstNameHandler = (e) => {
  //     setFormData({ ...formData, firstName: e.target.value });
  //     console.log("formData: ", formData);
  //   };
  //   const lastNameHandler = (e) => {
  //     setFormData({ ...formData, lastName: e.target.value });
  //     console.log("formData: ", formData);
  //   };
  //   const emailHandler = (e) => {
  //     setFormData({ ...formData, email: e.target.value });
  //     console.log("formData: ", formData);
  //   };
  //   const phoneNoHandler = (e) => {
  //     setFormData({ ...formData, phoneNo: e.target.value });
  //     console.log("formData: ", formData);
  //   };

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    let errors = validate(formData);
    setFormError(errors);

    let errorKeyArray = Object.keys(errors);

    if (errorKeyArray.length == 0) {
      setFormSubmit(true);
    } else {
      setFormSubmit(false);
    }
  };

  const validate = (data) => {
    let error = {};
    if (data.firstName.trim() == "") {
      error.firstName = "Please enter your First Name";
    }
    if (data.lastName.trim() == "") {
      error.lastName = "Please enter your Last Name";
    }
    if (data.email.trim() == "") {
      error.email = "Please enter your Email Address";
    }
    if (data.phone.trim() == "") {
      error.phone = "Please enter your Phone Number";
    }
    if (data.phone.trim().length != 10) {
      error.phone = "Please enter 10-digit Phone Number";
    }

    return error;
  };

  return (
    <div className="form-container">
      <fieldset>
        <legend>Fill this Form</legend>
        <form onSubmit={formSubmitHandler}>
          {formSubmit && (
            <div>
              <p className="success">Registration Successful !</p>
            </div>
          )}

          <label> First Name:</label>
          <input type="text" name="firstName" onChange={handleInputChange} />
          {formError.firstName && <p className="err">{formError.firstName}</p>}
          

          <label> Last Name:</label>
          <input type="text" name="lastName" onChange={handleInputChange} />
          {formError.lastName && <p className="err">{formError.lastName}</p>}

          <label> Email Address:</label>
          <input type="text" name="email" onChange={handleInputChange} />
          {formError.email && <p className="err">{formError.email}</p>}

          <label> Phone Number:</label>
          <input type="text" name="phone" onChange={handleInputChange} />
          {formError.phone && <p className="err">{formError.phone}</p>}

          <input type="submit" value="Register" onClick={formSubmitHandler} />
          
        </form>
      </fieldset>
    </div>
  );
};

export default Forms;