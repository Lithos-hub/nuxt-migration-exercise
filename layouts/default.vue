<template>
  <div :class="$style.layoutWrapper">
    <LayoutMySidebar />
    <div :class="$style.layoutInner">
      <LayoutMyNavbar />
      <div :class="$style.layoutPageWrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.layoutWrapper {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.layoutInner {
  display: flex;
  flex: 1; // Horizontal spread
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
}

.layoutPageWrapper {
  flex: 1;
  overflow: auto;
  padding: 1rem;
}
</style>
