import axios, { Axios, AxiosError, AxiosResponse } from 'axios';

import { history } from '../../utils/history';
import { TokenRepository } from './other/TokenRepository';

const tokenRepository = new TokenRepository();

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:7000/api',
  headers: {
    Authorization: tokenRepository.getAccessToken(),
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response.status);

    return response;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    const data = error.response?.data as { message: string };

    const originalRequest = error.config;

    console.log(status);
    console.log(data);

    if (data.message === 'jwt expired') {
      console.log('Updating access token with refresh token...');

      axios.post('http://localhost:7000/api/update-access-token', {
        refreshToken: tokenRepository.getRefreshToken(),
      })
        .then((response) => {
          console.log('New access token', response.data);

          const { accessToken } = response.data;
          tokenRepository.setAccessToken(accessToken);

          axiosInstance.interceptors.request.use((config) => {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = accessToken;
            return config;
          });

          return axiosInstance(originalRequest!);
        })
        .catch((e) => {
          history.navigate?.('/');
        });
    }
  },
);
