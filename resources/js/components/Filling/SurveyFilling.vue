<template>
    <div class="w-full h-full flex justify-center items-center">

        <form v-if="withinFillingProcess"
              @submit.prevent="submitResponse" method="POST"
              class="w-full lg:w-1/2 h-full min-h-full mx-auto flex flex-col justify-center items-center">
            <survey-transition :direction="surveyAnimationName">
                <keep-alive>
                    <survey-page
                        :key="currentPage.id"
                        :page="currentPage"
                        :component-name="currentPage.componentName"
                    />
                </keep-alive>
            </survey-transition>
        </form>

        <survey-control v-if="surveyStatus === 'filling'"
                        @survey:transition="surveyAnimationName = $event"/>

        <survey-transition v-if="surveyStatus === 'filling:submitted'"
                           direction="advance-survey">
            <thank-you :title="survey.title"/>
        </survey-transition>

    </div>
</template>

<script>
    import SurveyTransition from "../Animations/SurveyTransition";
    import SurveyPage from "../SurveyPage";
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
    import SurveyControl from "../Supporting/SurveyControl";
    import ThankYou from "./ThankYou";

    export default {
        name: "SurveyFilling",
        components: {ThankYou, SurveyControl, SurveyPage, SurveyTransition},
        props: {
            surveyStatus: {
                type: String,
                required: true,
            },
            withinFillingProcess: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {
                surveyAnimationName: 'advance-survey',
            };
        },
        computed: {
            ...mapState(['survey']),
            ...mapGetters(['currentPage']),
        },
        methods: {
            ...mapActions(['submitSurveyResponse']),
            ...mapMutations(['clearSurvey']),

            /*
            * Submit a response
            * */
            submitResponse() {
                this.$emit('update:surveyStatus', 'filling:pending');

                this.submitSurveyResponse()
                    .then(() => {
                        this.$emit('update:surveyStatus', 'filling:submitted');
                        this.clearSurvey();
                    });

            },
        }
    }
</script>

<style scoped>

</style>
