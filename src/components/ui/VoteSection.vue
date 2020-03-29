<template>
    <section class="vote__section">
        <Vote
          v-for="(image ,index) in images"
          :key="index"
          :imageUrl=image
        />
    </section>
</template>

<script>

import Vote from './Vote.vue';

export default {
  name: 'VoteSection',
  components: {
    Vote,
  },
  data() {
    return {
      images: [
        'kanye.png',
        'markzuckerberg.png',
        'cristina.png',
        'malala.png',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/VoteSection.scss';
</style>
