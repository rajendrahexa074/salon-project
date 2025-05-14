import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/', // 🔁 Replace with your actual API
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosInstance.interceptors.request.use(
    (config)=>{
        const user=JSON.parse(localStorage.getItem('user'));
        if(user?.token){
            config.headers.Authorization= `Bearer ${user.token}`;
        };
        return config;
    },
    (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );


  export default axiosInstance;

