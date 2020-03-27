<template>
    <Fragment>
      <div class="page__information">
        <h2 class="page__text">
          Speak out. be hard <span class="page__text--highlight">Be counted</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa numquam modi,
          non cupiditate similique alias. Non delectus veritatis quaerat ipsa! Repellat totam soluta
        </p>
        <i class="fas fa-times"></i>
      </div>
    </Fragment>
</template>

<script>

import { Fragment } from 'vue-fragment';

export default {
  name: 'PageInformation',
  components: {
    Fragment,
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/PageInformation.scss';
</style>
