import React, { useState } from "react";
import ContactsList from "./ContactsList";

import { v4 } from "uuid";

const inputs = [
  { type: "text", name: "name", placeholder: "Name" },
  { type: "text", name: "lastname", placeholder: "Last Name" },
  { type: "email", name: "email", placeholder: "Email" },
  { type: "number", name: "phone", placeholder: "Phone" },
];

function Contacts() {
  const [contact, setContact] = useState({
    id: "",
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
      return;
    }
    setAlert("");

    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);

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
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            onChange={chanheHandler}
            value={contact[input.name]}
          />
        ))}

        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
