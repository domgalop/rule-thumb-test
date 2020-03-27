<template>
    <div class="page__information" v-if="showInfo">
      <h2 class="page__text">
        Speak out. Be heard. <span class="page__text--highlight">Be counted</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa numquam modi,
        non cupiditate similique alias.
      </p>
      <button
        class="page__button__close"
        @click="closeSubmit"
        >
        <i class="fas fa-times"></i>
      </button>
    </div>
</template>

<script>

export default {
  name: 'PageInformation',
  data() {
    return {
      showInfo: true,
    };
  },
  methods: {
    closeSubmit() {
      this.showInfo = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/PageInformation.scss';
</style>
