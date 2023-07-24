import { useAuthStore } from '@/stores';
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const { token } = useAuthStore();
  const domain = process.env.SERVER_API_URL || 'http://localhost:3000';

  if (token) {
    axios.config.headers.Authorization = 'Bearer ' + token;
  }

  const encodedToken = Buffer.from(token).toString('base64');

  let publicApi = nuxtApp.$axios.create({
    baseUrl: domain,
    headers: {
      common: {
        Authorization: `Basic ${encodedToken}`,
      },
    },
  });

  nuxtApp.provide('publicApi', publicApi);

  return {
    provide: {
      publicApi: () => publicApi,
    },
  };
});
