export default {

    data: function() {
        return {
            show: false,
        }
    },
    
    methods: {
        close: function() {
            this.show = false
            this.$emit('close')
        },
        open: function() {
            this.show = true
            this.$emit('open')
        },
        toggle: function() {
            if (this.show) {
                this.close()
            } else {
                this.open()
            }
        }
    }
}