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


    const response = await axios.get(`http://numbersapi.com/${userNum}`)

    const data = response.data

    setFact(data)
    setSearchNum('')

    setIsLoading(false);
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
