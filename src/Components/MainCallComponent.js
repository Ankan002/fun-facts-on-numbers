import React, { useState } from "react";
import './MainCall.css'
import { Loading } from "./Loading";
var axios = require("axios");



const MainCallComponent = () => {
  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchNum, setSearchNum] = useState("");

  const getFact = async (userNum) => {
    setIsLoading(true);

    const options = {
      method: 'GET',
      url: `https://numbersapi.p.rapidapi.com/${userNum}/math`,
      params: {fragment: 'true', json: 'true'},
      headers: {
        'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
        'x-rapidapi-key': '34e1fd9fbdmshbbbcffb1841e6b0p1a1af2jsndc638d4bba0b'
      }
    };


    axios.request(options).then(function (response) {
      console.log(response.data.text);
      setFact(response.data.text)
      setIsLoading(false);
    }).catch(function (error) {
      console.error(error);
    });

    setSearchNum('')
  };

  const onSubmit = () => {
    getFact(parseInt(searchNum));
  };

  return (
    <div>
        <div className="result text-info" style={{marginTop: 20}}>
          <h1>Number Facts</h1>
        </div>
        <div className="input-section">
            <input className="form-control form-control-md input-box ml-4" type="text" placeholder="Enter Number" aria-label=".form-control-lg example" value={searchNum} onChange={(e) => setSearchNum(e.target.value)} />
            <button type="button" className="btn btn-success" onClick={onSubmit}>Get Fact</button>
        </div>
        <div className="result">
          {
            isLoading ? (
              <Loading />
            ) : (
              <h2 className="text-danger">{fact}</h2>
            )
          } 
        </div>
        
    </div>
  );
};

export default MainCallComponent;
