import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
const request = axios.create({
    baseURL: "/api",
    timeout: 100000,
});

request.interceptors.request.use((config) => {
    nProgress.start();
    return config;
})

request.interceptors.response.use((res) => {
    nProgress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error('fail'))
})

export default request;