<template>
<a class="hover:text-blue text-black" href="#" data-offcanvas="#menu" @click.prevent="handleClick">
    <svg class="hamburger h-8 w-8" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100">
        <g>
            <path class="hamburger-line hamburger-line-1" d="M5 13h90v14H5z"/>
            <path class="hamburger-line hamburger-line-2" d="M5 43h90v14H5z"/>
            <path class="hamburger-line hamburger-line-3" d="M5 73h90v14H5z"/>
        </g>
    </svg>
</a>
</template>

<script>
import Clicks from './mixins/Clicks'
export default {
    mixins: [Clicks],
}
</script>
