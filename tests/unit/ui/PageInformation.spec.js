import { shallowMount } from '@vue/test-utils';
import PageInformation from '../../../src/components/ui/PageInformation.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(PageInformation);
  wrapper.setData({
    showInfo: true,
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('PageInformation.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('should close the component when the user clicks on button', async () => {
    expect(wrapper.find('.page__information').exists()).toBeTruthy();

    wrapper.find('.page__button__close').trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.page__information').exists()).toBeFalsy();
  });
});
