<template>
  <div>
    {{ t('This is the projects page!') }}
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

useHead({
  title: t('Project page'),
});
</script>

<i18n lang="yaml">
vi:
  Project page: Trang sản phẩm
  This is the projects page!: Đây là trang dự án!
</i18n>
