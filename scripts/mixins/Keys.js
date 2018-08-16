export default {
    mounted: function() {
        document.addEventListener("keydown", this.recordKeys);
    },

    methods: {
        recordKeys: function(e) {
            if (e.keyCode == 27) { 
                this.$emit('key:esc')
            }
            if (e.keyCode == 89) { // key: y
                this.$emit('key:y')
            }
            if (e.keyCode == 78) { // key: n
                this.$emit('key:n')
            }
            if (e.keyCode == 77) { // key: m
                this.$emit('key:m')
            }
            if (e.keyCode == 37) { // key: left arrow
                this.$emit('key:left')
            }
            if (e.keyCode == 39) { // key: right arrow
                this.$emit('key:right')
            }
        }
    }
}