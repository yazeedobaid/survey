/*
* Generic function to do async requests
* */
function asyncRequest(context, method, url, mutation, data = {}) {

    return axios({url, method, data})
        .then(response => {
            context.commit(mutation, response.data);
        })
        .catch(error => {
            throw new Error(`${error}`);
        });
}


/**
 * Vuex store actions
 * */

const actions = {

    /*
    * Update the progress of the survey
    * */
    fetchSurvey(context) {
        return asyncRequest(context, 'GET', 'survey-structure', 'commitSurvey');
    },

    submitSurveyResponse(context) {
        // asyncRequest(
        //     context,
        //     'POST',
        //     'survey-submit',
        //     'responseSaved',
        //     context.state.survey
        // );
        return Promise.resolve();
        // context.commit('responseSaved');
    }
};

export default actions;
