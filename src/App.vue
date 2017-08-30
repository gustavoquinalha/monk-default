<template>
  <div v-on:resize="handleResize($event)">
  
    <div class="container">
  
      <transition name="slide-fade-page">
        <router-view name="menuView" :showMenu="showMenu" @show-menu="receiveToggleMenu"></router-view>
      </transition>
  
      <transition name="slide-fade-page">
        <router-view></router-view>
      </transition>
    </div>
  
  </div>
</template>

<script>
  import Vue from 'vue'
  
  
  export default {
    name: 'app',
    components: {},
  
    data() {
      return {
        windowWidth: 0,
        windowHeight: 0,
  
        showMenu: false,
        showMobile: false,
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize)
    },
    watch: {
      showMenuResize() {
        return this.windowWidth < 1280
      }
    },
    methods: {
      handleResize(event) {
        this.windowWidth = event.currentTarget.innerWidth;
      },
  
  
      toggleMenu: function() {
        this.showMenu = !this.showMenu
      },
      receiveToggleMenu: function(e) {
        // if (showMenuResize) {
        this.showMenu = !this.showMenu
        // }
      },
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize)
  
    }
  }
</script>

<style>
  @import '../node_modules/font-awesome/css/font-awesome.min.css';
  @import './assets/css/master.css';
  @import './assets/css/grid.scss';
  @import './assets/css/colors.scss';
  @import './assets/css/main.css';
  .container-page {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 90%;
    margin: 0 auto;
    width: calc(980px + 20px);
    padding-top: 10px;
    flex-wrap: wrap;
    min-height: calc(100vh - 180px);
  }
</style>
