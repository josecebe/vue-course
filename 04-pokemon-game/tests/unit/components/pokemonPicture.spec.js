import {shallowMount} from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture';

describe('PokemonPicture tests', () => {
    test('Should match the snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Should show the hidden image and image should have the correct URL', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        });

        const hiddenImg = wrapper.find('[data-test-id="hidden-pokemon"]');
        const visibleImg = wrapper.find('[data-test-id="visible-pokemon"]');

        expect(hiddenImg.exists()).toBeTruthy();
        expect(hiddenImg.classes('hidden-pokemon')).toBeTruthy();
        expect(hiddenImg.attributes('src')).toContain('/100.svg');
        expect(visibleImg.exists()).toBeFalsy();
    });

    test('Should show the visible pokemon', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        });

        const visibleImg = wrapper.find('[data-test-id="visible-pokemon"]');

        expect(visibleImg.exists()).toBeTruthy();
        expect(visibleImg.classes('hidden-pokemon')).toBeFalsy();
    });
});
