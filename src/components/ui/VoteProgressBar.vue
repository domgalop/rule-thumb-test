<template>
  <div class="vote__progress__bar">
    <label  class="vote__progress__bar__name" for="file">Vote progress:</label>
    <span class="vote__outcome--up">
      <i class="fas fa-thumbs-up"></i>
      36%
    </span>
    <span class="vote__outcome--down">
      <i class="fas fa-thumbs-down"></i>
      64%
    </span>
    <progress
      class="vote__progress__bar__porcentage"
      max="100"
      value="50"
    >
    </progress>
  </div>
</template>

<script>
export default {
  name: 'VoteProgressBar',
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/VoteProgressBar.scss';
</style>
