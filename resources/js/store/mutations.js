/*
* Check if given page index is a question.
* */
function isPageAQuestion(pages, currentProgressIndex) {
    return pages[currentProgressIndex].is_question;
}

/*
* Check if given progress index is within survey pages array.
* */
function progressIndexWithinSurveyPages(surveyLength, progressIndex) {
    return 0 <= progressIndex && progressIndex < surveyLength;
}

/* Get new value for answered questions based on current page and new one.
 * If current page or new page are a question, then we will compare
 * current progress index with new one and update answered questions
 * accordingly.
 */
function updateAnsweredQuestions(pages, answeredQuestions, currentProgressIndex, newProgressIndex) {


    if (isPageAQuestion(pages, currentProgressIndex) && (currentProgressIndex < newProgressIndex)) {

        return ++answeredQuestions;

    } else if (isPageAQuestion(pages, newProgressIndex) && (currentProgressIndex > newProgressIndex)) {

        return --answeredQuestions;

    }

    return answeredQuestions;
}

/**
 * Vuex store mutations
 * */

const mutations = {

    /*
    * Populate the survey to store state.
    * */
    commitSurvey(state, payload) {

        let survey = payload.survey;

        survey.pages.unshift({
            id: 'survey-filling-intro',
            componentName: 'survey-filling-intro',
            title: survey.title,
        });

        survey.pages.push({
            id: 'submit-response',
            componentName: 'submit-response',
        });
        state.survey = survey;
    },

    /*
    * Clear the store survey and its data component.
    * */
    clearSurvey(state) {
        state.survey.pages = [];
        state.survey.numberOfQuestions = 0;
    },

    /*
    * Commits a question answer to the store.
    * */
    commitAnswer(state, payload) {
        if (payload.hasOwnProperty('questionId')) {
            const questionIndex = state.survey.pages.findIndex(question => {
                return question.id === payload.questionId;
            });

            if (questionIndex !== false) {
                state.survey.pages[questionIndex].answer = payload.answer;

            }
        }
    },

    /*
    * Update the progress of the survey
    * */
    updateProgressIndex(state, payload) {
        const surveyLength = state.survey.pages.length;
        const currentProgressIndex = state.progressIndex;
        const newProgressIndex = payload.value;

        if (progressIndexWithinSurveyPages(surveyLength, newProgressIndex)) {

            state.answeredQuestions =
                updateAnsweredQuestions(
                    state.survey.pages,
                    state.answeredQuestions,
                    currentProgressIndex,
                    newProgressIndex
                );

            state.progressIndex = newProgressIndex;
        }
    },

};

export default mutations;
