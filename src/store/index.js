import VuexPersist from 'vuex-persist';
import Vue from 'vue';
import Vuex from 'vuex';
import votesModule from './modules/votesModule';

const vuexPersist = new VuexPersist({
  key: 'ruleOfThumbPersistence',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    votesModule,
  },
  plugins: [vuexPersist.plugin],
});
