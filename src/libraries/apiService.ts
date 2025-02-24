import axios, { type AxiosRequestHeaders } from "axios";
import { ILoginReq } from "./model/auth/iLoginReq";
import { IAxiosPromise } from "./model/axiosPromise";
import { ILoginRep } from "./model/auth/iLoginRep";

const baseURL = 'https://api-dev-common.chipmongretail.com:8081/api/v1';

const api = axios.create({
    baseURL,
});

api.interceptors.request.use((config) => {
    // const authStore = useAuthStore();
    config.headers = {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${authStore.$state.user.apiKey}.${authStore.$state.user.token}`,
    } as AxiosRequestHeaders;
    return config;
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