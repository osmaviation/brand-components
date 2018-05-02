export default {
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}