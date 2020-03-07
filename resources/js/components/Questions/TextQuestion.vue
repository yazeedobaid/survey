<template>
    <div>
        <label-component :label-id="questionId(id)"
                         :label-text="title"></label-component>
        <input
            :id="questionId(id)"
            type="text"
            :value="answer"
            :aria-labelledby="questionId(id)"
            :placeholder="placeholder"
            :class="textQuestionTheme"
            @keydown.enter.prevent
            @input="handleChange"
        />
    </div>
</template>

<script>
    import ThemeMixin from "../../Mixins/ThemeMixin";
    import {mapGetters, mapMutations} from "vuex";
    import LabelComponent from "./LabelComponent";

    export default {
        name: "TextQuestion",
        components: {LabelComponent},
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
            }
        },
        mixins: [ThemeMixin],
        computed: {
            ...mapGetters(['questionId']),
        },
        methods: {
            ...mapMutations(['commitAnswer']),

            handleChange(event) {
                let answer = event.target.value;
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

</style>
