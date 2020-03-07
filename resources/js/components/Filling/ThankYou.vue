<template>
    <div class="flex flex-col justify-center items-center">
        <h1 class="inline-block ml-2 mb-1 text-2xl" :class="textTheme">
            {{ title }}
        </h1>
        <hr class="w-screen"/>
        <h1 class="pl-2 inline-block text-sm" :class="textTheme">Thank You!</h1>
    </div>
</template>

<script>
    import ThemeMixin from '../../Mixins/ThemeMixin';

    export default {
        name: "ThankYou",
        props: {
            title: {
                type: String,
                required: true,
            }
        },
        mixins: [ThemeMixin],
    }
</script>
