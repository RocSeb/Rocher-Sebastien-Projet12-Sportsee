import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const UseFetch = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true); //set a loader to display the ui after retrieving the response from the api
  const [error, setError] = useState(false); // Set an error message if the data cannot be retrieved from the api


  useEffect(() => {
    if (!url) return

    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          setError(true)
        }

        const data = await response.json()

        setData(data.data)
      } catch (err) {
        console.log(err)

        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])
  return { isLoading, data, error }
}

export default UseFetch;



// const GetUsersData = () => {
//     const [data, setData] = useState({});
//     const [isLoading, setLoading] = useState(true);
//     const userId = parseInt(useParams().id);


//     useEffect(() => {
//         setLoading(true);
//         axios.get(`http://localhost:3000/user/${userId}/`)
//         .then((response) =>  {
//             const obj = response.data;
//             console.log(obj, "<==obj")
//             setData(obj)
//         })
//         .catch(error =>
//         console.error(`Error: ${error}`)
//         );
//         setLoading(false);
//     }, [userId])
//     console.log(data, "<==data1")
//     return { data, isLoading }
// }

// const GetUsersActivity = () => {
//     const [dataAct, setData] = useState({});
//     const [isLoading, setLoading] = useState(true);
//     const userId = parseInt(useParams().id);

   
//     useEffect(() => {
//        axios.get(`http://localhost:3000/user/${userId}/activity`)
//        .then((response) =>  {
//             const obj = response.data
//             console.log(obj, "<==obj2")
//             setData(obj.data)
//        })
//        .catch(error =>
//          console.error(`Error: ${error}`)
//        );
//     }, [userId]);
//     console.log(dataAct, "<==data2");
//     return dataAct
// }

// const GetUsersAverage = () => {
//     const [data, setData] = useState({});
//     const userId = parseInt(useParams().id)
   
//     useEffect(() => {
//        axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
//        .then((response) =>  {
//             const obj = response.data
//             setData(obj)
//        })
//        .catch(error =>
//          console.error(`Error: ${error}`)
//        );
//     }, [userId])
   
//     return data?.sessions
// }

// const GetUsersPerformance = () => {
//     const [data, setData] = useState({});
//     const userId = parseInt(useParams().id)
   
//     useEffect(() => {
//        axios.get(`http://localhost:3000/user/${userId}/performance`)
//        .then((response) =>  {
//             const obj = response.data
//             setData(obj)
//        })
//        .catch(error =>
//          console.error(`Error: ${error}`)
//        );
//     }, [userId])
   
//     return data
// }

// export {GetUsersData, GetUsersActivity, GetUsersAverage, GetUsersPerformance};