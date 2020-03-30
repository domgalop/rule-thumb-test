import { shallowMount } from '@vue/test-utils';
import VoteProgressBar from '../../../src/components/ui/VoteProgressBar.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(VoteProgressBar, {
    propsData: {
      currentValue: '60',
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('VoteProgressBar.vue', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('is a should render negative value properly', async () => {
    expect(wrapper.find('.vote__outcome--up').text()).toBe('60%');

    wrapper.setProps({
      currentValue: '35',
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.vote__outcome--up').text()).toBe('35%');
  });

  it('is a should render positive value properly', async () => {
    expect(wrapper.find('.vote__outcome--down').text()).toBe('40%');

    wrapper.setProps({
      currentValue: '20',
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find('.vote__outcome--down').text()).toBe('80%');
  });
});
