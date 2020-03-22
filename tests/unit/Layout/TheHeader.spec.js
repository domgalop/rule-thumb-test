import { shallowMount } from '@vue/test-utils';
import TheHeader from '../../../src/components/layout/TheHeader.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(TheHeader);
});

afterEach(() => {
  wrapper.destroy();
});

describe('TheHeader.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
