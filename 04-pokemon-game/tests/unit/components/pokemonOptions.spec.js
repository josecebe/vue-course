import {shallowMount} from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import {pokemonsMock} from '../mocks/pokemons.mock';

describe('PokemonOptions tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemonArr: pokemonsMock
            }
        });
    });

    test('Should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Should show the 4 options correctly', () => {
        const liElems = wrapper.findAll('li');

        expect(liElems.length).toBe(4);
        expect(liElems[0].text()).toBe(pokemonsMock[0].name);
        expect(liElems[1].text()).toBe(pokemonsMock[1].name);
        expect(liElems[2].text()).toBe(pokemonsMock[2].name);
        expect(liElems[3].text()).toBe(pokemonsMock[3].name);
    });

    test('Should emit "selection" with its values when click an option', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li');

        li1.trigger('click');
        li2.trigger('click');
        li3.trigger('click');
        li4.trigger('click');

        expect(wrapper.emitted('pokemon-selection').length).toBe(4);
        expect(wrapper.emitted('pokemon-selection')[0]).toEqual([pokemonsMock[0].id]);
        expect(wrapper.emitted('pokemon-selection')[1]).toEqual([pokemonsMock[1].id]);
        expect(wrapper.emitted('pokemon-selection')[2]).toEqual([pokemonsMock[2].id]);
        expect(wrapper.emitted('pokemon-selection')[3]).toEqual([pokemonsMock[3].id]);
    });
});
