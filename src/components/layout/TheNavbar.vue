<template>
    <nav class="navbar__wrapper">
        <ul class="navbar__list">
            <li><router-link to="/trials" class="router__link">past trials</router-link></li>
            <li><router-link to="/how-it-works" class="router__link">how it works</router-link></li>
            <li><router-link to="/login" class="router__link">login/ sign up</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/TheNavbar.scss';
</style>
