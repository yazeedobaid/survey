<template>
    <survey-control-renderless #default="{numberOfQuestionsInSurvey, answeredQuestions, advanceSurvey, retreatSurvey}">
        <section class="absolute w-screen p-2 right-0 bottom-0 flex flex-col items-end justify-end">
            <h3 class="text-xs text-gray-700">
                {{ answeredQuestions + ' out of ' + numberOfQuestionsInSurvey + ' answered' }}
            </h3>
            <progress-bar :full-length="numberOfQuestionsInSurvey" :progress="answeredQuestions"/>
            <div ref="navigationControls" class="flex mt-2">
                <button type="button"
                        @click.prevent="advanceSurvey">
                    <icon-base icon-name="next question" class="hover:opacity-75">
                        <arrow-down/>
                    </icon-base>
                </button>
                <button type="button"
                        @click.prevent="retreatSurvey">
                    <icon-base icon-name="previous question" class="hover:opacity-75">
                        <arrow-up/>
                    </icon-base>
                </button>
            </div>
        </section>
    </survey-control-renderless>
</template>

<script>

    import ProgressBar from "./ProgressBar";
    import IconBase from "../Icons/IconBase";
    import ArrowDown from "../Icons/ArrowDown";
    import ArrowUp from "../Icons/ArrowUp";
    import SurveyControlRenderless from "./SurveyControlRenderless";

    export default {
        name: "SurveyControl",
        components: {SurveyControlRenderless, ArrowUp, ArrowDown, IconBase, ProgressBar},
    }
</script>
