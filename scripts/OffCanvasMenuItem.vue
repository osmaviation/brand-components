<template>
    <li class="mb-4">
        <a :href="url" class="group text-white hover:text-white hover:font-bold uppercase flex no-underline text-md md:text-xl leading-normal" @click="handleClick">
            <span class="group-hover:underline flex-grow">
                <slot></slot>
            </span>
        </a>
    </li>
</template>

<script>
import Clicks from './mixins/Clicks'
export default {
    mixins: [Clicks],
    props: ['url'],
}
</script>

