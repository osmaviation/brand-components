<template>
    <transition name="canvas">
        <div class="canvas-container z-50" v-if="show">
            <div class="canvas-backdrop bg-white opacity-75 fixed pin-y pin-x z-40" @click="close"></div>
            <div class="canvas z-50 w-full md:w-canvas bg-blue fixed pin-y pin-r overflow-hidden overflow-y-auto">


                <a class="hover:text-white text-white fixed pin-y pin-r mt-8 mr-8" href="#" @click.prevent="close">
                    <svg class="hamburger h-8 w-8 hamburger--close" aria-hidden="true" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 100 100">
                        <g>
                            <path class="hamburger-line hamburger-line-1" d="M5 13h90v14H5z"/>
                            <path class="hamburger-line hamburger-line-2" d="M5 43h90v14H5z"/>
                            <path class="hamburger-line hamburger-line-3" d="M5 73h90v14H5z"/>
                        </g>
                    </svg>
                </a>

                <slot></slot>

            </div>
        </div>
    </transition>
</template>

<style lang="scss">

    .canvas-enter-active,
    .canvas-leave-active {
        transition: opacity .5s ease;
        .canvas-backdrop {
            transition: opacity .5s ease;
        }
        .canvas {
            transition: transform .5s ease;
        }

    }

    .canvas-enter-active {
        opacity: 1;
        .canvas-backdrop {
            opacity: 0;
        }
        .canvas {
            transform: translateX(100%);
        }
    }

    .canvas-enter-to {
        opacity: 1;
        .canvas-backdrop {
            opacity: 0.75;
        }
        .canvas {
            transform: translateX(0);
        }
    }

    .canvas-leave-active {
        opacity: 1;
        .canvas-backdrop {
            opacity: 0;
        }
        .canvas {
            transform: translateX(100%);
        }
    }
</style>


<script>
    import Toggle from './mixins/Toggle'
    import Keys from './mixins/Keys'

    export default {
        mixins: [Toggle, Keys],

        mounted() {
            this.$on('key:esc', () => {
                if (this.show) {
                    this.close()
                }
            })
        },
    }
</script>
