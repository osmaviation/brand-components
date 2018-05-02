<template>
<transition name="modal">
    <div v-if="show" class="fixed pin-x pin-y z-50 flex items-center justify-center">
        <div class="modal-backdrop bg-backdrop h-full w-full fixed" @click="close"></div>
        <div class="modal-container max-h-full my-8 bg-white mx-4 w-full md:w-3/4 xxl:w-1/2 relative center">
            <a href="#" data-modal-close class="block absolute pin-t pin-r -mt-6 -mr-6 w-12 h-12 rounded-full shadow-lg bg-blue flex items-center justify-center text-white no-underline text-2xl" @click="close">
                &times;
            </a>

            <div class="flex">

                <slot name="sidebar"></slot>

                <div class="p-4 pb-8 leading-normal flex-1 overflow-hidden overflow-y-scroll modal-container">
                    <h2 class="font-heading text-xxl uppercase font-bold mb-4" v-if="this.$slots['title']"><slot name="title"></slot></h2>
                    <slot></slot>
                </div>
            </div>

            <slot name="footer"></slot>
        </div>
    </div>
</transition>
</template>

<script>
import Keys from './mixins/Keys'
import Toggle from './mixins/Toggle'
export default {

    mixins: [Keys, Toggle],

    created() {
        this.$on('key:esc', () => {
            if(this.show) {
                this.close()
            }
        })
    },

}
</script>

<style>
.modal-enter-active, .modal-leave-active {
    transition: opacity .5s ease;
}

.modal-enter, .modal-leave-to {
    opacity: 0;
}
.modal-enter-active .modal-container, .modal-leave-active .modal-container {
    transition: transform .5s ease;
}

.modal-enter .modal-container, .modal-leave-to .modal-container {
    transform: scale(1.1);
}
</style>
