<template>
    <div>
        {{ project }}
        <input type="text" v-model="project.name">
        <input type="text" v-model="project.description">
        <button @click="cancel(false); close();">Cancel</button>
        <button @click="proceed(project); close();">Oke</button>
    </div>
</template>

<script>
import DialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'
export default {
    mixins: [DialogMixin],
    data() {
        return {
            project: {
                name: "New Project",
                description: "",
            }
        }
    },
    mounted() {
        this.project = this.options.data.project || this.project
    }
}
</script>
