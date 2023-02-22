import React, { useState } from "react";
import axios from "axios";

const GetData = () => {
  const [data, setData] = useState([]);
  const handleGet = (e) => {
    e.preventDefault();

    var config = {
      method: "get",
      url: "https://dummyjson.com/products/",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data)); 
      })
      .then(function (response) {
        console.log(response.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleGet}>get</button>
    </div>
  );
};

export default GetData;
