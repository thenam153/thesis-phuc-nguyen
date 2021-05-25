<template>
    <div>
        <input type="text" v-model="api.name">
        <input type="text" v-model="api.description">
        <input type="text" v-model="api.data.filePath">
        <input type="text" v-model="api.data.description">
        <input type="text" v-model="api.data.method">
        <input type="text" v-model="api.data.path">
        <div>
            parameters
            <div @click="onAddParameter()">Add parameter</div>
            <div>
                <input type="text" v-model="pName">
                <input type="text" v-model="pDescription">
                <select name="" v-model="pIn">
                    <option value="body">body</option>
                    <option value="path">path</option>
                    <option value="query">query</option>
                </select>
                <input type="text" v-model="pType">
                <input type="checkbox" v-model="pRequired">
            </div>
            <div v-for="(p, _index) in api.data.parameters" :key="_index">
                {{ p }}
                <div >
                    view
                </div>
                <div>
                    edit
                </div>
            </div>
        </div>
        <div>
            responses
            <div @click="onAddResponse()">Add response</div>
            <div>
                <input type="text" v-model="rMessage">
                <input type="text" v-model="rCode">
                <input type="text" v-model="rDescription">
            </div>
            <div v-for="(r, _index) in api.data.responses" :key="_index">
                {{ r }}
                <div >
                    view
                </div>
                <div>
                    edit
                </div>
            </div>   
        </div>
        <button @click="cancel(false); close();">Cancel</button>
        <button @click="proceed(api); close();">Oke</button>
    </div>
</template>

<script>
import DialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'
export default {
    mixins: [DialogMixin],
    data() {
        return {
            api: {
                name: "New Api",
                description: "",
                data: {
                    filePath: "",
                    description: "",
                    method: "",
                    path: "",
                    parameters: [],
                    responses: []
                }
            },
            rMessage: "",
            rCode: "",
            rDescription: "",
            pName: "",
            pDescription: "",
            pIn: "",
            pType: "",
            pRequired: true,
        }
    },
    mounted() {
        this.api = this.options.data.api || this.api
    },
    methods: {
        onAddParameter() {
            this.api.data.parameters.push({
                name: this.pName,
                description: this.pDescription,
                in: this.pIn,
                type: this.pType,
                required: this.pRequired
            })
        },
        onAddResponse() {
            this.api.data.responses.push({
                code: this.rCode,
                message: this.rMessage,
                description: this.rDescription
            })
        },
    }
}
</script>
