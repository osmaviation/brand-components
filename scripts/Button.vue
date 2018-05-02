<template>
    <a v-if="url" :href="url" :class="buttonClass" @click="handleClick" v-bind="attributes" @mouseenter="animateBorder" @mouseleave="animateBorderLeave">
        <span class="brand-button-label"><slot></slot></span>
        <svg class="brand-button-border" xmlns="http://www.w3.org/2000/svg" width="222" height="63" viewBox="0 0 222 63">
            <path ref="shape" class="brand-button-border__shape" fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" d="M1.5 1.5h219v60H1.5z"/>
        </svg>
    </a>
    <button v-else :class="buttonClass" @click="handleClick" v-bind="attributes" @mouseenter="animateBorder" @mouseleave="animateBorderLeave">
        <span class="brand-button-label"><slot></slot></span>
        <svg class="brand-button-border" xmlns="http://www.w3.org/2000/svg" width="222" height="63" viewBox="0 0 222 63">
            <path ref="shape" class="brand-button-border__shape" fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" d="M1.5 1.5h219v60H1.5z"/>
        </svg>
    </button>
</template>

<script>
import Clicks from './mixins/Clicks'
import 'gsap';
export default {
    mixins: [Clicks],

    props: {
        url: {
            default() {
                return false
            },
        },
        color: {
            default() {
                return 'black'
            },
        },
        attributes: {
            default() {
                return {}
            },
        }
    },

    methods: {
        animateBorder() {
            TweenMax.to(this.$refs.shape, 1, {strokeDashoffset: -170, ease: Power2.easeInOut});
        },

        animateBorderLeave() {
            TweenMax.to(this.$refs.shape, 1, {strokeDashoffset: 570, ease: Power2.easeInOut});
        }
    },

    computed: {
        buttonClass() {
            return 'brand-button--' + this.color;
        }
    }
}
</script>
