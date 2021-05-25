<template>
  <div style="display: flex;">
      <div @click="onNewProject">
          New Project
      </div>
      <div @click="onOpenProject">
          Open Project
      </div>
      <div @click="onUpdateProject">
          Edit Project
      </div>
      <div @click="onDeleteProject">
          Delete project
      </div>
      <div>
          <b>{{ currentProject ? currentProject.name : "Empty"}}</b>
      </div>
  </div>
</template>

<script>

export default {
    name: "TopNav",
    props: {
        currentProject: {
            type: Object
        },
        onNewProject: {
            type: Function
        },
        onOpenProject: {
            type: Function
        },
        onUpdateProject: {
            type: Function
        },
        onDeleteProject: {
            type: Function
        },
    },
    mounted() {
        console.log(this.currentProject)
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
