<template>
  <div>
  <!-- <router-link :to="{ name: 'cadastro' }">Crie agora</router-link> -->
    <div class="container signin center">
      <div class="blackify">

      </div>
      <form role="form" method="POST" action="" @submit.prevent="validateBeforeSubmit">
        <div class="margin size box-signin">

          <div class="box-signin-logo">
            <img src="~assets/img/logo.svg" alt="">
          </div>

          <div class="box-signin-login" :class="{'has-danger': errors.has('email') }">
            <input type="email" name="email" v-validate="'required|email'" placeholder="USUÁRIO" v-model="form.email" required autofocus>
            <div v-show="errors.has('email')" class="help-block">
              <small>{{ errors.first('email') }}</small>
            </div>
          </div>

          <div class="box-signin-login" :class="{'has-danger': errors.has('password') }">
            <input type="password" v-validate="'required'" name="password" placeholder="SENHA" v-model="form.password" data-vv-as="senha" required>

            <div v-show="errors.has('password')" class="help-block">
              <small>{{ errors.first('password') }}</small>
            </div>
          </div>

          <div class="box-signin-button">
            <router-link :to="{ name: 'home'}">
              <button type="button" name="button" :disabled="isLoading">Entrar <i v-show="isLoading" class="fa fa-spinner fa-spin"></i></button>
            </router-link>
          </div>

          <div class="box-signin-lembrete container space-between wrap">
            <div class="container align-center">
              <input type="checkbox" name="" value="" v-model="saveAccount">
              <p class="margin-left-10"> Lembrar Login</p>
            </div>
            <div class="">
              <p>Esqueceu sua senha?</p>
            </div>
          </div>

        </div>
      </form>
    </div>





  </div>

</template>

<style lang="scss">
  @import './css/master.scss';
</style>


<script>
  import authService from '@/services/auth.service';
  import {
    SIGN_IN, SIGN_OUT
  }
  from '@/modules/auth';
  export default {
    data() {
        return {
          formError: null,
          form: {
            email: '',
            password: ''
          },
          saveAccount: false,

          loading: true,
          isLoading: false,
        }
      },
      mounted() {

        //    console.log(this.$router.go('/'))
      },
      methods: {
        validateBeforeSubmit(e) {
          this.isLoading = true;
          this.$validator.validateAll().then(x => {

              this.$router.go('/')

              //          authService.signin(this.form).then((user) => {
              //             this.$router.go('/')
              //          }).catch(({response}) => {
              //            var errors = response.data.message;
              //            this.$notify.error({
              //              message: errors,
              //              title: 'Oppps!! Algo deu errado',
              //            });
              //
              //
              //            this.isLoading = false;
              //          });

            }).catch(e => {
              alert(e)
            })
            //        this.isLoading = false;
        }
      }
  }
</script>
