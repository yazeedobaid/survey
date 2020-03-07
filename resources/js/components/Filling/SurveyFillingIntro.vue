<template>
    <div class="flex flex-col justify-center items-center">
        <h1 class="inline-block ml-2 mb-1 text-2xl" :class="textTheme">
            {{ title }}
        </h1>
        <hr class="w-screen"/>
        <button
            type="button"
            class="inline-block ml-2 mt-2"
            :class="buttonTheme"
            @click="startFillingSurvey"
        >
            Start
        </button>
    </div>
</template>

<script>
    import ThemeMixin from '../../Mixins/ThemeMixin';
    import {mapMutations, mapState} from 'vuex';

    export default {
        name: "SurveyFillingIntro",
        props: {
            title: {
                required: true,
                type: String,
            },
        },
        mixins: [ThemeMixin],
        computed: {
            ...mapState(['progressIndex']),
        },
        methods: {
            ...mapMutations(['updateProgressIndex']),

            /*
            * Start filling out the survey
            * */
            startFillingSurvey() {
                this.updateProgressIndex({
                    value: this.progressIndex + 1,
                });
            }
        }
    }
</script>
