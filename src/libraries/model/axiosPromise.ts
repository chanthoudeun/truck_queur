

export interface IAxiosResponse<T = any> {
    data: T;
}

export type IAxiosPromise<T = any> = Promise<IAxiosResponse<T>>;