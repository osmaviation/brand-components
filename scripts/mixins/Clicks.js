export default {
    methods: {
        handleClick: function(e) {
            this.$emit('click', e)
        }
    }
}