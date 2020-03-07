/**
 * Vuex store getters
 * */

const getters = {

    /*
    * Get the current survey page using progress index
    * */
    currentPage(state) {
        return state.survey.pages[state.progressIndex];
    },

    /*
    * Update the progress of the survey
    * */
    surveyLength(state) {
        return state.survey.pages.length;
    },

    /*
    * Get a formatted question id.
    * */
    questionId(state) {
        return (questionId) => {
            const pageIndex = state.survey.pages.findIndex(page => page.id === questionId);

            return 'question-' + state.survey.pages[pageIndex].id;
        };
    },

    /*
    * Get number of actual questions to answer in survey.
    * */
    numberOfQuestionsInSurvey(state) {
        return state.survey.numberOfQuestions;
    }

};

export default getters;
