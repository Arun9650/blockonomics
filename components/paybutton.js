
import React from "react";
import { useState } from "react";
import Link from "next/link";

import Cookie from "js-cookie";



export default function paybutton(props) {

  const latestPaymentValue = props.value;
  console.log(latestPaymentValue)
    // const some = props.data.latestPaymentValue;
    // console.log("some", some)


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
      parent_uid: "3c8e3586f7394d97",
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
          className="bg-transparent w-auto peer border rounded mt-2 -mb-2 p-2 "
          placeholder="Email Address"
          onChange={handleEmailInput}
        />
         <p className={`invisible   text-sm font-semibold peer-invalid:visible peer-invalid:h-3 peer-valid:h-0 "}`}>
      Please provide a valid amount .
    </p>

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
          className="bg-transparent peer border rounded p-2"
          placeholder="value USD"

          onChange={handleValueInput}
        />
        <p className={`invisible   text-md ${latestPaymentValue < value ? "h-0  " : " h-4 -mt-3 peer-focus-visible:visible"}`}>
      Please provide a amount greater then ${latestPaymentValue} 
    </p>

        <button onClick={handleSubmit} className=""  onSubmit={handleSubmit}>
       <Link href="/payment">
           Submit
       </Link>
        </button>
      </div>
        
    </div>
  );  
}
