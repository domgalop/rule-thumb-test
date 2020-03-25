import { shallowMount } from '@vue/test-utils';
import Search from '../../../src/components/ui/Search.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Search);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Search.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
