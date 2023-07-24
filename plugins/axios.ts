import axios from 'axios';

export default defineNuxtPlugin(() => {
  const defaultUrl = 'https://localhost:3000';

  let api = axios.create({
    baseURL: defaultUrl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
