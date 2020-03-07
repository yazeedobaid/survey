<template>
    <fieldset>
        <legend-component :label-id="questionId(id)"
                          :label-text="title"/>


        <div class="mx-4 flex flex-col justify-center items-start" v-for="option in options">
            <label class="mb-3 inline-flex items-center justify-center">
                <input class="radio-input"
                       :id="questionId(id) + '-' + option.id"
                       type="radio"
                       :name="questionId(id)"
                       :data-option-id="option.id"
                       :class="singleSelectQuestionTheme"
                       :checked="answer === option.id"
                       :aria-labelledby="questionId(id)"
                       @change="handleChange">
                <span class="ml-2 text-xl leading-6">{{ option.title }}</span>
            </label>
        </div>
    </fieldset>
</template>

<script>
    import ThemeMixin from "../../Mixins/ThemeMixin";
    import {mapGetters, mapMutations} from "vuex";
    import LabelComponent from "./LabelComponent";
    import LegendComponent from "./legendComponent";

    export default {
        name: "SingleSelectQuestion",
        components: {LegendComponent, LabelComponent},
        model: {
            prop: 'answer',
            event: 'input'
        },
        props: {
            id: {
                required: true,
                type: Number,
            },
            title: {
                required: true,
                type: String,
            },
            placeholder: {
                default: '',
                type: String,
            },
            answer: {
                default: '',
                type: String,
            },
            options: {
                type: Array,
                required: true,
            },
        },
        mixins: [ThemeMixin],
        computed: {
            ...mapGetters(['questionId']),
        },
        methods: {
            ...mapMutations(['commitAnswer']),

            handleChange(event) {
                let answer = event.target.dataset.optionId;
                this.$emit('input', answer);

                this.commitAnswer({
                    questionId: this.id,
                    answer,
                });
            }
        }
    }
</script>

<style scoped>

    .radio-input {
        background-image: url('/img/radio.svg');
        background-origin: border-box;

    }
</style>
