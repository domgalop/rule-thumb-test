import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VoteSection from '../../../src/components/ui/VoteSection.vue';
import votesMock from '../../../src/api/mockData/voteMockData';

const localVue = createLocalVue();

localVue.use(Vuex);

let wrapper;

const votesModule = {
  namespaced: true,
  state: {
    votesMock: votesMock,
  },
  actions: {
    fetchVotes: jest.fn(),
  },
};

const store = new Vuex.Store({
  modules: {
    votesModule,
  },
});

beforeEach(() => {
  wrapper = shallowMount(VoteSection, {
    localVue,
    store,
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('VoteSection.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
