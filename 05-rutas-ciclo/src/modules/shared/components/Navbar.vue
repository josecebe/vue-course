<template>
    <div>
        <!--
        <router-link :to="{name: 'Home'}">Pokemon List</router-link>
        <router-link :to="{name: 'PokemonPage', params: {pokemonId: 10}}">Pokemon by ID</router-link>
        <router-link :to="{name: 'AboutPage'}">About</router-link>
        -->
        <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link" />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    data() {
        return {
            links: [
                { to: 'PokemonHome', name: 'Pokemons'},
                { to: 'PokemonPage', name: 'Por ID', id: 151},
                { to: 'AboutPage', name: 'About'},

                { to: 'OnePieceCharacters', name: 'One Piece Characters'},
                { to: 'OnePieceAbout', name: 'One Piece About'},

                { to: 'https://google.com', name: 'Google'},
            ]
        }
    },

    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink'))
    }
}
</script>


<style scoped>
div {
    padding: 0 30px;
}

a {
    color: #2c3e50;
    font-weight: bold;
    margin: 0 10px;
}

.router-link-exact-active {
    color: #42b983;
}
</style>
