import { shallowMount } from '@vue/test-utils';
import TheNavbar from '../../../src/components/layout/TheNavbar.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(TheNavbar, {
    stubs: ['router-link', 'router-view'],
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('TheNavbar.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
