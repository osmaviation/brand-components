export default {

    data() {
        return {
            show: false,
        }
    },
    
    methods: {
        close() {
            this.show = false
            this.$emit('close')
        },
        open() {
            this.show = true
            this.$emit('open')
        },
        toggle() {
            if (this.show) {
                this.close()
            } else {
                this.open()
            }
        }
    }
}