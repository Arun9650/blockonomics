import axios from "axios"

export default async function handler(req, res) {
    // Get data submitted in request's body.
    // const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    // console.log('body: ', body)
    // console.log(JSON.stringify(body))
    // console.log(body.value)
  
    // // Guard clause checks for first and last name,
    // // and returns early if they are not found
    // if (!body.first || !body.last) {
    //   // Sends a HTTP bad request error code
    //   return res.status(400).json({ data: 'First or last name not found' })
    // }
  
    // // Found the name.
    // // Sends a HTTP success code
    // res.status(200).json({ data: `${body.first} ${body.last}` })

    let data = {
        "value": "3",
        "product_name": "asf",
        "product_description": "asdf",
        "email": "immortal9650@gmail.com",
        "parent_uid": "2b54a99d29a24d49"
    }
    console.log(data)

    data = JSON.stringify(data)
    console.log(data)
    // data = JSON.parse(data)
    

    const api_key = "3Rq4mmTlEt7eCy8R4vw7lYarXNaFj4CKtqWqExNEtOA";
    const url = "https://www.blockonomics.co/api/create_temp_product";
   


    const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + api_key,
        },
        // Body of the request is the JSON data we created above.
        body: data,
      }


      const response = await fetch(url, options)

      console.log(response)
      const result = await response.json()
        console.log(result)
        res.send(result)
    // try{
    //   axios.post(
           
    //       "https://www.blockonomics.co/api/create_temp_product",
    //     [   { parent_uid:"2b54a99d29a24d49",},],
    //         {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + api_key,
    //         },
    //     },
           
    //     )
    //     .then((response) => {
    //         /**
    //          * The 'then' method is executed only when the request is successfull.
    //          */
    //         console.log(response);
    //     })

        
    // }
    // catch(err){
    //     console.log("err",err);
       
    // }

  

  


  }