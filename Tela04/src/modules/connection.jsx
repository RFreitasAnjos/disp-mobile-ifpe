import axios from 'axios'

class AxiosService {
    static instance;

    axios = axios.create({
        baseURL:'http://localhost:3001',
        timeout: 30000,
        headers:{
            'Content-Type': 'application/json',
            'Accept':'application/json',
        },
    })

    getInstance(){
        if(!AxiosService.instance){
            AxiosService.instance = new AxiosService();
        }
        return AxiosService.instance;
    }
    getAxios(){
        return this.axios;
    }
}
const AxiosService = new AxiosService().getInstance();
const connection = AxiosService.getAxios()

export default connection;