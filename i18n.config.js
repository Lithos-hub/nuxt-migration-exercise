import en from '@/locale/en.json';
import vi from '@/locale/vi.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    vi,
  },
}));
