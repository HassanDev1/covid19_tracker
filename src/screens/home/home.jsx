import React from 'react';
import NewConfirmed from '../../components/confirmed/newConfirmed';
import NewDeaths from '../../components/death/new_death';
import NewRecovery from '../../components/recovery/new_recovery';
import styles from './home.module.css';
import LineChart from '../../components/charts/line_chart';
import ChartContextProvider from '../../contexts/chart_api';
import CountryPicker from '../../components/country_picker/country_picker';


const Home = () => {
    
    return ( 
        <div className={styles.container}>
            <CountryPicker/>
            <NewConfirmed/>
            <NewDeaths/>
            <NewRecovery/>
            <ChartContextProvider>
                <LineChart/>
            </ChartContextProvider>
        </div>
     );
}
 
export default Home;