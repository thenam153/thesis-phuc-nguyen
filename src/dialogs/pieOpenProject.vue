<template>
    <div>
        <div v-for="(p, index) in listProject" :key="index" @click="select(p)">
            {{ p.name }}
            {{ p.description }}
        </div>
        <button @click="cancel(false); close();">Cancel</button>
        <button @click="currentProject && proceed(currentProject); close();">Oke</button>
    </div>
</template>

<script>
import ApiServices from '../services/ApiServices'
import DialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'
export default {
    mixins: [DialogMixin],
    data() {
        return {
            listProject: [],
            currentProject: null,
            setProject: null
        }
    },
    mounted() {
        this.currentProject = this.options.data.currentProject
        ApiServices.getAllProject()
        .then(res => {
            console.log(res.content)
            this.listProject = res.content
        })
        .catch(err => {
            console.log(err)
        })
    },
    methods: {
        select(p) {
            this.currentProject = p
        }
    }
}
</script>
