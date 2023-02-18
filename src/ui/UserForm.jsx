import React, { useState } from "react";

export default function UserForm(props) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleOnChange = (event) => {// event object have many property
    const { name, value } = event.target; // we destructure target object and seprate name and value key

    setFormValues({
      ...formValues, // copy previous value 
      [name]: value,// adding new by user targeted field and that key is already exit than only value replace
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = formValues.firstName + " " + formValues.lastName;

    const user = {
      ...formValues,
      id: crypto.randomUUID(),
      name: name,
    };

    props.onCreate(user);
    alert("User crated Successfully Please click list button to show users list ")
    
        // setFormValues({
        //     ...formValues,
        //     firstName: '',
        //     email: '',
        //     lastName: ''
        // })
   
  };

  
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        type="text"
        onChange={handleOnChange}
        name="firstName"
        id=""
      />
      <input
        placeholder="Last Name"
        type="text"
        onChange={handleOnChange}
        name="lastName"
        id=""
      />
      <input
        placeholder="Email"
        type="email"
        onChange={handleOnChange}
        name="email"
        id=""
      />
      <input
        placeholder="Phone"
        type="number"
        onChange={handleOnChange}
        name="phone"
        id=""
      />
      <input type="submit" value={"Create New User"} />
    </form>
  );
}