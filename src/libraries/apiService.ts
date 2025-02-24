import axios, { type AxiosRequestHeaders } from "axios";
import { ILoginReq } from "./model/auth/iLoginReq";
import { IAxiosPromise } from "./model/axiosPromise";
import { ILoginRep } from "./model/auth/iLoginRep";
import { useAuthStore } from "@/stores/auth";

const baseURL = 'https://api-dev-common.chipmongretail.com:8081/api/v1';
const api = axios.create({
    baseURL,
});

api.interceptors.request.use((config) => {
    const authStore = useAuthStore();

    // Check if user and token exist before accessing them
    const token = authStore.user?.token;
    if (token) {
        console.log("User token:", token);
    } else {
        console.log("No token found, user might be logged out.");
    }
    if (authStore.user?.token) {
        config.headers.set("Authorization", `Bearer ${token}`);
    }
    config.headers.set("Content-Type", "application/json");

    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 403) {
            // const authStore = useAuthStore();
            // authStore.logout();
            window.location.href = "login";
        }
        Promise.reject(error);
    }
);



export default {
    login(request: ILoginReq): IAxiosPromise<ILoginRep> {
        return axios.post(`${baseURL}/Cashier/Login`, request);
    },
    logout(userId: string): IAxiosPromise<boolean> {
        return axios.post(`${baseURL}/Cashier/Logout?cashierId=${userId}`);
    },
}