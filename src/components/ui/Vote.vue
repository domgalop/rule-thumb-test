<template>
    <article class="vote__wrapper">
        <p>icon</p>
        <p>kanye West</p>
        <p><span>1 month ago in</span> in Entertainment</p>
        <p>test text</p>
        <button>Up</button>
        <button>down</button>
        <button>Vote</button>
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
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/Vote.scss';
</style>
