import React, { useContext } from "react";
import { CovidAPIContext } from "../../contexts/covid_api_context";
import CountUp from 'react-countup';


const NewRecovery = () => {
  let { totalRecovered } = useContext(CovidAPIContext);
 
  
  return (
    <div style={{display:'inline-block'}}>
      <div style={{
        margin:20,
        padding:20,
        width: 200,
        height: 100,
        backgroundColor: "#5EBFCC",
        color: "white",
        fontWeight:'bolder'
      }}>
        <p>Recovered:</p>
        <CountUp end={totalRecovered} separator=","/>
      </div>
    </div>
  );
};

export default NewRecovery;
