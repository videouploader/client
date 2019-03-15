Vue.component('login-form', {
    data() {
        return {
            email: '',
            password : ''
        }
    },
    methods: {
        loginUser() {
            console.log('masuk login')
            let loginUser = {
                email: this.email,
                password: this.password
            }
            console.log(loginUser)
          axios
            .post(`${baseURL}/login`, loginUser)
            .then(response => {
                console.log('Berhasil login', response)
                localStorage.setItem('token', response.data.access_token)
                this.email =''
                this.password =''
                this.isLogin = true
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    template:
    `
    <div class="row">
    <div class="col-12 p-0 flex-col">
      <h5 class="font-weight-light mb-3 text-center">You shall not pass, please verify your identity</h5>
      <div class="row">
        <div class="col-md-6 mx-auto">
          <form v-on:submit.prevent="loginUser">
            <div class="form-group">
              <label for="emailInput">Email address</label>
              <input
                type="email"
                class="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="email"
              />
            </div>

            <div class="form-group">
              <label for="passwordInput">Password</label>
              <input
                type="password"
                class="form-control"
                id="passwordInput"
                aria-describedby="emailHelp"
                placeholder="Enter password"
                v-model="password"
              />
            </div>

            <button type="submit" class="btn btn-primary btn-block">Log In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    `

  })