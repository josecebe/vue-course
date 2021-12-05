import {shallowMount} from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe('Indecision Tests', () => {
    let wrapper;
    let clgSpy;
    let getAnswerSpy;

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }));

    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, 'log');
        getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
        jest.clearAllMocks();
    });

    test('Should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Writing on the input should not fire the fetch request (console.log)', async() => {
        const input = wrapper.find('[data-test-id="input"]');

        await input.setValue('Hello World');

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).not.toHaveBeenCalled();
    });

    test('Writing "?" on the input should fire getAnswer method', async() => {
        const input = wrapper.find('[data-test-id="input"]');

        await input.setValue('Hellow World?');

        expect(getAnswerSpy).toHaveBeenCalled();
    });

    test('getAnswer method test - API works', async() => {
        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');

        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.imgUrl).toBe('https://yesno.wtf/assets/yes/2.gif');
        expect(wrapper.vm.answer).toBe('¡Sí!');
    });

    test('getAnswer method test - API fails', async() => {
        fetch.mockImplementationOnce(() => Promise.reject('IndecisionComponent: API is down'));
        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');

        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('Couldn\'t be loaded');
    });
});
