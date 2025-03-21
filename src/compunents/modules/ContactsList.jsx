import React from "react";
import { FaVoicemail } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ContactItem from "./ContactItem";

function ContactsList({ contacts,deleteHandler }) {
  return (
    <div>
      <h3>contacts list</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
             <ContactItem data={contact} deleteHandler={deleteHandler}  key={contact.id}/>
          ))}
        </ul>
      ) : (
        <p>no contacts yet </p>
      )}
    </div>
  );
}

export default ContactsList;
