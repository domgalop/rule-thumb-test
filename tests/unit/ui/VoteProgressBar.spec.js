import { shallowMount } from '@vue/test-utils';
import VoteProgressBar from '../../../src/components/ui/VoteProgressBar.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(VoteProgressBar);
});

afterEach(() => {
  wrapper.destroy();
});

describe('VoteProgressBar.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
