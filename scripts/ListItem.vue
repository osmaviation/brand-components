<template>
    <li class="list-item">
        <a class="list-item-container cursor-pointer" :href="url" @click="handleClick" v-if="url">
            <span class="flex w-16 items-center " v-if="$slots.icon">
                <slot name="icon"></slot>
            </span>
            <span class="flex-1">
                <span class="block text-md font-bold"><slot name="title"></slot></span>
                <span class="block text-sm font-light" v-if="$slots['sub-title']"><slot name="sub-title"></slot></span>
            </span>
            <span class="flex w-48 justify-center items-center text-center" v-if="$slots.type">
                <slot name="type"></slot>
            </span>
            <span class="flex w-10 justify-center items-center text-center" v-if="$slots.document">
                <slot name="document"></slot>
            </span>
            <span class="flex w-32 justify-center items-center" v-if="$slots.status">
                <slot name="status"></slot>
            </span>
            <span class="list-item-link w-10">
                <svg class="list-item-cheveron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </span>
        </a>
        <span class="list-item-container" v-else>
            <span class="flex w-24 justify-center items-center" v-if="$slots.icon">
                <slot name="icon"></slot>
            </span>
            <span class="flex-1">
                <span class="block text-md font-bold"><slot name="title"></slot></span>
                <span class="block text-sm font-light"><slot name="sub-title"></slot></span>
            </span>

            <span class="flex justify-center items-center" v-if="$slots.status">
                <slot name="status"></slot>
            </span>
        </span>
    </li>
</template>

<script>
    import Clicks from './mixins/Clicks'

    export default {
        mixins: [Clicks],
        props: {
            url: {
                default() {
                    return false
                }
            }
        }
    }
</script>
