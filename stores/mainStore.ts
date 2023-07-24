import { defineStore } from 'pinia';

import cookieparser from 'cookie-parser';
import { useAuthStore } from '@/stores';

export const useMainStore = defineStore('main', {
  state: () => ({
    locale: 'en',
  }),
  getters: {
    locale: (state) => state.locale || 'en',
  },
  actions: {
    nuxtServerInit({ req }: any) {
      const cookie = cookieparser.JSONCookie(req?.headers?.cookie || '') as any;

      if (cookie) {
        this.locale = cookie.lang || 'en';
      }

      const { SET_AUTH } = useAuthStore();

      SET_AUTH({
        user: {
          email: 'contact@thecodeorigin.com',
          fullName: 'thecodeorigin',
          avatar: 'https://avatars.githubusercontent.com/u/60340907?s=200&v=4',
        },
        token: 'ultraSecretToken',
      });
    },
  },
});
