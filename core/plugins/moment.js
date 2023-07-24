import moment from 'core/plugins/moment';
import 'moment/locale/vi';
import { useMainStore } from '@/stores';

export default defineNuxtPlugin(() => {
  const { locale } = useMainStore();
  moment.locale(locale);

  return {
    provide: {
      moment: () => moment,
    },
  };
});
