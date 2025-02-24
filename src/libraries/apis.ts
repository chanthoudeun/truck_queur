
import { ILoginRep } from "./model/auth/iLoginRep";
import { ILoginReq } from "./model/auth/iLoginReq";
import { IAxiosPromise, IAxiosResponse } from "./model/axiosPromise";
import apiService from "./apiService";
const getResponse = (response: IAxiosPromise) => response.then((value) => value.data);

export default {
    login(request: ILoginReq): Promise<ILoginRep> {
        const response = apiService.login(request);
        console.log(`vvvv ${response}`);
        return getResponse(response);
    },
    logout(userId: string): Promise<boolean> {
        const response = apiService.logout(userId);
        console.log(`vvvv ${response}`);
        return getResponse(response);
    },

}