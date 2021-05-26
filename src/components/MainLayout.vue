<template>
  <div class="main">
    <div v-if="currentProject && currentProject.Apis" style="overflow: scroll">
      <div class="submit" @click="onCreateApi">
        Add API
      </div>
      <div class="item-api" v-for="api in currentProject.Apis" :key="api.id" style="margin: 30px;" >
        <div class="api-name">
          {{ api.name}}
        </div>
        <div class="api-description">
          {{ api.description }}
        </div>
        <div class="api-action">
          <div class="submit" @click="onUpdateApi(api, api.id)">Edit</div>
          <div class="submit" @click="onDeleteApi(api, api.id)">Delete</div>
          <div class="submit" @click="onCreateTestCase(api)">Add test case</div>
        </div>
        <div >            
          <div class="api-info">
            <div class="item-api-info">
              <label>FilePath: </label>
              <div class="">
                <input type="text" disabled v-model="api.data.filePath">
              </div>
            </div>
            <div class="item-api-info">
              <label>Description:</label>
              <div class="">
                <input type="text" disabled v-model="api.data.description">
              </div>
            </div>
            <div class="item-api-info">
              <label>Method:</label>
              <div class="">
                <input type="text" disabled v-model="api.data.method">
              </div>
            </div>
            <div class="item-api-info">
              <label>Path:</label>
              <div class="">
                <input type="text" disabled v-model="api.data.path">
              </div>
            </div>
            <div class="title">
              List Parameters
            </div>
            <div class="api-info-parameters">
              <div style="margin: 10px 0; border-bottom: 1px solid #aaa;" v-for="(p, _index) in api.data.parameters" :key="_index">
                  <div class="item-param">
                    <label>Name:</label>
                    <div class="">
                      <input type="text" disabled v-model="p.name">
                    </div>
                  </div>
                  <div class="item-param">
                    <label>Description:</label>
                    <div class="">
                      <input type="text" disabled v-model="p.description">
                    </div>
                  </div>
                  <div class="item-param">
                    <label>In:</label>
                    <div class="">
                      <input type="text" disabled v-model="p.in">
                    </div>
                  </div>
                  <div class="item-param">
                    <label>Type:</label>
                    <div class="">
                      <input type="text" disabled v-model="p.type">
                    </div>
                  </div>
                  <div class="item-param">
                    <label>Required:</label>
                    <div class="">
                      <input type="text" disabled v-model="p.required">
                    </div>
                  </div>
              </div>
            </div>
            <div class="title">
              List Responses
            </div>
            <div class="api-info-responses">
              <div style="margin: 10px 0; border-bottom: 1px solid #aaa;" v-for="(r, _index) in api.data.responses" :key="_index">
                <div class="item-res">
                  <label>Code: </label>
                  <div class="">
                    <input type="text" disabled v-model="r.code">
                  </div>
                </div>
                <div class="item-res">
                  <label>Message: </label>
                  <div class="">
                    <input type="text" disabled v-model="r.message">
                  </div>
                </div>
                <div class="item-res">
                  <label>Description: </label>
                  <div class="">
                    <input type="text" disabled v-model="r.description">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="api.Tests">
            <div class="title">
              Test Case
            </div>
            <div style="position: relative;" v-for="test in api.Tests" :key="test.id">
              <div class="title-name">
                Name: {{ test.name }} 
              </div>
              <div class="action-test">
                <div class="submit" @click="onUpdateTestCase(test)">Edit</div>
                <div class="submit" @click="onDeleteTestCase(api, test)">Delete</div>
              </div>
              <div class="item-test" v-for="(testCase, __index) in test.data" :key="__index" >
                  <div class="">
                    Case: {{ testCase.name }}
                  </div>
                  <div>
                    <div style="font-size: 15px; font-weight: 500" class="">
                      Parameters
                    </div>
                    <div style="margin-left: 24px; border-bottom: 1px solid #aaa" class="" v-for="(_p, __index) in testCase.parameters" :key="__index">
                        <div class="item-api-info">
                          <label>Name:</label>
                          <div class="">
                            <input type="text" disabled v-model="_p.name">
                          </div>
                        </div>
                        <div class="item-api-info">
                          <label>Value:</label>
                          <div class="">
                            <input type="text" disabled v-model="_p.value">
                          </div>
                        </div>
                    </div>
                  </div>
                  <div>
                    <div style="font-size: 15px; font-weight: 500">
                      Expect
                    </div>
                    <div style="margin-left: 24px; border-bottom: 1px solid #aaa" class="" v-for="(_e, __index) in testCase.expect" :key="__index">
                      <div class="item-api-info">
                        <label>Code:</label>
                        <div class="">
                          <input type="text" disabled v-model="_e.code">
                        </div>
                      </div>
                      <div class="item-api-info">
                        <label>Response:</label>
                        <div class="">
                          <input type="text" disabled v-model="_e.response">
                        </div>
                      </div>
                      <div class="item-api-info">
                        <label>Condition:</label>
                        <div class="">
                          <input type="text" disabled v-model="_e.condition">
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  methods: {
    toggle(obj) {
      console.log(obj)
      obj.toggle = !obj.toggle
    }
  }
}
</script>

<style scoped>
.item-api {
  position: relative;
}
.api-name {
  font-size: 25px;
  font-weight: 500;
}
.api-description {
  margin: 10px 0px;
  font-style: oblique;
}
.api-action,.action-test {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
}


.submit {
    font-weight: bold !important;
    min-width: 100px;
    background-color: #3f84ff;
    height: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 20px;
    border: transparent;
    border-radius: 10px;
    color: #fff;
    user-select: none;
    transition: all ease-in 0.1s;
    cursor: pointer;
    margin: 0 10px;
}
.submit:hover {
    background-color: #2f6fdf;
    border-color: #3f84ff;
    -webkit-box-shadow: 0 0 0 4px #3f84ff1f;
    box-shadow: 0 0 0 4px #3f84ff1f;
}

.item-res {
  display: flex;
  align-items: center;
  margin: 10px 0  ;
}
.item-res label {
  width: 85px;
  font-weight: bold!important;
}
.item-api-info {
    display: flex;
    align-items: center;
    margin: 10px 0  ;
}
.item-api-info label {
    width: 85px;
    font-weight: bold!important;
}
.api-info-parameters {
  margin-left: 64px;
}
.api-info-responses {
  margin-left: 64px;
}

.item-param {
    display: flex;
    align-items: center;
    margin: 10px 0  ;
}
.item-param label {
    width: 85px;
    font-weight: bold!important;
}
.title {
  font-size: 16px;
  font-weight: bold;
}
.item-test {
  margin-left: 128px;
}
.title-name {
  margin-left: 128px;
  font-size: 20px;
  font-weight: bold;
}
.hidden {
  display: none;
}
</style>
