
import React from "react";
import { useState } from "react";
import Link from "next/link";

import Cookie from "js-cookie";



export default function paybutton() {


  const [email, setEmail] = useState("")
  const [headline, setHeadline] = useState("")
  const [description, setDescription] = useState("");
  const [name, setName] = useState("")
  const [value, setValue] = useState("")




  function handleEmailInput(e) {
    setEmail(e.target.value);
  }
  function handleHeadlineInput(e) {
    setHeadline(e.target.value);
  }
  function handleDescriptionInput(e) {
    setDescription(e.target.value);
  }

    function handleNameInput(e) {
      setName(e.target.value);
    }


  function handleValueInput(e) {
    setValue(e.target.value);
  }

 

  

  const handleSubmit = async (e) => {
    e.preventDefault();



    Cookie.remove('User')

    const data = {
      value: value,
      product_name: headline,
      product_description: description,
      name : name,
      email: email,
      parent_uid: "2b54a99d29a24d49",
    }       


  Cookie.set("User", JSON.stringify(data));


  }




  return (
    <div className="">
      
    
      <div className="flex  gap-y-3 flex-col">
        <input
          type="email"
          id="email"
          name="email"
          className="bg-transparent w-auto border rounded p-2"
          placeholder="Email Address"
          onChange={handleEmailInput}
        />
        <input
          type="text"
          id="headline"
          name="headline"
          className="bg-transparent border rounded p-2"
          placeholder="headline"
         onChange={handleHeadlineInput}
        />
        <input
          type="text"
          id="Description"
          name="last"
          className="bg-transparent border rounded p-2"
          placeholder="Description"
          onChange={handleDescriptionInput}
        />

        <input
          type="text"
          id="name"
          className="bg-transparent border rounded p-2"
          placeholder="name"
          onChange={handleNameInput}
        />

        <input
          type="number"
          id="value"
          className="bg-transparent border rounded p-2"
          placeholder="value USD"
          onChange={handleValueInput}
        />

        <button onClick={handleSubmit}  onSubmit={handleSubmit}>
       <Link href="/payment">
           Submit
       </Link>
        </button>
      </div>
        
    </div>
  );  
}
