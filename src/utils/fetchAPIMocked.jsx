// import { useEffect, useState } from 'react';

// const useFetchMocked = (userId) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   const [hasError, setError] = useState(false);
//   useEffect(() => {
//     if (!userId) return
//     setLoading(true);

//     const getData = () => {
//       fetch('/dataMocked.json')
//         .then((response) => response.json())
//         .then((data) => {
//           setData(data);
//           setLoading(false);
//         })
//         .catch(() => {
//           setError(true);
//           setLoading(false);
//         });
//     };

//     getData();
//   }, [userId]);

//   return { data, isLoading, hasError };
// }

// export default useFetchMocked