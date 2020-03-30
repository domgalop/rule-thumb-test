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

  it('Should render the main title page', () => {
    expect(wrapper.find('.main__title').exists()).toBeTruthy();
  });
});
