import React, { useEffect, useState } from "react";
import ContactsList from "./ContactsList";
import styles from "./Contacts.module.css";
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
  const lsData = JSON.parse(localStorage.getItem("CONTACTS"));
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    setContacts(lsData);
  }, []);
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
    localStorage.setItem("CONTACTS", JSON.stringify([...contacts, newContact]));

    setContact({
      name: "",
      lastname: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem("CONTACTS", JSON.stringify(newContacts))

  };

  return (
    <div className={styles.box}>
      <div className={styles.form}>
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
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;
