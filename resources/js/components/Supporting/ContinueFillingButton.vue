<template>
    <survey-control-renderless
        :enable-continue-filling-with-enter=true
        #default="{advanceSurvey}">
        <button v-show="isQuestion" type="button"
                :class="buttonTheme"
                class="flex justify-center items-center"
                @click="advanceSurvey">
            <kbd class="text-xs font-extrabold sr-only">Enter</kbd>
            <icon-base icon-name="enter-key" icon-color="text-white" view-box="-4 -4 24 24">
                <enter-key/>
            </icon-base>
            &nbsp;
            <span>Continue</span>
        </button>
    </survey-control-renderless>
</template>

<script>
    import ThemeMixin from "../../Mixins/ThemeMixin";
    import IconBase from "../Icons/IconBase";
    import EnterKey from "../Icons/EnterKey";
    import SurveyControlRenderless from "./SurveyControlRenderless";

    export default {
        name: "ContinueFillingButton",
        components: {SurveyControlRenderless, IconBase, EnterKey},
        mixins: [ThemeMixin],
        props: {
            isQuestion: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>

<style scoped>

</style>
