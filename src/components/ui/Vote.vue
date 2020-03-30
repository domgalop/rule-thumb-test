<template>
    <article
        :class="'vote__wrapper '+ [ hovering ? hoveringClass : '']">
        <div class="vote__information">
          <span class=" vote__outcome">
             <i class="fas fa-thumbs-up"></i>
          </span>
          <img
            :src="require(`../../assets/images/${this.optionImageUrl}`)"
            alt="Kanye West"
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
              :class="'vote__button vote--up '+ [ hovering ? 'vote__button--border' : '']"
            >
              <i class="fas fa-thumbs-up"></i>
            </button>
            <button
              @click='saveCurrentVote("no")'
              @mouseout=isNotHoveringButton
              @mouseover='isHoveringButton("down")'
              :class="'vote__button vote--down '+ [ hovering ? 'vote__button--border' : '']"
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
        <VoteProgressBar />
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
    };
  },
  props: {
    id: {
      required: true,
      type: Number,
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
    optionNegativeRanking: {
      required: true,
      type: Number,
    },
    optionPositiveRanking: {
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
    optionTotalVotes: {
      required: true,
      type: Number,
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
    saveCurrentVote(Voteselected) {
      this.currentVote = Voteselected;
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
      this.currentVote = '';
      this.AlreadyVote = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/Vote.scss';
</style>
