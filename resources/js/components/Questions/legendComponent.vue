<template>
    <legend :for="labelId"
            :class="questionLabelTheme"
    >
        {{ labelText }}
    </legend>
</template>

<script>

    import ThemeMixin from "../../Mixins/ThemeMixin";

    export default {
        name: "LegendComponent",
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
