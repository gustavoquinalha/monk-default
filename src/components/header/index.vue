<template>
<div class="flex-basis-100 menu-relative">
    <div class="menu">menu</div>



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
