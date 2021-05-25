<template>
  <div>
    <div v-if="currentProject && currentProject.Apis">
      <div v-for="api in currentProject.Apis" :key="api.id" style="margin: 30px;">
        <b>{{ api.name}}</b> <span @click="onUpdateApi(api, api.id)">Edit</span><span @click="onDeleteApi(api, api.id)">Delete</span><span @click="onCreateTestCase(api)">Add test case</span>
        <div v-if="api.Tests">
          <div v-for="test in api.Tests" :key="test.id">
            {{ test.name }} <span @click="onUpdateTestCase(test)">Edit</span><span @click="onDeleteTestCase(api, test)">Delete</span>
            <div v-for="(testCase, __index) in test.data" :key="__index" >
                {{ testCase.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div @click="onCreateApi">
      Add API
    </div>
  </div>
</template>

<script>

export default {
    name: "Main",
    props: {
      currentProject: {
        type: Object
      },
      onCreateApi: {
        type: Function
      },
      onUpdateApi: {
        type: Function
      },
      onDeleteApi: {
        type: Function
      },
      onCreateTestCase: {
        type: Function
      },
      onUpdateTestCase: {
        type: Function
      },
      onDeleteTestCase: {
        type: Function
      },
    },
}
</script>

<style scoped>

</style>
