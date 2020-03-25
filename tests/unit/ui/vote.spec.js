import { shallowMount } from '@vue/test-utils';
import Vote from '../../../src/components/ui/Vote.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Vote);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Vote.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
