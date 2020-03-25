import { shallowMount } from '@vue/test-utils';
import ProgressBar from '../../../src/components/ui/ProgressBar.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(ProgressBar);
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProgressBar.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
