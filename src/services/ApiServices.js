import axios from 'axios'
class ApiService {

    constructor(baseUrl) {
        // super();
        this.baseUrl = baseUrl  
    }
    setBaseUrl(baseUrl) {
        this.baseUrl = baseUrl
    }
    httpPost(uri, payload = {}, headers = {"Access-Control-Allow-Origin": "*"}) {
        return new Promise((resolve, reject) => {
            axios.post(this.baseUrl + uri, payload, { headers })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
    getAllProject() {
        return this.httpPost("/api/project/full-info")
    }
    createProject(data) {
        return this.httpPost("/api/project/create", data)
    }
    updateProject(data) {
        return this.httpPost("/api/project/update", data)
    }
    deleteProject(data) {
        return this.httpPost("/api/project/delete", data)
    }
    createApi(data) {
        return this.httpPost("/api/api/create", data)
    }
    updateApi(data) {
        return this.httpPost("/api/api/update", data)
    }
    deleteApi(data) {
        return this.httpPost("/api/api/delete", data)
    }
    static getInstance(baseUrl) {
        if(!this.instance) {
            this.instance = new ApiService(baseUrl)
        }
        return this.instance
    }
}

let apiService = ApiService.getInstance("http://localhost:3003")
export default apiService
