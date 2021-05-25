<template>
    <div>
        {{ message }}
        <button @click="cancel(false); close();">Cancel</button>
        <button @click="proceed(true); close();">Oke</button>
    </div>
</template>

<script>
import DialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'
export default {
    mixins: [DialogMixin],
    data() {
        return {
            message: "Are you sure?"
        }
    },
    mounted() {
        this.message = this.options.data.message
    }
}
</script>
