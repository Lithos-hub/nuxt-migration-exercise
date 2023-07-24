<template>
  <div>
    {{ t('This is the users page!') }}
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useHead({
  title: t('User page'),
});
</script>

<i18n lang="yaml">
vi:
  User page: Trang người dùng
  This is the users page!: Đây là trang người dùng!
</i18n>
