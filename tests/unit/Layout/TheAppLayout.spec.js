import { shallowMount } from '@vue/test-utils';
import TheAppLayout from '../../../src/components/layout/TheAppLayout.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(TheAppLayout);
});

afterEach(() => {
  wrapper.destroy();
});

describe('TheAppLayout.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
