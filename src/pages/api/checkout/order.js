const api_key = "3Rq4mmTlEt7eCy8R4vw7lYarXNaFj4CKtqWqExNEtOA";
import axios from "axios";
async function order(req, res) {


    const status = req.query.status || -1;
    const address = req.query.addr || 'na';
    const amount = (req.query.value || 0) / 1e8;
    const txid = req.query.txid || 'na';



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
  const addressbtc = addressResponse.data.address;
  console.log(addressbtc);

  const data = { addressbtc, price: response.data.price };

  console.log(data);

  res.send(data);
}

export default order;
