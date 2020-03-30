import { shallowMount } from '@vue/test-utils';
import App from '../../../src/App.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(App, {
    stubs: ['router-link', 'router-view', 'notifications'],
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('App.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
