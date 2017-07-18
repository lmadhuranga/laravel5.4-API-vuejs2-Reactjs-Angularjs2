<template>
    <div class="wrapper">
        <div class="form-signin">       
            <h2 class="form-signin-heading">Please login</h2>
            <input type="email" class="form-control" name="username" placeholder="Email Address" v-model="email" required="" autofocus="" />
            <input type="password" class="form-control" name="password" placeholder="Password" v-model="password" required=""/>      
            <label class="checkbox">
            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
            </label>
            <button @click="test()" class="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
        </div>
        <pre>{{$data}}</pre>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                email: '',
                password: ''
            }
        },
				methods:{
					test(){
						var data ={
							client_id:'9',
							client_secret:'3h5Iel39oYulxV6XdKmMOZtK3cLmh6wOwxSYIng7',
							grant_type: 'password',
							username: this.email,
							password: this.password
						}
						this.$http.post('http://laravel-api-webmadhuranga.c9users.io/api2/public/oauth/token',data)
						.then(reponse => {
							this.$auth.setToken(reponse.body.access_token,reponse.body.expires_in+Date.now())
							this.$router.push('/feed')
						})

						/*.then(function(reponse){
							console.log(reponse)
						})*/
					}
				}
    }
</script>
    
<style> 
body {
	background: #eee !important;	
}

.wrapper {	
	margin-top: 80px;
  margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);  

  .form-signin-heading,
	.checkbox {
	  margin-bottom: 30px;
	}

	.checkbox {
	  font-weight: normal;
	}

	.form-control {
	  position: relative;
	  font-size: 16px;
	  height: auto;
	  padding: 10px;
		@include box-sizing(border-box);

		&:focus {
		  z-index: 2;
		}
	}

	input[type="text"] {
	  margin-bottom: -1px;
	  border-bottom-left-radius: 0;
	  border-bottom-right-radius: 0;
	}

	input[type="password"] {
	  margin-bottom: 20px;
	  border-top-left-radius: 0;
	  border-top-right-radius: 0;
	}
}

</style>