import { shallowMount } from '@vue/test-utils';
import SubmitPeople from '../../../src/components/ui/SubmitPeople.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(SubmitPeople);
});

afterEach(() => {
  wrapper.destroy();
});

describe('SubmitPeople.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
