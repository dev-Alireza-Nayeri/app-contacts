import React from "react";
import { FaVoicemail } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function ContactItem({ data:{id,name,lastname,email,phone}, deleteHandler }) {
  return (
    <div>
      <li key={id}>
        <p>
          {name} {lastname}
        </p>
        <p>
          <span>
            <FaVoicemail /> {email}
          </span>
        </p>
        <p>
          <span>
            <FaPhone /> {phone}
          </span>
        </p>
        <button onClick={() => deleteHandler(id)}>
          <MdDelete />
        </button>
      </li>
    </div>
  );
}

export default ContactItem;
