import './App.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import LineCharts from '../Components/Charts/LineChart';
import BarCharts from '../Components/Charts/BarChart';
import RadarCharts from '../Components/Charts/RadarChart';
import RadialCharts from '../Components/Charts/RadialChart';
import useFetch from '../utils/fetchAPI';
import EnergyIndex from '../Components/EnergyIndex/energyIndex';

const App = () => {

  const { id: userId } = useParams(':id')
  const {
    data: user,
    isLoading: userIsLoading,
    error: userNotFound,
  } = useFetch('http://localhost:3000/user/' + userId)

  const { data: activity, isLoading: activityIsLoading } = useFetch(
    'http://localhost:3000/user/' + userId + '/activity'
  )

  const { data: averageSessions, isLoading: averageSessionsIsLoading } =
    useFetch('http://localhost:3000/user/' + userId + '/average-sessions')

  const { data: performance, isLoading: performanceIsLoading } = useFetch(
    'http://localhost:3000/user/' + userId + '/performance'
  )
  
  
 //console.log(user,"<== user")

  if (
    !userIsLoading &&
    !activityIsLoading &&
    !averageSessionsIsLoading &&
    !performanceIsLoading
  ){
    return (
      <div className="App">
        <section className='welcome'>
          <h1>Bonjour {user.userInfos.firstName}</h1>
          <span>Félicitation ! Vous avez réalisé vos objectifs hier 👏</span>
        </section>
        <section className='info-container'>
          <div className='charts-container'>
            <div className='bar-chart bg-chart'>
              <BarCharts data={activity} />
            </div>
            <div className='chart-wrap'>
              <div className='chart'>
                <LineCharts data={averageSessions} />
              </div>
              <div className='chart'>
                <RadarCharts data={performance} />
              </div>
              
              <div className='chart bg-chart'>
                <RadialCharts data={user.todayScore || user.score}/>
              </div>     
            </div>
          </div>
          <div className='nutrients-container'>
            {Object.entries(user.keyData).map(([key, value, index]) => (
              <EnergyIndex value={value} dataLabel={key} key={key + index} />
            ))}
          </div>
        </section>
        
      </div>
    );
  }
}

export default App;
