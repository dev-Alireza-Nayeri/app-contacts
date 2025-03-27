import React from "react";
import { FaVoicemail } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";
function ContactsList({ contacts, deleteHandler }) {
    console.log(contacts);
    
  
  return (
    <div className={styles.container}>
      <h3>contacts list</h3>
      {contacts.length && contacts ? (
        <ul className={styles.contacts}  >
          {contacts.map(( contact) => (
            
            
            <ContactItem
              data={contact}
              deleteHandler={deleteHandler}
              key={contact.id}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>no contacts yet </p>
      )}
    </div>
  );
}

export default ContactsList;
