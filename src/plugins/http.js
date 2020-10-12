import axios from 'axios'
//创建对象
const MyHttpServer={}

MyHttpServer.install =  (Vue)=> {
    //设置基准接口地址
    axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
    // 4. 添加实例方法
    Vue.prototype.$http=axios
}

export default MyHttpServer