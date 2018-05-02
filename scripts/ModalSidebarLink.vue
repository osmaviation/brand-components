<template>
<a :href="url" class="group block no-underline text-black hover:text-blue pl-4 mb-2" @click="handleClick">
    <span class="flex p-2 rounded-tl rounded-bl" :class="{'bg-white': active}">
        <slot></slot>
    </span>
</a>
</template>

<script>
import Clicks from './mixins/Clicks'
export default {
    mixins: [Clicks],

    props: {
        url: {
            default: null
        },
        active: {
            type: Boolean,
            default() {
                return false
            }
        }
    },

}
</script>
