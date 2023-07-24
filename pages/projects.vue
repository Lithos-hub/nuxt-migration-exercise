<template>
  <div>
    <div>{{ $t('This is the project page wrapper') }}</div>
    {{ count }}
    <slot />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLazyStore } from '@/stores';

const { getMany } = useLazyStore();
const { count } = storeToRefs(useLazyStore());

onMounted(() => {
  try {
    getMany();
  } catch (e) {
    console.error(e);
  }
});
</script>

<i18n lang="yaml">
vi:
  This is the project page wrapper: Đây là layout bọc ngoài trang dự án
</i18n>
