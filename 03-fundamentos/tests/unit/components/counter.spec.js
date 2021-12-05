import {shallowMount} from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter', () => {
    test('Component should match snapshot', () => {
        const wrapper = shallowMount(Counter);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
