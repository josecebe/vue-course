import getPokemonOptions, {getPokemons, getPokemonNames} from '@/helpers/getPokemonOptions';
import {pokemonsMock} from '../mocks/pokemons.mock';

describe('GetPokemonOptions Tests', () => {
    test('Should return an array of numbers', () => {
        const pokemons = getPokemons();

        expect(pokemons.length).toBe(650);
        expect(pokemons[0]).toBe(1);
        expect(pokemons[500]).toBe(501);
        expect(pokemons[649]).toBe(650);
    });

    test('getPokemonNames should return a 4 pokemons array', async() => {
        const pokemonObjs = await getPokemonNames([1, 2, 3, 4]);

        expect(pokemonObjs).toMatchObject(pokemonsMock);
    });

    test('getPokemonOptions should return 4 pokemons array', async() => {
        const pokemonOptions = await getPokemonOptions();

        const pokemonsMock = [
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
        ];

        expect(pokemonOptions.length).toBe(4);
        expect(pokemonOptions).toMatchObject(pokemonsMock);
    });
});
