import {shallowMount} from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter Test', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    test('Component should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('H2 should contain the default value', () => {
        const h2Elem = wrapper.find('h2');
        expect(h2Elem.exists()).toBeTruthy();

        const h2Text = h2Elem.text();
        expect(h2Text).toBe('Counter');
    });

    test('Default value should be 10', async() => {
        const pText = wrapper.find('[data-test-id="counter"]').text();
        expect(pText).toBe('10');
    });

    test('Increase & decrease buttons are increasing/decreasing 1 to counter', async() => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('[data-test-id="increase-counter-button"], [data-test-id="decrease-counter-button"]');

        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const counterValue = wrapper.find('[data-test-id="counter"]').text();
        expect(counterValue).toBe('11');
    });

    test('Default "start" value is working correctly', () => {
        const {start} = wrapper.props();
        const counterValue = Number(wrapper.find('[data-test-id="counter"]').text());
        expect(counterValue).toBe(start);
    });
});
