<template>
    <div class="pokemon-container">
        <img alt="Pokémon" class="hidden-pokemon" data-test-id="hidden-pokemon"
            :src="imgSrc" />

        <img alt="Pokémon" class="fade-in" data-test-id="visible-pokemon"
            v-if="showPokemon"
            :src="imgSrc" />
    </div>
</template>

<script>
export default {
    name: 'PokemonPicture',

    props: {
        pokemonId: {
            type: Number,
            required: true,
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false,
        }
    },

    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    }
}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    width: 100vw;
    margin-left: -50vw;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>
