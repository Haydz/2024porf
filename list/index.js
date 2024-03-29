const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');


app.use(cors());

app.get('/space', function (req, res) {

  //TESTING WITHOUT INTERNET
  console.log("Connection received to /space");
  // const json = '{"result":true, "count":42}';
  // const obj = JSON.parse(json);
  // res.send(obj);

  async function fetchData() {
    try {
      const response = await axios.get("http://api.open-notify.org/astros.json");
      const data = response.data; // Now you can use 'data' however you like
      
      res.json(data);
      // console.log("Data sent to client:", data);
    } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("An error occurred while fetching data");
    }
  }
  
  fetchData();
 
});

app.listen(4000, () => {
    console.log('Listening on 4000');
});
