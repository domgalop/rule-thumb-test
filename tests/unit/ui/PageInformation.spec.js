import { shallowMount } from '@vue/test-utils';
import PageInformation from '../../../src/components/ui/PageInformation.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(PageInformation);
});

afterEach(() => {
  wrapper.destroy();
});

describe('PageInformation.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});
