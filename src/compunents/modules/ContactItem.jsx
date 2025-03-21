import React from "react";
import { FaVoicemail } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import styles from "./ContactItem.module.css"
function ContactItem({ data:{id,name,lastname,email,phone}, deleteHandler }) {
  return (
    <div>
      <li key={id} className={styles.item}>
        <p>
          {name} {lastname}
        </p>
        <p>
          <span>
            <FaVoicemail fontSize="1.3rem" color="#184f4c" /> {email}
          </span>
        </p>
        <p>
          <span>
            <FaPhone   fontSize="1.3rem" color="#184f4c"/> {phone}
          </span>
        </p>
        <button onClick={() => deleteHandler(id)}>
          <MdDelete   color="gray" />
        </button>
      </li>
    </div>
  );
}

export default ContactItem;
