<template>
  <div :class="$style.abc">
    <transition name="slide-fade" mode="out-in">
      <el-button
        v-if="locale === 'en'"
        key="en-button"
        size="small"
        type="primary"
        @click="$i18n.setLocale('vi')"
      >
        {{ $t('Change language') }}
      </el-button>
      <el-button
        v-else
        key="vi-button"
        size="small"
        type="danger"
        @click="$i18n.setLocale('en')"
      >
        {{ $t('Change language') }}
      </el-button>
    </transition>
    <div>
      <span class="text-primary-300"> {{ $t('Hello world!') }}</span>
      <span class="text-warning-700">{{ $t('Hello world!') }}</span>
    </div>
    <ExampleBase />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useMainStore } from '@/stores';

const { t } = useI18n();
const { locale } = useMainStore();

useHead({
  title: t('Home page'),
});
</script>

<style lang="scss" module>
.abc {
  color: $--color-red;
}
</style>

<i18n lang="yaml">
vi:
  Home page: Trang chủ
  Hello world!: Xin chào thế giới!
  Change language: Đổi ngôn ngữ
</i18n>
