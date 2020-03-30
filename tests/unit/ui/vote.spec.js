import { shallowMount } from '@vue/test-utils';
import Vote from '../../../src/components/ui/Vote.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Vote, {
    propsData: {
      id: 10,
      optionDescription: 'Rapper, singer, songwriter, record producer, and entrepreneur',
      optionImageUrl: 'kanye.png',
      optionName: 'kanye west',
      optionVotesNegative: 2,
      optionVotesPositive: 1,
      optionSection: 'Entertainment',
      optionTime: '1 month ago'
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Vote.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
