<template>
    <article class="vote__wrapper">
        <div class="vote__information">
          <span class=" vote__outcome">
             <i class="fas fa-thumbs-up"></i>
          </span>
          <img
            class="vote__person__image"
            :src="require(`../../assets/images/${this.imageUrl}`)"
            alt="Kanye West"
          >
          <p class="vote__person">kanye west</p>
          <p class="vote__time">
            <span class="vote__time--highlight">1 month ago in</span> in Entertainment
          </p>
          <p class="vote__person__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="vote__button vote--up">
            <i class="fas fa-thumbs-up"></i>
          </button>
          <button class="vote__button vote--down" >
            <i class="fas fa-thumbs-down"></i>
          </button>
          <button class="vote__button vote--now">vote now</button>
        </div>
        <VoteProgressBar />
    </article>
</template>

<script>

import VoteProgressBar from './VoteProgressBar.vue';

export default {
  name: 'Vote',
  components: {
    VoteProgressBar,
  },
  props: {
    imageUrl: {
      default: 'placeholder.png',
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/Vote.scss';
</style>
