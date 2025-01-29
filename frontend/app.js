const app = Vue.createApp({
    data() {
        return {
            question: '',
            choices: [],
            correctChoice: null,
            feedback: '',
        };
    },
    methods: {
        async fetchQuestion() {
            try {
                const res = await axios.get('http://localhost:3000/api/trivia');
                this.question = res.data.question;
                this.choices = res.data.choices;
                this.correctChoice = res.data.correct_choice;
            } catch (error) {
                console.error('Error fetching trivia question:', error);
            }
        },
        submitAnswer(index) {
            this.feedback = index === this.correctChoice
                ? 'Correct!'
                : 'Incorrect, try again.';
        },
    },
    mounted() {
        this.fetchQuestion();
    },
});

app.mount('#app');
