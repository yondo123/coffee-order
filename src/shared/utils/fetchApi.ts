import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = '/api/';

export const fetchApi = async <T, D = unknown>(axiosParams: AxiosRequestConfig<D>): Promise<T> => {
  const result = await axios.request<T>({ ...axiosParams });
  return result.data;
};
