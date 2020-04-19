import React,{useContext} from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartContext } from '../../contexts/chart_api';

const LineChart = () => {
    const{countries} = useContext(ChartContext);
    const confirmed = countries.map(c=>c.TotalConfirmed)
    console.log(confirmed)
 
   

 

    const barChart = countries.length?(
        <Bar 
        width={650}
        height={700}

        options={{
          maintainAspectRatio: false
        }}
        data={
            {
                labels: countries.map(c=>c.Country),
                datasets:[
                    {
                        label:'Confirmed Cases By Countries',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: confirmed
                    }
                ]
            }
        }/>
    ):null;
    return ( 
        <div>
            {barChart}
        </div>
     );
}
 
export default LineChart;