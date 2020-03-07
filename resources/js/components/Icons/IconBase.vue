<template>
    <svg xmlns="http://www.w3.org/2000/svg"
         :width="width"
         :height="height"
         :viewBox="computedViewBox"
         :aria-labelledby="iconName"
         role="presentation"
    >
        <title
            :id="iconName"
            lang="en"
        >{{ iconName }}</title>
    <g :class="computeIconColor"
        fill="currentColor"
        stroke="currentColor"
    >
      <slot />
    </g>
  </svg>
</template>

<script>

    import {mapState} from "vuex";

    export default {
        name: "IconBase",
        props: {
            iconName: {
                type: String,
                default: 'box'
            },
            width: {
                type: [Number, String],
                default: 24
            },
            height: {
                type: [Number, String],
                default: 24
            },
            iconColor: {
                type: String,
                default: null
            },
            viewBox: {
                type: String,
                default: null,
            }
        },
        computed: {
            ...mapState(['theme']),

            /*
            * Get the svg icon color from props or from theme primary color.
            * */
            computeIconColor() {
                let stateColor = 'text-' + this.theme.primaryColor + '-400';
                return this.iconColor ? this.iconColor : stateColor;
            },

            /*
            * Get the svg view box size from props or use a default value.
            * */
            computedViewBox() {
                return this.viewBox ? this.viewBox : '0 0 24 24';
            }
        },
    }
</script>
