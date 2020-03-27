<template>
    <header class="header__wrapper">
      <div class="header__info">
        <h1 class="main__title">Rule of thumb</h1>
        <Navbar />
        <Search />
      </div>
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
