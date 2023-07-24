import axios from 'axios';

export default defineNuxtPlugin(() => {
  let api = axios.create({
    baseUrl: domain,
    headers: {
      common: {
        Authorization: `Basic ${encodedToken}`,
      },
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
