<template>
<div>
  
  <div class="container signin">
    <div class="margin size box-signin">
      
    </div>
  </div>
  
  
  
  
  
  
  <!-- <div class="container full-height full-width">
    <div class="flex container column center-center">
      <div class="fix-login">
        <div class="text-center">
          minds
        </div>

        <div class="flex">
          <form role="form" method="POST" action="" class="full-width" @submit.prevent="validateBeforeSubmit">

            <div class="area-login" :class="{'has-danger': errors.has('email') }">
              <label for="">E-mail</label>
              <div>
                <input type="email" class="input-style" name="email" v-validate="'required|email'" required autofocus
                       placeholder="Digite seu email:" v-model="form.email">
              </div>
              <div v-show="errors.has('email')">
                <span class="help-block color-danger">
                  <small>{{ errors.first('email') }}</small>
                </span>
              </div>

            </div>

            <div class="area-login" :class="{'has-danger': errors.has('password') }">
              <label for="">Senha</label>
              <div class="">
                <input class="input-style" type="password" v-validate="'required'" name="password" required
                       placeholder="Senha:" v-model="form.password" data-vv-as="senha">
              </div>
              <div v-show="errors.has('password')">
                <span class="help-block color-danger">
                  <small>{{ errors.first('password') }}</small>
                </span>
              </div>
            </div>


            <div class="checkbox m-b-md m-t-none">
              <label class="i-checks">
                <input type="checkbox" name="remember"><i></i> Lembrar-me
              </label>
            </div>

            <div class="area-login full-width">
              <button type="submit" class="full-width" :disabled="isLoading">Entrar <i v-show="isLoading"
                                                                                       class="fa fa-spinner fa-spin"></i>
              </button>
            </div>

          </form>
          <div class="area-login text-center">
            <a href="">Esqueci minha senha.</a>
          </div>
          <div class="area-login text-center inv-some">
            <div class="text-center">
              Ainda não tem sua conta?
              <br/>
              <router-link :to="{ name: 'cadastro' }">Crie agora</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="basis5 full container center-center column some">
      <div class="img-full">
        <div class="txt-full container center-center" style="height: 100%">
          <div class="text text-center">
            Ainda não tem sua conta?
            <br/>
            <router-link :to="{ name: 'cadastro' }">Crie agora</router-link>

          </div>
        </div>
      </div>
    </div>
  </div> -->
</div>

</template>

<style lang="scss">

  @import './css/master.scss';

</style>

<script>
  // i using element ui alert
  import authService from '@/services/auth.service';
  import {SIGN_IN, SIGN_OUT} from '@/modules/auth';
  export default {
    data () {
      return {
        formError: null,
        form: {
          name: 'lucas',
          email: 'lucas2@lucas.com',
          password: 'secret',
          password_confirmation: 'secret'
        },
        isLoading: false
      }
    },
    mounted(){
//      this.$message('This is a message.');
//      this.$refs.modal1.open();
    },
    methods: {
      validateBeforeSubmit (e) {
        this.isLoading = true;
        this.$validator.validateAll().then(x => {
          this.$router.go('/')
//          authService.signup(this.form).then(user => {
//            this.$router.go('/')
//          }).catch(error => {
//
//            var errors = error.response.data.errors
//            var msg    = [];
//            _.forEach(errors, function (value, key) {
//              msg += value[0];
//            });
//
//            this.$notify.error({
//              message: msg,
//              title: 'Oppps!! Algo deu errado',
//            });
//
//
//            this.isLoading = false;
//          });
        }).catch(e => {
          alert(e)
        });
      }
    }
  }
</script>
