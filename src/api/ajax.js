import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
    baseURL: '/api'
})


export default instance