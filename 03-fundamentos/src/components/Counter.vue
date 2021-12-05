<template>
    <h2>{{title}}</h2>
    <p>{{counter}} <sup>2</sup> = {{getSquareValue}}</p>
    <p data-test-id="counter">{{counter}}</p>

    <div class="buttons">
        <button data-test-id="increase-counter-button" @click="increaseCounter">+1</button>
        <button data-test-id="decrease-counter-button" @click="decreaseCounter">-1</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',

    props: {
        title: {
            type: String,
            default: 'Counter',
        },
        start: {
            type: Number,
            default: 10,
            validator(value) {
                return value >= 0;
            },
        },
    },

    data() {
        return {
            counter: this.start,
        }
    },

    methods: {
        increaseCounter() {
            this.counter++;
        },
        decreaseCounter() {
            this.counter--;
        }
    },

    computed: {
        getSquareValue() {
            return this.counter * this.counter;
        },
    }
}
</script>

<style>
button {
    background-color: #64BB87;
    border-radius: 5px;
    border: 0;
    color: white;
    margin : 0 5px;
    padding: 2px 8px;
    transition: background-color 0.3s;
}

button:hover {
    cursor: pointer;
    background-color: #51946c;
}
</style>
