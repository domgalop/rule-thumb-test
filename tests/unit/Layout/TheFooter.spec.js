import { shallowMount } from '@vue/test-utils';
import TheFooter from '../../../src/components/layout/TheFooter.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(TheFooter);
});

afterEach(() => {
  wrapper.destroy();
});

describe('TheFooter.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
