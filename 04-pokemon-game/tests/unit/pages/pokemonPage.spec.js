import {shallowMount, mount} from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
import {pokemonsMock} from '../mocks/pokemons.mock';

describe('PokemonPage tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage);
    });

    test('Should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Should call mixPokemonArray method on mount', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray');

        wrapper = shallowMount(PokemonPage);

        expect(mixPokemonArraySpy).toHaveBeenCalled();
    });

    test('Should match the snapshot when pokemons are loaded', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: null,
                }
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Should show PokemonPicture & PokemonOptions components', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: null,
                }
            }
        });

        const pokemonPicture = wrapper.findComponent(PokemonPicture);
        const pokemonOptions = wrapper.findComponent(PokemonOptions);

        expect(pokemonPicture.exists()).toBeTruthy();
        expect(pokemonOptions.exists()).toBeTruthy();
        expect(pokemonPicture.props('pokemonId')).toEqual(pokemonsMock[0].id);
        expect(pokemonOptions.props('pokemonsArr')).not.toBeNull();
    });

    test('CheckAnswer method should works correctly', async() => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: null,
                }
            }
        });

        await wrapper.vm.checkAnswer(1);

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBeTruthy();
        expect(wrapper.vm.message).toBe(`Correct! ${pokemonsMock[0].name}`);

        await wrapper.vm.checkAnswer(2);
        expect(wrapper.vm.message).toBe(`Oops! ${pokemonsMock[0].name}`);
    });
});
