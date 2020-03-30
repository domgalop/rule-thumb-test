<template>
    <section class="vote__section">
        <Vote
          v-for="(vote ,index) in votes"
          :key="index"
          :id=vote.id
          :optionDescription=vote.optionDescription
          :optionImageUrl=vote.optionImageUrl
          :optionName=vote.optionName
          :optionVotesPositive=vote.optionVotesPositive
          :optionVotesNegative=vote.optionVotesNegative
          :optionSection=vote.optionSection
          :optionTime=vote.optionTime
        />
    </section>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Vote from './Vote.vue';

export default {
  name: 'VoteSection',
  components: {
    Vote,
  },
  computed: mapState({
    ...mapState('votesModule', ['votes']),
  }),
  methods: {
    ...mapActions('votesModule', ['fetchVotes']),
  },
  async mounted() {
    this.fetchVotes();
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/VoteSection.scss';
</style>
