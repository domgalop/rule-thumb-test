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

  it('Should render the main app correctly', () => {
    expect(wrapper.find('.page__container').exists()).toBeTruthy();
  });

  it('Should render votes title', () => {
    expect(wrapper.find('.vote__title').exists()).toBeTruthy();
  });
});
