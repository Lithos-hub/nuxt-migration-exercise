import moment from '@/plugins/moment';
import 'moment/locale/vi';
import { useMainStore } from '@/stores';

export default defineNuxtPlugin((nuxtApp) => {
  const { locale } = useMainStore();
  moment.locale(locale);

  nuxtApp.provide('moment', moment);

  return {
    provide: {
      moment: () => moment,
    },
  };
});
