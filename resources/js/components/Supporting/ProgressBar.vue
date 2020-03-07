<template>
    <div class="relative h-1 bg-gray-400 rounded-lg" :class="tailwindMappedWidth">
            <span
                class="absolute inset-0 h-1 inline-block bg-teal-400 rounded-lg transition-width duration-500 ease-in-out"
                :style="progressWidth">
            </span>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        props: {
            fullLength: {
                type: Number,
                required: true,
            },
            progress: {
                type: Number,
                required: true,
            }
        },
        data() {
            return {
                // must be with Tailwind defined spacing system w-40 = 10rem
                barWidthInRem: 10,
                tailwindMappedWidth: 'w-40'
            };
        },
        computed: {
            /*
            * Compute the progress index width
            * */
            progressWidth() {
                return 'width: ' + (this.barWidthInRem / this.fullLength) * this.progress + 'rem;';
            },
        }
    }
</script>

<style scoped>

</style>
