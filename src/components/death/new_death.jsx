import React, { useContext } from "react";
import { CovidAPIContext } from "../../contexts/covid_api_context";
import CountUp from 'react-countup';


const NewDeaths = () => {
  let { totalDeath } = useContext(CovidAPIContext);
  
  
  return (
    <div style={{display:'inline-block'}}>
      <div style={{
        margin:20,
        padding:20,
        width: 200,
        height: 100,
        backgroundColor: "red",
        color: "white",
        fontWeight:'bolder'
      }}>
        <p>Confirmed Deaths:</p>
        <CountUp end={totalDeath} separator=","/>
      </div>
    </div>
  );
};

export default NewDeaths;
