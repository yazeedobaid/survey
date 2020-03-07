<template>
    <div class="relative">
        <label-component :label-id="questionId(id)"
                         :label-text="title"></label-component>
        <textarea
            :id="questionId(id)"
            :value="answer"
            rows=1
            :aria-labelledby="questionId(id)"
            :placeholder="placeholder"
            :class="multiLineTextQuestionTheme"
            @input="handleChange"
        ></textarea>
    </div>
</template>

<script>
    import ThemeMixin from "../../Mixins/ThemeMixin";
    import {mapGetters, mapMutations} from "vuex";
    import LabelComponent from "./LabelComponent";

    export default {
        name: "MultiLineTextQuestion",
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
        mounted() {
            document.querySelector('textarea')
                .addEventListener('keydown', this.handleKeyboardEventListener);
        },
        beforeDestroy() {
            let htmlTextAreaElement = document.querySelector('textarea');
            // Vue removes the element when its rendered conditionally using v-if and
            // don't execute beforeDestroy of it.
            if (htmlTextAreaElement) {
                htmlTextAreaElement
                    .removeEventListener('keydown', this.handleKeyboardEventListener);
            }
        },
        methods: {
            ...mapMutations(['commitAnswer']),

            /*
            * handle the change in value of textarea field.
            * */
            handleChange(event) {
                let answer = event.target.value;
                this.$emit('input', answer);

                this.commitAnswer({
                    questionId: this.id,
                    answer,
                });
            },

            /*
            * Handler for listening on Enter+Shift and Backspace keys
            * on textarea field to increase and decrease the number of
            * rows of textarea.
            * */
            handleKeyboardEventListener(event) {

                let field = event.target;

                // Get the computed styles for the element
                const computed = window.getComputedStyle(field);

                // Reset field height
                field.style.height = 'inherit';

                const paddingHeight = parseInt(computed.getPropertyValue('padding-top'), 10) +
                    parseInt(computed.getPropertyValue('padding-bottom'), 10);

                const scrollHeight = field.scrollHeight - paddingHeight;

                // Calculate the height
                const height = parseInt(computed.getPropertyValue('padding-top'), 10)
                    + scrollHeight
                    + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                    + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

                field.style.height = height + 'px';


            }
        }
    }
</script>
