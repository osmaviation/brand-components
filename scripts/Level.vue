<template>
    <div class="flex mb-8 flex-col md:flex-row">
        <div v-for="(section, index) in sections" :key="index"
             class="py-4 font-heading relative md:flex-1 flex flex-col items-center justify-center">
            <div v-if="index !== (sections.length -1)" class="absolute pin-r pin-t h-full" style="width:3px">
                <div class="absolute h-full w-px bg-blue pin-t ml-px hidden md:block"></div>
                <div class="absolute w-full h-1/2 bg-blue transition-top number hidden md:block"
                     :class="{'number-active': animate}"></div>
            </div>
            <div class="text-5xl font-bold text-blue mb-2">
                <span v-if="!animate">0</span>
                <i-count-up
                        v-if="animate"
                        :startVal="0"
                        :endVal="section.number"
                        :decimals="0"
                        :duration="1.5"
                />
            </div>
            <div v-text="section.name" class="uppercase text-sm font-bold text-blue"></div>
        </div>
    </div>
</template>

<style>
    .transition-top {
        transition: top 1.4s ease;
    }

    .number {
        top: 0px;
    }

    .number-active {
        top: 50%;
    }
</style>


<script>
    import ICountUp from 'vue-countup-v2';

    export default {
        components: {ICountUp},
        props: ['sections'],
        data() {
            return {
                animate: false,
            }
        },

        mounted() {
            setTimeout(() => {
                this.animate = true
            }, 400)
        },
    }
</script>
