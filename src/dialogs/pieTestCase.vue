<template>
    <div>
        <input type="text" v-model="testCase.name">
        <div @click="onAddCase">Add case</div>
        <div v-for="(t, index) in testCase.data" :key="index">
            <input type="text" v-model="t.name">
            <div>
                parameters
                <div @click="onAddParam(t)">Add param</div>
                <div>
                    <input type="text" v-model="pName">
                    <input type="text" v-model="pValue">
                </div>
                <div v-for="(p, _index) in t.parameters" :key="_index">
                    <input type="text" v-model="p.name">
                    <input type="text" v-model="p.value">
                    <div @click="onDeleteP(t, p)">Remove</div>
                </div>
            </div>
            <div>
                expect
                <div @click="onAddExpect(t)">Add expect</div>
                <div>
                    <input type="text" v-model="eCode">
                    <input type="text" v-model="eResponse">
                    <input type="text" v-model="eCondition">
                </div>
                <div v-for="(e, _index) in t.expect" :key="_index">
                    <div>
                        <input type="text" v-model="e.code">
                        <input type="text" v-model="e.response">
                        <input type="text" v-model="e.condition">
                    </div>
                    <div @click="onDeleteE(t, e)">Remove</div>
                </div>
            </div>
        </div>
        <button @click="cancel(false); close();">Cancel</button>
        <button @click="proceed(testCase); close();">Oke</button>
    </div>
</template>

<script>
import DialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'
export default {
    mixins: [DialogMixin],
    data() {
        return {
            testCase: {
                name: "New Test Case",
                data: []
            },
            pName: "",
            pValue: "",
            eCode: "",
            eResponse: "",
            eCondition: "",
        }
    },
    mounted() {
        this.testCase = this.options.data.testCase || this.testCase
    },
    methods: {
        onAddCase() {
            this.testCase.data.push({
                name: "New case",
                parameters: [],
                expect: []
            })
        },
        onAddParam(t) {
            t.parameters.push({
                name: this.pName,
                value: this.pValue
            })
        },
        onAddExpect(t) {
            t.expect.push({
                code: this.eCode,
                response: this.eResponse,
                condition: this.eCondition
            })
        },
        onDeleteP(t, v) {
            t.parameters.splice(t.parameters.indexOf(v), 1)

        },
        onDeleteE(t, v) {
            t.expect.splice(t.expect.indexOf(v), 1)
        },
    }
}
</script>
