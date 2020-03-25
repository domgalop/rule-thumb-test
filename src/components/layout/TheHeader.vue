<template>
    <header class="header">
      <h1>Rule of thumb</h1>
      <Navbar />
      <Search />
      <Hero />
      <ProgressBar />
    </header>
</template>

<script>

import Hero from '../ui/Hero.vue';
import Navbar from './TheNavbar.vue';
import ProgressBar from '../ui/ProgressBar.vue';
import Search from '../ui/Search.vue';

export default {
  name: 'TheHeader',
  components: {
    Hero,
    Navbar,
    ProgressBar,
    Search,
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/TheHeader.scss';
</style>
