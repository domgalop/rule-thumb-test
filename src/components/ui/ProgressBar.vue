<template>
  <div class="progress__bar">
    <div class="progress__bar--closing">
      <p class="progress__bar">closing in</p>
    </div>
    <div class="progress__bar--days">
      <p class="progress__bar">22 days</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar.vue',
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/ProgressBar.scss';
</style>
