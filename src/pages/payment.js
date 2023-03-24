import React from "react";
import Head from "next/head";
import Link from "next/link";


import Cookies from "cookies";


export default function payment({ data }) {

  console.log("data", data);

  const successfulPayment = data.historyData.filter(
    (item) => (item.status === 1 || item.status === 2) && item.value > 0
  );
  // console.log("successfulPayment", successfulPayment[0]);

  const latestPayment = successfulPayment[0];

  const latestPaymentValue = latestPayment.value;

  const payment = () => {
    if (latestPaymentValue <  data.inputData.value) {

      function payWithBitcoin() {
        // eslint-disable-next-line no-undef
        Blockonomics.widget({
          msg_area: "bitcoinpay", 
          uid: data.responseID.uid,
          email: data.inputData.email,
        });
      }

      payWithBitcoin();
    } else {
      alert("You have to pay more than previous payment");
    }
  };

  return (
    <>
    <Head>
    <title>Payment App</title>
         
    </Head>

      <div className=" h-screen  bg-[#f4f5f5] text-black flex items-center flex-col justify-center border w-full">
        <Link href="/">Back</Link>
        <div className="p-5 border h-auto text-center flex items-center justify-center flex-col shadow-2xl rounded-md">
          <h1 className="text-4xl p-5 pt-0 text-center  font-semibold">
            Payment Details{" "}
          </h1>
          <table className="table-auto  min-h-max  h-2/4 w-auto">
            {/* <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
              </tr>
            </thead> */}
            <tbody className=" divide-y w-max  text-lg  rounded">
              <tr>
                <td>Headline</td>
                <td>{data.inputData.product_name}</td>
              </tr>
              <tr>
                <td>Headline Description </td>
                <td>{data.inputData.product_description}</td>
              </tr>
              <tr>
                <td>Cost </td>
                <td>${data.inputData.value}</td>
              </tr>

              <tr>
                <td>Previous Payment </td>
                <td>${`${latestPaymentValue}`}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{data.inputData.email}</td>
              </tr>
            </tbody>
          </table>
          <button
            id="pay"
            onClick={() => payment()}
            className="border w-full rounded-md p-2 mt-4 bg-green-500 text-white"
          >
            Pay with Bitcoin
          </button>
          <div id="bitcoinpay" ></div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const cookie = new Cookies(req, res);
  const resutl = cookie.get("User");
  const result = decodeURIComponent(resutl);
  let a = JSON.parse(result);

  const api_key = "3Rq4mmTlEt7eCy8R4vw7lYarXNaFj4CKtqWqExNEtOA";
  const urlforProducts = "https://www.blockonomics.co/api/create_temp_product";
  const urlForHistory = "https://www.blockonomics.co/api/merchant_orders?limit=15";

  const inputData = {
    parent_uid: a.parent_uid,
    product_name: a.product_name,
    product_description: a.product_description,
    value: a.value,
    email: a.email,
  };

  console.log(inputData);

  const options = {
    // The method is POST because we are sending data.
    method: "POST",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + api_key,
    },
    // Body of the request is the JSON data we created above.
    body: JSON.stringify(inputData),
  };

  const response = await fetch(urlforProducts, options);
  const responseID = await response.json();

  console.log(responseID)

  const optionForHistory = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + api_key,
    },
  };

  const responseOFHistory = await fetch(urlForHistory, optionForHistory);
  // console.log(responseOFHistory);
  const historyData = await responseOFHistory.json();

  // console.log(historyData);

  const totalData = { responseID, historyData, inputData };

  return {
    props: {
      data: totalData,
    },
  };
}
