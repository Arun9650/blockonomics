const api_key = "3Rq4mmTlEt7eCy8R4vw7lYarXNaFj4CKtqWqExNEtOA";
import axios from "axios";
async function order(req, res) {
  const addressResponse = await axios({
    method: "post",
    url: "https://www.blockonomics.co/api/new_address?reset=1",
    headers: {
      "Content-Type": "text/json",
      Authorization: "Bearer " + api_key,
    },
  });

  const response = await axios.get(
    "https://www.blockonomics.co/api/price?currency=USD"
  );

  console.log(response.data.price);
  const address = addressResponse.data.address;
  console.log(address);

  const data = { address, price: response.data.price };

  console.log(data);

  res.send(data);
}

export default order;
