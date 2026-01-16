// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5001",
// });

// export default API;


import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default API;
