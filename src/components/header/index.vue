<template>
  <div>

    <div class="rel-menu">
      <div class="menu-theme">
        <div class="menu size margin ">

          <div class="logo basis1 text-left">
            <h1>MINDS</h1>
          </div>

          <div class="menu-link basis6 flex1">
            <ul class="container justify-center align-center">
              <li>
                <router-link :to="{ name: 'home'}">Início</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'a'}">Books</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'home'}">Presencial</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'home'}">Palavras</router-link>
              </li>
            </ul>
          </div>


          <div class="menu-hamburger" @click="toggleMenu">
            <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
          </div>

        </div>
      </div>
    </div>

    <transition name="fade-menu">
      <div class="slide-background-menu" v-show="showMenu" @click="toggleMenu" v-cloak @keyup.esc="toggleMenu">
      </div>
    </transition>

    <transition name="slide-fade">
      <div class="menu-responsive" v-show="showMenu">
        <div class="close-reponsive">
          <div @click="toggleMenu">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div class="space">
          <div class="user-responsive">

            <div class="container perfil-user-responsive align-center">
              <div class="img-user-responsive">
                <img src="http://i.imgur.com/B1fpjMb.jpg" width="80" alt="">

              </div>
              <div class="name-user-responsive">
                <strong>{{user.name}}</strong>
                <br />{{user.lastname}}

              </div>
            </div>

          </div>
          <ul class="responsive-link">
            <li @click="showMenu = false">
              <router-link :to="{ name: 'home'}"> <i class="fa fa-home" aria-hidden="true"></i> Início</router-link>
            </li>
            <li @click="showMenu = false">
              <router-link :to="{ name: 'home'}"> <i class="fa fa-book" aria-hidden="true"></i> Books</router-link>
            </li>
            <li @click="showMenu = false">
              <router-link :to="{ name: 'home'}"> <i class="fa fa-user" aria-hidden="true"></i> Presencial</router-link>
            </li>
            <li @click="showMenu = false">
              <router-link :to="{ name: 'home'}"> <i class="fa fa-font" aria-hidden="true"></i> Palavras</router-link>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <!-- <v-touch @swipeleft="doSomething" @swiperight="doSomething" :swipe-options="{ threshold: 200 }">
      <div style="width: 100%; height: 100vh; background: #6AB7CD">
        
      </div>
    </v-touch> -->

  </div>





  </div>
</template>

<style scoped lang="scss">
  @import './css/menu.scss';
  .menu-user-stats-power {
    display: none;
  }
  .slide-fade-enter-active {
    transition: all .1s cubic-bezier(.37, .61, .58, .86);
  }
  
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(.37, .61, .58, .86);
  }
  
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(-400px);
  }
  
  .slide-background-menu {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .1);
    top: 60px;
    left: 0;
    position: fixed;
  }
  
  .fade-menu-enter-active,
  .fade-menu-leave-active {
    transition: opacity .1s
  }
  
  .fade-menu-enter,
  .fade-menu-leave-to {
    opacity: 0
  }

  @media screen and (max-width: 1079px) {
    .menu-user-stats-power {
      display: block
    }
  }
</style>

<script>
  import {
    mapMutations, mapGetters
  }
  from 'vuex'
  import authService from '@/services/auth.service'
  import {
    SIGN_OUT
  }
  from '@/modules/auth/'

  export default {
    components: {
      
    },
    props: {
      showMenu: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      ...mapGetters(['user', 'isLoggedIn']),
    },
    methods: {
      toggleMenu: function() {
        this.$emit('show-menu')
      }
    }
  }
</script>
