<template>
    <footer class="footer__wrapper">
      <ul class="enterprise__statement">
        <li><a href="#" class="enterprise__statement__links">Terms and Conditions</a> </li>
        <li><a href="#" class="enterprise__statement__links">Privacy Policy</a></li>
        <li><a href="#" class="enterprise__statement__links">Contact Us</a></li>
      </ul>
      <div class="social">
        <p class="social__follow">follow us</p>
        <a href="https://twitter.com/zemoga?lang=es" class="social__link">
          <i class="fab fa-facebook-square"></i>
        </a>
          <a href="https://es-la.facebook.com/HRZemoga" class="social__link">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/TheFooter.scss';
</style>
