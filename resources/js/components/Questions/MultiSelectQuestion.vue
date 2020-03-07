<template>
    <fieldset>
        <legend-component :label-id="questionId(id)"
                          :label-text="title"/>


        <div class="mx-4 flex flex-col justify-center items-start" v-for="option in options">
            <label class="mb-3 inline-flex items-center justify-center cursor-pointer">
                <input class="checkbox-input"
                       :id="questionId(id) + '-' + option.id"
                       type="checkbox"
                       :name="questionId(id)"
                       :data-option-id="option.id"
                       :class="multiSelectQuestionTheme"
                       :checked="answer.includes(option.id)"
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
        name: "MultiSelectQuestion",
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
                type: Array,
            },
            options: {
                type: Array,
                required: true,
            },
        },
        data() {
            return {
                currentAnswer: new Set(),
            };
        },
        mixins: [ThemeMixin],
        computed: {
            ...mapGetters(['questionId']),
        },
        methods: {
            ...mapMutations(['commitAnswer']),

            handleChange(event) {
                const checkbox = event.target;
                let answer = checkbox.dataset.optionId;

                if (checkbox.checked) {
                    this.currentAnswer.add(answer);
                } else {
                    this.currentAnswer.delete(answer);
                }

                this.$emit('input', answer);

                this.commitAnswer({
                    questionId: this.id,
                    answer: [...this.currentAnswer],
                });
            }
        }
    }
</script>

<style scoped>

    .checkbox-input:checked, .checkbox-input:hover {
        background-image: url('/img/checkbox.svg');
        background-origin: border-box;

    }
</style>
