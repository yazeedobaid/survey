<template>
    <section class="flex flex-col justify-center items-start">
        <component :is="componentName"
                   v-bind="page"/>
        <continue-filling-button class="relative" :is-question="page.is_question"/>
    </section>
</template>

<script>
    import TextQuestion from "./Questions/TextQuestion";
    import MultiLineTextQuestion from './Questions/MultiLineTextQuestion'
    import SubmitResponse from "./Filling/SubmitResponse";
    import ThankYou from "./Filling/ThankYou";
    import SingleSelectQuestion from "./Questions/SingleSelectQuestion";
    import ContinueFillingButton from "./Supporting/ContinueFillingButton";

    export default {
        name: "SurveyPage",
        components: {
            ContinueFillingButton,
            TextQuestion, MultiLineTextQuestion, SingleSelectQuestion, SubmitResponse, ThankYou
        },
        props: {
            page: {
                required: true,
                type: Object,
            },
            componentName: {
                required: true,
                type: String,
                validator: function (type) {
                    return [
                        'text-question',
                        'submit-response',
                        'thank-you',
                        'survey-filling-intro',
                        'multi-line-text-question',
                        'single-select-question',
                        'multi-select-question',
                    ].includes(type);
                }
            }
        },
    }
</script>

<style scoped>

</style>
