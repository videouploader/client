const url = 'http://localhost:3000'

const app = new Vue({
    el:'#app',
    id:'',
    creator:'',
    path:'',
    data:{
        videoList:[],
        message:''
    },
    methods:{
        videoList:function(){
            Axios
                .get(`${url}/videolist`)
                .then(data=>{
                    console.log(data)
                    this.videoList.push(data)
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    }
})