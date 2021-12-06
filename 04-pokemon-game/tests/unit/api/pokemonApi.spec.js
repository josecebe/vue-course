import pokemonApi from '@/api/pokemonApi';

describe('PokemonAPI Test', () => {
    test('Axios should be correctly configured to Pokemon API', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
    });
});
