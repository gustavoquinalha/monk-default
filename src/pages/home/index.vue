<template>
  <div class="flex-basis-1100 flex-grow-1 conteudo-principal">
  teste
  </div>
</template>

<style media="screen" lang="scss" scoped>
    @import './css/item.scss';

    .conteudo-principal {
      background: #F2F4F8;
      box-sizing: border-box;
      padding-left: 20px;
    }
</style>

<script type="text/javascript">
  import Vue from 'vue'
  import axios from '@/plugins/http'
  import dashboardService from '@/services/dashboard.service';


  export default {
    components: {
    },
    data() {
      return {}
    },
    mounted() {

    }
  }
</script>
