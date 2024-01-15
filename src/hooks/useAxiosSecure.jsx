import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            console.log('res form hooks', res)
            return res;
        }, error => {
            if(error.response.status === 401 || error.response.status === 403){
                console.log('log out')
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;