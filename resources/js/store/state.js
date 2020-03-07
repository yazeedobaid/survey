/**
 * Vuex State object
 * */

const state = {
    progressIndex: 0,
    answeredQuestions: 0,
    theme: {
        primaryColor: 'teal',
    },
    survey: {
        title: '',
        pages: [],
        numberOfQuestions: 0,
    },
};

export default state;
