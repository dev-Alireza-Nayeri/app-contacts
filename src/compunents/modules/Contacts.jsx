import React, { useState } from "react";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [contacts,setContacts] = useState([])
   const chanheHandler = event => {
      const name = event.target.name
      const value = event.target.value
      setContact(contact => ({...contact, [name]: value}))
      
      
   }

   const addHandler = event => {
       console.log(contact);
       
   }


  return (
    <div>
      <form>
        <input type="text" value={contact.name} name="name" placeholder="Name" onChange={chanheHandler} />
        <input type="text" value={contact.lastname} name="lastname" placeholder="Last Name" onChange={chanheHandler}/>
        <input type="email" value={contact.email} name="email" placeholder="Email" onChange={chanheHandler}/>
        <input type="number" value={contact.phone} name="phone" placeholder="Phone" onChange={chanheHandler}/>
        <button onClick={addHandler}>Add Contact</button>
      </form>
    </div>
  );
}

export default Contacts;
