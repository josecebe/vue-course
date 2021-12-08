<template>
    <h1>Counter using Vuex</h1>
    <h2>Direct access: {{$store.state.counter.count}}</h2>
    <h2>Computed: {{countComputed}}</h2>
    <h2>Map access: {{count}}</h2>
    <h2>Last mutation: {{lastMutation}}</h2>
    <h2>Last int: {{lastInt}}</h2>

    <button @click="increment">Increment +1</button>
    <button @click="incrementBy(5)">Increment +5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">Increment +RANDOM</button>

    <h2>Direct getter: {{$store.getters['counter/getSquareCount']}}</h2>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    methods: {
        increment() {
            this.$store.commit('counter/increment');
        },
        incrementBy(val) {
            this.$store.commit('counter/incrementBy', val);
        },
        ...mapActions('counter', ['incrementRandomInt'])
        // ...mapActions('counter', {
        //     randomInt: 'incrementRandomInt'
        // }),
    },

    computed: {
        countComputed() {
            return this.$store.state.counter.count;
        },
        ...mapState('counter', ['count','lastMutation','lastInt','isLoading'])
        // ...mapState({ 
        //     count: state => state.counter.count,
        //     lastMutation: 'lastMutation'
        // }),
    }
}
</script>
