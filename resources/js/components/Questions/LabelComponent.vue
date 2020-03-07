<template>
    <label :for="labelId"
           :class="questionLabelTheme"
    >
        {{ labelText }}
    </label>
</template>

<script>

    import ThemeMixin from "../../Mixins/ThemeMixin";

    export default {
        name: "LabelComponent",
        props: {
            labelText: {
                type: String,
                required: true,
            },
            labelId: {
                type: String,
                required: true,
            }
        },
        mixins: [ThemeMixin]
    }
</script>

<style scoped>

</style>
