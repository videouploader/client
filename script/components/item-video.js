Vue.component('video-item', {
    props: ['video'],
    data() {
      return {
        fbSharelink: `https://www.facebook.com/sharer/sharer.php?u=`,
               last: '&amp;src=sdkpreparse%2F&amp;src=sdkpreparse'
      }
    },
    methods: {
      getlink(){
        // console.log(this.fbSharelink + this.video.link + this.last)
        return this.fbSharelink + this.video.link + this.last
      }
    },
    created() {
      console.log('video-item created');
    },
  
    template: `
      
      <div class="col-4 mb-3">
      
        <div class="card mx-auto">
          <center><p>{{video.name}}</p></center>
            <div class="card-body">
            <video width="415" height="280" controls>
            <source v-bind:src="video.link">
            </video>
            <div class="fb-share-button" data-href="video.link" data-layout="button_count" data-size="small">
            <a target="_blank" :href="getlink()" class="fb-xfbml-parse-ignore">Share on Facebook</a>
            </div>

            </div>
        </div>
      </div>
    `,
  });
  