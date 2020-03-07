<template>
    <svg xmlns="http://www.w3.org/2000/svg"
         width="50"
         height="50"
         viewBox="0 0 100 100"
         aria-labelledby="loading-oval"
         role="presentation"
         fill="currentColor"
         :class="iconColor"
    >
        <title
            id="loading-oval"
            lang="en"
        >loading..</title>
        <circle stroke="currentColor" :class="iconColor" cx="50" cy="50" r="45"/>
    </svg>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "LoadingOval",
        computed: {
            ...mapState(['theme']),

            /*
            * Get the svg icon color from props or from theme primary color.
            * */
            iconColor() {
                return 'text-' + this.theme.primaryColor + '-400';
            },
        }
    }
</script>

<style scoped>

    svg {
        animation: 2s linear infinite svg-animation;
        max-width: 100px;
    }

    @keyframes svg-animation {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg)
        }
    }

    circle {
        animation: 1.4s ease-in-out infinite both circle-animation;
        display: block;
        fill: transparent;
        stroke-linecap: round;
        stroke-dasharray: 283;
        stroke-dashoffset: 280;
        stroke-width: 10px;
        transform-origin: 50% 50%;
    }

    @keyframes circle-animation {
        0%,
        25% {
            stroke-dashoffset: 280;
            transform: rotate(0);
        }

        50%,
        75% {
            stroke-dashoffset: 75;
            transform: rotate(45deg);
        }

        100% {
            stroke-dashoffset: 280;
            transform: rotate(360deg);
        }
    }

</style>
