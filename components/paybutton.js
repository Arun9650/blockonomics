import React from "react";
import { useState, useEffect } from "react";
export default function paybutton() {
  const [email, setEmail] = useState("")
  const [headline, setHeadline] = useState("")
  const [description, setDescription] = useState("");
  const [name, setName] = useState("")

  function payWithBitcoin() {
    // eslint-disable-next-line no-undef
    Blockonomics.widget({
      msg_area: "bitcoinpay",
      uid: "2b54a99d29a24d49",
      email: email,
      Headline: headline,
      Description: description,
        Name:name
    });
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }
  function handleHeadlineInput(e) {
    setHeadline(e.target.value);
  }
  function handleDescriptionInput(e) {
    setDescription(e.target.value);
  }







  return (
    <div>
      {" "}
      <div className="flex w-auto flex-col">
        <input
          type="email"
          id="email"
          className="bg-transparent border rounded p-2"
          placeholder="Email Address"
          onInput={handleEmailInput}
          onChange={handleEmailInput}
        />
        <input
          type="text"
          id="headline"
          className="bg-transparent border rounded p-2"
          placeholder="headline"
          onInput={handleHeadlineInput}
          onChange={handleHeadlineInput}
        />
        <input
          type="text"
          id="Description"
          className="bg-transparent border rounded p-2"
          placeholder="Description"
          onInput={handleDescriptionInput}
          onChange={handleDescriptionInput}
        />
        <input
          type="text"
          id="name"
          className="bg-transparent border rounded p-2"
          placeholder="name"
          onInput={handleDescriptionInput}
          onChange={handleDescriptionInput}
        />
        <button id="pay" onClick={payWithBitcoin}>Pay with Bitcoin</button>
        <div id="bitcoinpay"></div>
      </div>
    </div>
  );
}
