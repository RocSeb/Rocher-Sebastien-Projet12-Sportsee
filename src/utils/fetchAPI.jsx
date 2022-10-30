import { useState, useEffect } from 'react';

const mockupMode = false  // Set "false" to launch with the API data, Set "true" to launch with the dataMocked json file

const UseFetch = (userId) => {

  const [data, setData] = useState({});
  const [activityData, setActivityData] = useState({});
  const [averageData, setAverageData] = useState({});
  const [performanceData, setPerformanceData] = useState({});
  const [isLoading, setLoading] = useState(true); //set a loader to display the ui after retrieving the response from the api
  const [error, setError] = useState(false); // Set an error message if the data cannot be retrieved from the api

  useEffect(() => {

    async function fetchData() {
      setLoading(true);
      
      if (mockupMode) {
        try {
          const response = await fetch('/dataMocked.json')
          if (!response.ok) {
            setError(true)
          }
  
          const data = await response.json()
          const dataUser = data[userId]
          const dataActivity = dataUser.activity
          const dataAverage = dataUser.averageSessions
          const dataPerformance = dataUser.performance

          setData(dataUser)
          setActivityData(dataActivity)
          setAverageData(dataAverage)
          setPerformanceData(dataPerformance)

        } catch (err) {
          console.log(err)
  
          setError(true)
        } finally {
          setLoading(false)
        }
      }
      else {
        const apiUrl = 'http://localhost:3000/user/'  + userId;
        const activityUrl = apiUrl + '/activity';
        const averageUrl = apiUrl + '/average-sessions';
        const performanceUrl = apiUrl + '/performance';

        try {
          const apiResponse = await fetch(apiUrl)
          const activityResponse = await fetch (activityUrl)
          const averageResponse = await fetch(averageUrl)
          const performanceResponse = await fetch(performanceUrl)

          if (!apiResponse.ok || !activityResponse.ok || !averageResponse.ok || !performanceResponse.ok) {
            setError(true)
          }

          const dataAPI = await apiResponse.json()
          const dataActivity = await activityResponse.json()
          const dataAverage = await averageResponse.json()
          const dataPerformance = await performanceResponse.json()

          setData(dataAPI.data)
          setActivityData(dataActivity.data)
          setAverageData(dataAverage.data)
          setPerformanceData(dataPerformance.data)

        } catch (err) {
          console.log(err)

          setError(true)
        } finally {
          setTimeout(() => {
            setLoading(false)
          }, "0")
          
        }
      }
    }

    fetchData()
  }, [userId])
  return { isLoading, data, activityData, averageData, performanceData, error }
}

export default UseFetch;