import './App.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import LineCharts from '../Components/Charts/LineChart';
import BarCharts from '../Components/Charts/BarChart';
import RadarCharts from '../Components/Charts/RadarChart';
import RadialCharts from '../Components/Charts/RadialChart';
import useFetch from '../utils/fetchAPI';
import EnergyIndex from '../Components/EnergyIndex/energyIndex';
import Loader from '../Components/Loader/Loader'


/**
 * Display App component
 * @function App
 * @param {number} userId
 * @param {Object} data
 * @param {Object} averageData
 * @param {Object} performanceData
 * @param {Object} activityData
 * @param {boolean} isLoading
 * @param {boolean} error
 * @returns {Reactnode} jsx injected in DOM
 */
const App = () => {

  const { id: userId } = useParams(':id')

  const {
    data: data,
    activityData: activityData,
    averageData: averageData,
    performanceData: performanceData,
    isLoading: dataIsLoading,
    error: dataNotFound,
  } = useFetch(userId);

  console.log(data, '<==data');
  console.log(activityData, '<==activityData')
  console.log(averageData, "<==averageData")
  console.log(performanceData, '<==performanceData')
  console.log (dataIsLoading, "dataIsLoading");
    if (!dataIsLoading && !dataNotFound) {
      return (
        <div className="App">
          <section className='welcome'>
            <div className='welcome_name'>
              <div>Bonjour </div>
              <div className='red'>{data.userInfos.firstName}</div>
            </div>
            
            <span>Félicitation ! Vous avez réalisé vos objectifs hier 👏</span>
          </section>
          <section className='info-container'>
            <div className='charts-container'>
              <div className='bar-chart bg-chart'>
                <BarCharts data={activityData}/>
              </div>
              <div className='chart-wrap'>
                <div className='chart'>
                  <LineCharts data={averageData}/>
                </div>
                <div className='chart'>
                  <RadarCharts data={performanceData}/>
                </div>
                
                <div className='chart bg-chart'>
                  <RadialCharts data={data.todayScore || data.score}/>
                </div>     
              </div>
            </div>
            <div className='nutrients-container'>
              {Object.entries(data.keyData || data[userId].keyData).map(([key, value, index]) => (
                <EnergyIndex value={value} dataLabel={key} key={key + index} />
              ))}
            </div>
          </section>
          
        </div>
      );
    }
    else if (dataNotFound) {
      return (
        <div className="App">
          <h1>Désolé nous n'avons pas pu récupérer vos données, veuillez contacter un administrateur!</h1>
        </div>
        
      )
    } else if (dataIsLoading) {
      return (
      <div className="App">
        <Loader />
      </div>
      )
    }
  }

export default App;
