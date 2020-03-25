<template>
  <div class="page__container">
    <TheHeader />
    <TheAppLayout />
    <TheFooter />
  </div >
</template>

<script>

import TheAppLayout from './components/layout/TheAppLayout.vue';
import TheFooter from './components/layout/TheFooter.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  name: 'Home',
  components: {
    TheAppLayout,
    TheFooter,
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
  @import './styles/components/App.scss';
</style>
