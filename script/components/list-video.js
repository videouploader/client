Vue.component('video-list',{
    props: ['data'],
    created() {
        console.log('video list')
    },
    template:`
        <div>
        <ul v-for="key in data">
            <li>{{path}}</li>
        </ul>
        </div>
    `
})