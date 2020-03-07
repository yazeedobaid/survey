<template>
    <transition
        mode="out-in"
        appear
        :enter-class="enterClass"
        :enter-active-class="enterActiveClass"
        :enter-to-class="enterToClass"
        :leave-class="leaveClass"
        :leave-active-class="leaveActiveClass"
        :leave-to-class="leaveToClass"
    >
        <slot/>
    </transition>
</template>

<script>
    export default {
        name: "SurveyTransition",
        props: {
            direction: {
                type: String,
                required: true,
                validator: function (value) {
                    return ['advance-survey', 'retreat-survey'].includes(value);
                }
            }
        },
        data() {
            return {
                enterClass: null,
                enterActiveClass: null,
                enterToClass: null,
                leaveClass: null,
                leaveActiveClass: null,
                leaveToClass: null,
                advanceTransition: {
                    enterClass: 'transform translate-y-40 opacity-25',
                    enterActiveClass: 'transition duration-700 ease-in-out',
                    enterToClass: 'transform translate-y-0 opacity-100',
                    leaveClass: 'transform translate-y-0 opacity-25',
                    leaveActiveClass: 'transition duration-700 ease-in-out',
                    leaveToClass: 'transform -translate-y-32 opacity-25',
                },
                retreatTransition: {
                    enterClass: 'transform -translate-y-32 opacity-25',
                    enterActiveClass: 'transition duration-700 ease-in-out',
                    enterToClass: 'transform translate-y-0 opacity-25',
                    leaveClass: 'transform translate-y-0 opacity-100',
                    leaveActiveClass: 'transition duration-700 ease-in-out',
                    leaveToClass: 'transform translate-y-32 opacity-25',
                }
            };
        },
        created() {

            // By default, transition classes will be of the advance transition
            this.enterClass = this.advanceTransition.enterClass;
            this.enterActiveClass = this.advanceTransition.enterActiveClass;
            this.enterToClass = this.advanceTransition.enterToClass;
            this.leaveClass = this.advanceTransition.leaveClass;
            this.leaveActiveClass = this.advanceTransition.leaveActiveClass;
            this.leaveToClass = this.advanceTransition.leaveToClass;

        },
        beforeUpdate() {
            if (this.direction === 'advance-survey') {
                this.enterClass = this.advanceTransition.enterClass;
                this.enterActiveClass = this.advanceTransition.enterActiveClass;
                this.enterToClass = this.advanceTransition.enterToClass;
                this.leaveClass = this.advanceTransition.leaveClass;
                this.leaveActiveClass = this.advanceTransition.leaveActiveClass;
                this.leaveToClass = this.advanceTransition.leaveToClass;

            } else {
                this.enterClass = this.retreatTransition.enterClass;
                this.enterActiveClass = this.retreatTransition.enterActiveClass;
                this.enterToClass = this.retreatTransition.enterToClass;
                this.leaveClass = this.retreatTransition.leaveClass;
                this.leaveActiveClass = this.retreatTransition.leaveActiveClass;
                this.leaveToClass = this.retreatTransition.leaveToClass;
            }
        }
    }
</script>
