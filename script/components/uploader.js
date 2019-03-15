Vue.component('video-upload', {
  data() {
      return {
          name: '',
          file : '',
          formData: ''
      }
  },
  methods: {
      createVideo() {
        // console.log("Masuk create", this.file, this.name)  
        let formData = new FormData()
          formData.append('image', this.file)
          formData.append('name', this.name)
          // formData.append('tag', this.tag)
        //   console.log("data yang dikirim ke server ===>", formData)
          axios
              .post(`${url}/upload`, formData, {
                  headers: {
                      'Content-Type': 'multipart/form-data',
                      // token: localStorage.token
                  }
              })
              .then(({ data }) => {
                  this.name = '',
                  this.tag = ''
                  console.log("Hasil Post:", data)
                  
              })
              .catch(err => {
                  console.log(err)
              })
      },
      handleFileUpload(event) {
          // this.file = event.file.files[0]
          console.log("masuk file upload", this.$refs.file)
          this.file = this.$refs.file.files[0];
      },
  },
  template:
  `
  <div>
      <hr>
      <div v-if="file">
      <img src="file.name"
      </div>
      <form v-on:submit.prevent='createVideo'>
          <fieldset>
                <div class="form-group mx-auto" style="width: 50%">
                  <label>Video Name</label>
                  <input v-model="name" type="text" class="form-control" required>
                  </div>
                <div class="form-group mx-auto" style="width: 50%">
                  <label for="exampleInputFile">Upload Image</label>
                  <input type="file" id="file" class="inputFile" ref="file" v-on:change="handleFileUpload" required/>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
          </fieldset>
      </form>
  </div>
  `
})