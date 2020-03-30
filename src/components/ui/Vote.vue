<template>
    <article
        :class="'vote__wrapper '+ [ hovering ? hoveringClass : '']">
        <div class="vote__information">
          <span
            :class="'vote__outcome '+
            [ this.optionVotesPositive > this.optionVotesNegative ?
              'vote__outcome--positive' : 'vote__outcome--negative']"
          >
            <i :class="'fas fa-thumbs-'+
            [ this.optionVotesPositive > this.optionVotesNegative ? 'up' : 'down']"
            >
            </i>
          </span>
          <img
            :src="require(`../../assets/images/${this.optionImageUrl}`)"
            :alt="`${optionName}`"
            class="vote__person__image"
          >
          <p class="vote__person">{{ optionName }}</p>
          <p class="vote__time">
            <span class="vote__time--highlight">{{ optionTime }} in</span> {{ optionSection }}
          </p>
          <p class="vote__person__description">{{ optionDescription }}</p>
          <div v-if='!AlreadyVote'>
            <button
              @click='saveCurrentVote("yes")'
              @mouseout=isNotHoveringButton
              @mouseover='isHoveringButton("up")'
              :class="'vote__button vote--up '+ [ votePosivite ? 'vote__button--border' : '']"
            >
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button
              @click='saveCurrentVote("no")'
              @mouseout=isNotHoveringButton
              @mouseover='isHoveringButton("down")'
              :class="'vote__button vote--down '+ [ votesNegative ? 'vote__button--border' : '']"
            >
              <i class="fas fa-thumbs-down"></i>
            </button>
            <button
              @mouseout=isNotHoveringButton
              @mouseover='isHoveringButton("now")'
              class="vote__button vote--now"
              @click='voteNofication'
            >
              vote now
            </button>
          </div>
          <div v-if='AlreadyVote'>
             <button
              @mouseout=isNotHoveringButton
              @mouseover='isHoveringButton("now")'
              class="vote__button vote--now"
              @click='AlreadyVote = false'
            >
              Vote Again
            </button>
          </div>
        </div>
        <VoteProgressBar
          :currentValue=progressPercentage
        />
    </article>
</template>


<script>
import { mapMutations } from 'vuex';
import VoteProgressBar from './VoteProgressBar.vue';

export default {
  name: 'Vote',
  components: {
    VoteProgressBar,
  },
  data() {
    return {
      AlreadyVote: false,
      currentVote: '',
      hovering: false,
      hoveringClass: 'vote__wrapper__hovering',
      votePosivite: false,
      votesNegative: false,
    };
  },
  computed: {
    progressPercentage() {
      return ((
        this.optionVotesPositive * 100) / (this.optionVotesPositive + this.optionVotesNegative)
      ).toFixed(0);
    },
  },
  props: {
    id: {
      required: true,
      type: Number,
    },
    optionAlreadyVoted: {
      default: false,
      required: true,
      type: Boolean,
    },
    optionDescription: {
      required: true,
      type: String,
    },
    optionImageUrl: {
      default: 'placeholder.png',
      required: true,
      type: String,
    },
    optionName: {
      required: true,
      type: String,
    },
    optionVotesNegative: {
      required: true,
      type: Number,
    },
    optionVotesPositive: {
      required: true,
      type: Number,
    },
    optionSection: {
      required: true,
      type: String,
    },
    optionTime: {
      required: true,
      type: String,
    },
  },
  methods: {
    ...mapMutations('votesModule', ['SET_UPDATE_VOTE']),
    isHoveringButton(borderColor) {
      this.hovering = true;
      this.hoveringClass = `vote__wrapper__hovering--${borderColor}`;
    },
    isNotHoveringButton() {
      this.hovering = false;
    },
    saveCurrentVote(voteSelected) {
      this.currentVote = voteSelected;

      if (voteSelected === 'yes') {
        this.votePosivite = true;
        this.votesNegative = false;
      } else {
        this.votePosivite = false;
        this.votesNegative = true;
      }
    },
    voteNofication() {
      if (this.currentVote === '') {
        this.$notify({
          group: 'vote',
          title: '<h3>Please Select an option</h3>',
          text: '',
          type: 'warning',
          duration: 3000,
          speed: 200,
        });
      } else {
        this.setVote();
      }
    },
    setVote() {
      this.SET_UPDATE_VOTE({
        id: this.id,
        currentVote: this.currentVote,
      });

      this.$notify({
        group: 'vote',
        title: '<h3>Thank you for voting!</h3>',
        text: '',
        type: 'success',
        duration: 3000,
        speed: 200,
      });

      this.resetVoteStatus();
    },
    resetVoteStatus() {
      this.AlreadyVote = true;
      this.currentVote = '';
      this.votePosivite = false;
      this.votesNegative = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/Vote.scss';
</style>
