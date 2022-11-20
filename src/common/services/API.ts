// import {BASE_URL} from '@Constants/API';
// import axios from 'axios';

// export default axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-type': 'application/json',
//   },
// });

import {BASE_URL} from '@Constants/API';
import axios from 'axios';
export class API {
  readonly apiRequest = axios.create({
    baseURL: BASE_URL,
  });

  constructor() {
    this.apiRequest.interceptors.request.use(async config => {
      // this interceptor we can use it for user token, refreshing token,
      // logging (maybe on resopnse), etc
      const timeout = 30000;
      config = {
        ...config,
        headers: {
          ...config.headers,
        },
        timeout,
      };
      return config;
    });
  }
}
