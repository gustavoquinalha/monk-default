<template>
  <div>
    <footer>
      <div class="footer-bg">
        <div class="footer">
            <div class="sitemap">
              <ul class="container wrap">
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Escolas</a></li>
                <li><a href="#">Minds English</a></li>
                <li><a href="#">Ajuda</a></li>
                <li><a href="#">Normas</a></li>
                <li><a href="#">Termos</a></li>
                <li><a href="#">Privacidade</a></li>
              </ul>
            </div>
          <div class="rights">
            © 2017 Minds, Inc. Todos os direitos reservados.
          </div>
        </div>
        
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  .footer-bg {
    background: #C2003C;
    width: 980px;
    max-width: 90%;
    margin: 0 auto;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: 13px;
    overflow: hidden;
    color: #fff;
      .footer {
        height: 60px;
        max-width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      li {
        margin-right: 10px;
      }
      a {
        color: #fff;
        opacity: .7;
        &:hover {
          opacity: 1
        }
      }
  }
  @media screen and (max-width: 870px) {
      // .sitemap {
      //   display: none
      // }
      .footer {
        flex-wrap: wrap;
        justify-content: center!important;
        align-items: center!important;
        text-align: center!important;
        text-align: center;
          .sitemap .container.wrap {
            justify-content: center
          }
      }
      .footer-bg {
        text-align: center;
        justify-content: center;
      }
  }
</style>

<script type="text/javascript">
  import Vue from 'vue'
  import axios from '@/plugins/http'
  import dashboardService from '@/services/dashboard.service';

  export default {
    data() {
      return {}
    }
  }
</script>
