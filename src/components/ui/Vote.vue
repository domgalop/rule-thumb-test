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
          <button
            @mouseout=isNotHoveringButton
            @mouseover='isHoveringButton("up")'
            class="vote__button vote--up"
          >
            <i class="fas fa-thumbs-up"></i>
          </button>
          <button
            @mouseout=isNotHoveringButton
            @mouseover='isHoveringButton("down")'
            class="vote__button vote--down"
          >
            <i class="fas fa-thumbs-down"></i>
          </button>
          <button
            @mouseout=isNotHoveringButton
            @mouseover='isHoveringButton("now")'
            class="vote__button vote--now"
          >
            vote now
          </button>
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
  data() {
    return {
      hovering: false,
      hoveringClass: 'vote__wrapper__hovering',
    };
  },
  props: {
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
    isHoveringButton(borderColor) {
      this.hovering = true;
      this.hoveringClass = `vote__wrapper__hovering--${borderColor}`;
    },
    isNotHoveringButton() {
      this.hovering = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../styles/components/Vote.scss';
</style>
