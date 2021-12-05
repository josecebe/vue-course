<template>
    <div v-if="pokemon">
        <h1>Who's that Pokémon!?</h1>

        <PokemonPicture
            :pokemon-id="pokemon.id"
            :show-pokemon="showPokemon" />

        <PokemonOptions
            :pokemon-arr="pokemonArr"
            @pokemon-selection="checkAnswer" />

        <template v-if="showAnswer">
            <h2>{{message}}</h2>
            <button @click="newGame">New Game</button>
        </template>
    </div>
    <h1 v-else="pokemon">Wait, please...</h1>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
    name: 'PokemonPage',

    components: {
        PokemonPicture,
        PokemonOptions
    },

    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: null,
        }
    },

    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions();
            const randomInt = Math.floor(Math.random() * 4);
            this.pokemon = this.pokemonArr[randomInt];
        },

        checkAnswer(selectedPokemonId) {
            this.showPokemon = true;
            this.showAnswer = true;

            if (selectedPokemonId === this.pokemon.id) {
                this.message = `Correct! ${this.pokemon.name}`;
            } else {
                this.message = `Oops! ${this.pokemon.name}`;
            }
        },

        newGame() {
            this.pokemonArr = [];
            this.pokemon = null;
            this.showPokemon = false;
            this.showAnswer = false;
            this.message = null;
            this.mixPokemonArray();
        }
    },

    mounted() {
        this.mixPokemonArray();
    }
}
</script>
