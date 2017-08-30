<template>
  <div class="itemBox order2">
    <div class="item overflow">
      <div class="title--game">
        <div class="title--game-center container center">
          <div class="title--game-image basis1">
            <img src="../../assets/img/words.svg" width="76">
          </div>
          <div class="title--game-title basis3 flex container column">
            <div class="title--game-title-top container wrap">
              <div class="rounded-border book-title">book 1</div>
              <div class="rounded-border unit">U03</div>
              <div class="rounded-border steps">steps</div>
              <div class="rounded-border of">10 of 30</div>
              <div class="points container wrap">
                <div class="pp" v-for="x in 30"></div>
              </div>
            </div>
            <div class="container align-baseline title--game-title-txt">
              <h2>Words Attack</h2> <span class="span">Listen and Match</span>
            </div>
          </div>
        </div>
      </div>
      <div class="title--game--content" style="min-height: 465px">
        te
      </div>
    </div>
  </div>
</template>

<style media="screen">
  @import './css/title.scss';
  .overflow {
    overflow: hidden
  }
</style>

<script type="text/javascript">
  import axios from '@/plugins/http'
  import dashboardService from '@/services/dashboard.service';
  
  export default {
    components: {},
    data() {
      return {}
    },
    mounted() {}
  }
</script>
