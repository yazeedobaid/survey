<template>
    <button
        type="submit"
        :class="buttonTheme"
    >
        <span>Submit</span>
    </button>
</template>

<script>
    import ThemeMixin from '../../Mixins/ThemeMixin';

    export default {
        name: "SubmitResponse",
        mixins: [ThemeMixin],
    }
</script>
