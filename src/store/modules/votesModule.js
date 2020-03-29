import getVotes from '../../api/votes.api';

const state = () => ({
  votes: [],
});

const mutations = {
  // eslint-disable-next-line no-shadow
  SET_VOTES(state, data) {
    state.votes = data;
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
