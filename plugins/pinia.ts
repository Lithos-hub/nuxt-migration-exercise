import { Pinia } from 'pinia';
import { useMainStore, useAuthStore, useLazyStore } from '~/stores';

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      mainStore: useMainStore($pinia as Pinia),
      authStore: useAuthStore($pinia as Pinia),
      lazyStore: useLazyStore($pinia as Pinia),
    },
  };
});
