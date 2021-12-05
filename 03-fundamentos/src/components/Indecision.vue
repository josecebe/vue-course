<template>
    <img v-if="imgUrl" :src="imgUrl" alt="bg" />
    <div class="bg-dark"></div>

    <div class="indecision-container">
        <input data-test-id="input" type="text" placeholder="Make a question" v-model="question" />
        <p>Remember to end your question using a interrogation symbol '?'</p>

        <div>
            <h2>{{question}}</h2>
            <h1 v-if="isValidQuestion">{{answer}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Indecision',

    data() {
        return {
            question: null,
            answer: null,
            imgUrl: null,
            isValidQuestion: false,
        }
    },

    methods: {
        async getAnswer() {
            try {
                this.answer = 'Thinking...'

                const {answer, image} = await fetch('https://yesno.wtf/api')
                    .then(r => r.json())

                switch(answer) {
                    case 'yes':
                        this.answer = '¡Sí!';
                        break;
                    case 'no':
                        this.answer = '¡No!';
                        break;
                    case 'maybe':
                        this.answer = '¡Puede ser!';
                        break;
                }

                this.imgUrl = image;
                this.isValidQuestion = true;

            } catch(error) {
                console.log('IndecisionComponent: API is down');
                this.answer = 'Couldn\'t be loaded';
                this.imgUrl = null;
            }
        },
    },

    watch: {
        question(newValue, oldValue) {
            this.isValidQuestion = false;
            console.log({newValue});

            if (!newValue.endsWith('?')) return;

            this.getAnswer();
        }
    }
}
</script>

<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>
