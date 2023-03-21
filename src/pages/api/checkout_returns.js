// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    
 
    const status = req.query.status || -1;
    const address = req.query.addr || 'na';
    const amount = (req.query.value || 0) / 1e8;
    const txid = req.query.txid || 'na';


    console.log(status, address, amount, txid);
  
  }
  