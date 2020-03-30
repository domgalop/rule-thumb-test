import getVotes from '../../api/votes.api';

const state = () => ({
  votes: [],
});

const mutations = {
  SET_VOTES(state, data) {
    state.votes = data;
  },

  SET_UPDATE_VOTE(state, voteSelection) {
    state.votes.forEach((e) => {
      if (e.id === voteSelection.id) {
        if (voteSelection.currentVote === 'yes') {
          e.optionVotesPositive += 1;
        } else {
          e.optionVotesNegative += 1;
        }
      }
    });
  },
};

const actions = {
  async fetchVotes({ commit }) {
    try {
      const response = await getVotes();

      commit('SET_VOTES', response.data.voteOptions);
    } catch (error) {
      console.log('api error');
    }
  },
};

const getters = {};

const modules = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules,
};
