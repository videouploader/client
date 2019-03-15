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
        getAllVideo:function(){
            console.log("Masuk ke function getallVideo")
            
            axios
                .get(`${url}/video`)
                .then(({data}) =>{
                    console.log("Hasil get all videos: ", data.data)
                    this.videoList = []
                    this.videoList.push(data.data)
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    }
})