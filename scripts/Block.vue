<template>
    <div class="mb-8 pb-8 mx-4 md:flex items-center"
         :class="{'md:flex-row-reverse': align == 'right', 'md:flex-row': align == 'left'}">
        <div class="w-full md:w-1/2 relative mb-4 md:mb-0"
             :class="{'md:pl-8': align == 'right', 'md:pr-8': align == 'left'}" v-if="image">
            <img :src="image" alt=""/>
        </div>

        <div class="w-full px-4 md:px-0" :class="{'md:w-1/2': image}">
            <h2 class="text-xxl font-bold mb-2">
                <slot name="title"></slot>
            </h2>
            <div class="h-2 bg-blue w-24 mb-6"></div>
            <div class="leading-normal text-lg font-hairline">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            align: {
                default() {
                    return 'right'
                }
            },
            image: {
                default() {
                    return null
                }
            }
        }
    }
</script>

