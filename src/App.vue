<template>
  <Fragment>
    <router-view />
    <notifications group="vote" position="bottom right"/>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
  name: 'Home',
  components: {
    Fragment,
  },
};
</script>

<style lang="scss" scoped>
  @import './styles/components/App.scss';
</style>
