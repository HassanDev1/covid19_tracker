import React,{useState,useEffect,createContext} from 'react';

export const ChartContext = createContext();


const ChartContextProvider = (props) => {
    const [countries, setcountries] = useState([]);
    useEffect(() => {
        getChart();
        
    },[setcountries] );

    async function  getChart  (){
try {
    const response = await fetch('https://api.covid19api.com/summary');
    const result = await response.json();
    setcountries(result.Countries)       
} catch (error) {
    console.log(error)
    
}
    }
    return ( 
    <ChartContext.Provider value={{countries}}>{props.children}</ChartContext.Provider>
     );
}
 
export default ChartContextProvider;


