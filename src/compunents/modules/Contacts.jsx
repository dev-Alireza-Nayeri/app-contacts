import React, { useState } from "react";
import ContactsList from "./ContactsList";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const chanheHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastname ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please enter valid data!");
      return
    }
    setAlert("")

    setContacts((contacts) => [...contacts, contact]);

    setContact({
      name: "",
      lastname: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={contact.name}
          name="name"
          placeholder="Name"
          onChange={chanheHandler}
        />
        <input
          type="text"
          value={contact.lastname}
          name="lastname"
          placeholder="Last Name"
          onChange={chanheHandler}
        />
        <input
          type="email"
          value={contact.email}
          name="email"
          placeholder="Email"
          onChange={chanheHandler}
        />
        <input
          type="number"
          value={contact.phone}
          name="phone"
          placeholder="Phone"
          onChange={chanheHandler}
        />
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
