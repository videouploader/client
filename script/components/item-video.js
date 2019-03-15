Vue.component('video-item', {
    props: ['video'],
  
    created() {
      console.log('video-item created');
    },
  
    template: `
      <div class="col-4 mb-3">
        <div class="card mx-auto">
          <center><p>{{video.name}}</p></center>
            <div class="card-body">
            <video width="400" height="280" controls>
            <source v-bind:src="video.link">
            </video>
            </div>
        </div>
      </div>
    `,
  });
  