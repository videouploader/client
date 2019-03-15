Vue.component('video-list', {

    props: ['videolist'],
    created() {
        console.log('video-list created==>', videolist)
    },
    template:`

        <div class="row">
            <video-item
                v-for="(video, index) in videolist[0]"
                v-bind:key="index"
                v-bind:video="video">
            </video-item>
        </div>
`,
})

