import { shallowMount } from '@vue/test-utils';
import Hero from '../../../src/components/ui/Hero.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Hero);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Hero.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
