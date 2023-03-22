import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Payment from "@/pages/payment";
import Link from "next/link";

import { useContext } from "react";
import { Message_data } from "./appcontext";


import { useCookies } from "react-cookie"

import Cookie from "js-cookie";
import { parseCookies } from "../lib/parseCookies";


export default function paybutton({initialRememberValue}) {

  // const [cookie, setCookie] = useCookies(["user"])
  // const {message, setMessage} =  useContext(Message_data);
  const [rememberMe, setRememberMe] = useState({});


  const [email, setEmail] = useState("")
  const [headline, setHeadline] = useState("")
  const [description, setDescription] = useState("");
  const [name, setName] = useState("")
  const [value, setValue] = useState("")




  // const [data , setData ] = useState({})


  // function payWithBitcoin() {
  //   // eslint-disable-next-line no-undef
  //   Blockonomics.widget({
  //     msg_area: "bitcoinpay",
  //     uid: "2b54a99d29a24d49",
  //     email: email,
  //     Headline: headline,
  //     description: description,
  //       name:name,
  //     value: value,
  //   });
  // }

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

    const data = {
      value: value,
      product_name: name,
      product_description: description,
      headline: headline,
      email: email,
      parent_uid: "2b54a99d29a24d49",
    }


    // setMessage(data);


    Cookie.set("User", JSON.stringify(data));
    // Send the form data to our API and get a response.
    // const response = await fetch('/api/form', {
    //   // Body of the request is the JSON data we created above.
    //   body: data,
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // The method is POST because we are sending data.
    //   method: 'POST',
    // })

    // const result = await response.json()
    






  }




  return (
    <div>
      {" "}
      <form  >
      <div className="flex w-auto gap-y-3 flex-col">
        <input
          type="email"
          id="email"
          name="email"
          className="bg-transparent border rounded p-2"
          placeholder="Email Address"
          onChange={handleEmailInput}
        />
        <input
          type="text"
          id="first"
          name="first"
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


        {/* <button id="pay"  onClick={payWithBitcoin}>Pay with Bitcoin</button>
        <div id="bitcoinpay"></div> */}


        <button onClick={handleSubmit}  onSubmit={handleSubmit}>
       <Link href="/payment">
           Submit
       </Link>
        </button>
      </div>
        </form>
    </div>
  );  
}


// export async function getServerSideProps(context) {


 

//   const res = await  axios({
//     method: "post",
//     url: url,
//     headers: {
//       "Content-Type": "text/json",
//       "Authorization" : ' Bearer' + api_Key,
//     },
//     body: JSON.stringify(data),
//   })

//   console.log(res.data)

//   return {
//     props : {
//       data: "data"
//     }
//   }

// }