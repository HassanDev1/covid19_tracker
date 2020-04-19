import React,{useState,createContext,useEffect} from 'react';

export const CovidAPIContext = createContext();




const CovidAPIContextProvider = (props) => {
    const [totalConfirmed, settotalConfirmed] = useState(0);
    const [totalDeath, settotalDeath] = useState(0);
    const [totalRecovered, settotalRecovered] = useState(0)
    useEffect(() => {
       
          getApi();
         return(()=>{})
        
    },[settotalConfirmed,settotalDeath,settotalRecovered]);
    async function getApi(){
        try {
         await fetch('https://api.covid19api.com/summary')
        .then(async(res)=>{
          const result = await res.json();

          settotalConfirmed(result.Global.TotalConfirmed);
          settotalDeath(result.Global.TotalDeaths);
          settotalRecovered(result.Global.TotalRecovered);

        }) 
            
        } catch (error) {
            console.log(error)
            
        }
        
        
      }
    return ( 
    <CovidAPIContext.Provider value={{totalConfirmed,totalDeath,totalRecovered}}>{props.children}</CovidAPIContext.Provider>
     );
}
 
export default CovidAPIContextProvider;
