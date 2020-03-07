<script>
    import {mapGetters, mapMutations, mapState} from "vuex";

    export default {
        name: "SurveyControlRenderless",
        props: {
            enableContinueFillingWithEnter: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            ...mapState(['progressIndex', 'answeredQuestions']),
            ...mapGetters(['surveyLength', 'numberOfQuestionsInSurvey']),
            progressWidth() {
                return 'width: ' + (10 / this.surveyLength) * this.answeredQuestions + 'rem;';
            },
        },
        methods: {
            ...mapMutations(['updateProgressIndex']),

            /*
            * Advance the survey to the next question.
            * */
            advanceSurvey() {
                this.$emit('survey:transition', 'advance-survey');

                this.updateProgressIndex({
                    value: this.progressIndex + 1,
                });
            },

            /*
            * Retreat survey to previous question.
            * */
            retreatSurvey() {
                this.$emit('survey:transition', 'retreat-survey');

                this.updateProgressIndex({
                    value: this.progressIndex - 1,
                });
            },

            /*
            * Handler for registering keyboard events for survey control
            * */
            handleKeyboardEventListener(event) {

                // if currently active element is not body, then do nothing. Since
                // user may be in a form element as textarea and press the arrows keys.
                if (document.activeElement !== null &&
                    document.activeElement !== document.body &&
                    document.activeElement !== document.documentElement &&
                    document.activeElement.parentNode !== this.$refs.navigationControls) {
                    return;
                }

                if (event.key === 'ArrowUp') {
                    this.retreatSurvey();
                } else if (event.key === 'ArrowDown') {
                    this.advanceSurvey();
                } else if (event.key === 'Enter' && this.enableContinueFillingWithEnter) {
                    this.advanceSurvey();
                }
            },
        },
        mounted() {
            document
                .addEventListener('keydown', handler(this));
        },
        beforeDestroy() {
            document
                .removeEventListener('keydown', handler(this));
        },
        render(createElement, hack) {
            return this.$scopedSlots.default({

                // data
                answeredQuestions: this.answeredQuestions,
                progressWidth: this.progressWidth,
                numberOfQuestionsInSurvey: this.numberOfQuestionsInSurvey,

                // methods
                advanceSurvey: this.advanceSurvey,
                retreatSurvey: this.retreatSurvey,
                handleKeyboardEventListener: this.handleKeyboardEventListener,

            });
        }
    }

    function handler(thisComponentInstance) {
        return function(event){
            console.log(event.key);
            // if currently active element is not body, then do nothing. Since
            // user may be in a form element as textarea and press the arrows keys.
            if (document.activeElement !== null &&
                document.activeElement !== document.body &&
                document.activeElement !== document.documentElement &&
                document.activeElement.parentNode !== this.$refs.navigationControls) {
                return;
            }

            if (event.key === 'ArrowUp') {
                thisComponentInstance.retreatSurvey();
            } else if (event.key === 'ArrowDown') {
                thisComponentInstance.advanceSurvey();
            } else if (event.key === 'Enter' && this.enableContinueFillingWithEnter) {
                thisComponentInstance.advanceSurvey();
            }
        };

    }
</script>
