import React, { useContext } from "react";
import { CovidAPIContext } from "../../contexts/covid_api_context";
import CountUp from 'react-countup';

const NewConfirmed = () => {
  const { totalConfirmed } = useContext(CovidAPIContext);

  return (
    <div style={{display:'inline-block'}}>
      <div style={{
        
        margin:20,
        padding:20,
        width: 200,
        height: 100,
        backgroundColor: "orange",
        color: "white",
        fontWeight:'bolder'
      }}>
        <p>Global Confirmed Cases:</p>      
        <CountUp  end={totalConfirmed} duration={5} separator=','/>
      </div>
    </div>
  );
};

export default NewConfirmed;
