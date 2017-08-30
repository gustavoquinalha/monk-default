<template>
  <transition name="el-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="el-loading-mask"
      :class="[customClass, { 'is-fullscreen': fullscreen }]">
      <div class="el-loading-spinner">
        <svg width="200" class="" version="1.1" id="Camada_1" x="0px" y="0px"
  viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
    <polyline class="pulse loader-style" points="38,160.7 103.3,160.7 131.3,218 168.7,82 188.7,162 262,162 "/>
    <polyline class="pulse loader-opacity" points="38,160.7 103.3,160.7 131.3,218 168.7,82 188.7,162 262,162 "/>
  </svg>
        <p v-if="text" class="el-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        text: null,
        fullscreen: true,
        visible: false,
        customClass: ''
      };
    },
    methods: {
      handleAfterLeave() {
        this.$emit('after-leave');
      },
      setText(text) {
        this.text = text;
      }
    }
  };
</script>
<style scoped>
/* @import '../../theme/loading.css'; */

  .pulse {
    fill: #FFF;
    stroke: #268df3;
    stroke-width: 20;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }
  .loader-style {
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-fill-mode: backwards;
    stroke-dasharray: 200;
    animation-iteration-count: infinite;
    animation-name: colorize;
  }

  @keyframes colorize {
    0% {
      stroke-dashoffset: 800;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  .loader-opacity {
    opacity: .3
  }
</style>
