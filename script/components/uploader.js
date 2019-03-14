// Vue.component('video-upload', {
//     template: `
//     <form>
//       <div class="form-group mx-auto" style="width: 50%;"">
//         <label for="creator">creator name:</label><br>
//         <input type="text" v-model="creator" class="form-control" placeholder="your name here">
//       <br>
//         <label for="exampleFormControlFile1">Example file input</label>
//         <input type="file" class="form-control-file" id="exampleFormControlFile1">
//         <a href="#" class="btn btn-outline-primary">submit</a>
//         </div>
//     </form>
//     `,
//     props:['creator','path']
//   })

Vue.component('video-upload', {
  data() {
      return {
          name: '',
          file : ''
      }
  },
  methods: {
      createGif() {
          let formData = new FormData()
          formData.append('image', this.file)
          formData.append('name', this.name)
          // formData.append('tag', this.tag)
          axios
              .post(`http://localhost:3000/gifs`, formData, {
                  headers: {
                      'Content-Type': 'multipart/form-data',
                      // token: localStorage.token
                  }
              })
              .then(({ data }) => {
                  this.name = '',
                  this.tag = ''
                  console.log(data)
              })
              .catch(err => {
                  console.log(err)
              })
      },
      handleFileUpload(event) {
          // this.file = event.file.files[0]
          this.file = this.$refs.file.files[0];
      },
  },
  template:
  `
  <div>
      <hr>
      <form v-on:submit.prevent='createGif'>
          <fieldset>
              <div class="form-group">
                  <label>Gif Name</label>
                  <input v-model="name" type="text" class="form-control">
              </div>
              <div class="form-group">
                  <label for="exampleInputFile">Upload Image</label>
                  <input type="file" id="file" class="inputFile" ref="file" v-on:change="handleFileUpload" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </fieldset>
      </form>
  </div>
  `
})