<template>
    <section class="w-full h-screen min-h-screen flex justify-center items-center">

        <loading-oval v-if="surveyStatus === 'pending'"/>

        <template v-if="surveyFilling">
            <survey-filling :surveyStatus="surveyStatus"
                            @update:surveyStatus="updateSurveyState($event)"
                            :withinFillingProcess="withinFillingProcess"
            />
        </template>

    </section>
</template>

<script>

    import {mapActions, mapState} from "vuex";
    import LoadingOval from "./Icons/LoadingOval";
    import SurveyFilling from "./Filling/SurveyFilling";

    export default {
        name: "SurveyComponent",
        components: {SurveyFilling, LoadingOval,},
        data() {
            return {
                surveyStatus: 'idle',
            };
        },
        computed: {
            ...mapState(['survey']),

            /*
            * Survey status is filling
            * */
            surveyFilling() {
                return ['filling', 'filling:pending', 'filling:submitted'].includes(this.surveyStatus);
            },

            withinFillingProcess() {
                return ['filling', 'filling:pending', 'filling:failure'].includes(this.surveyStatus);
            },
        },
        created() {
            this.updateSurveyState('pending');

            this.fetchSurvey()
                .then(() => {
                    this.updateSurveyState('filling');
                })
                .catch(error => {
                    this.updateSurveyState('failure');
                    console.log(`Error in fetching data from server ${error}`);
                });

        },
        methods: {
            ...mapActions(['fetchSurvey']),

            /*
            * Updating survey state.
            * */
            updateSurveyState(newState) {
                const availableStates = [
                    'idle',
                    'pending',
                    'filling',
                    'filling:pending',
                    'filling:submitted',
                    'filling:failure',
                    'failure',
                ];

                if (!availableStates.includes(newState)) {
                    throw new Error(`Invalid survey state: ${newState}`);
                }

                this.surveyStatus = newState;
            },
        },
    }
</script>

<style scoped>

</style>
