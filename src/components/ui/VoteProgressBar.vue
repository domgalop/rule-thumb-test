<template>
  <div class="vote__progress__bar">
    <label  class="vote__progress__bar__name" for="file">Vote progress:</label>
    <span class="vote__outcome--up">
      <i class="fas fa-thumbs-up"></i>
      {{ currentValue }}%
    </span>
    <span class="vote__outcome--down">
      <i class="fas fa-thumbs-down"></i>
      {{ `${(100 - currentValue)}%` }}
    </span>
    <progress
      class="vote__progress__bar__porcentage"
      max="100"
      :value="`${this.currentValue}`"
    >
    </progress>
  </div>
</template>

<script>
export default {
  name: 'VoteProgressBar',
  props: {
    currentValue: {
      default: '50',
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/VoteProgressBar.scss';
</style>
