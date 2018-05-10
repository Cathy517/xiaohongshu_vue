<template>
  <div id="Header" class="fixed">
    <div class="nav">
        <div class="nav-item">
            <div class="avatar" @click="showInfo()">
                    <img src="@/assets/images/avatar.jpg" alt="">
                </div>
        </div>
            <router-link :to="'/attention'" class="nav-item">
              <div>关注</div>
            </router-link>
             <router-link :to="'/discovery'" class="nav-item">
              <div>发现</div>
            </router-link>
             <router-link :to="'/purchase'" class="nav-item">
              <div >商城</div>
            </router-link>
        <div class="nav-item">
            <i class="iconfont icon-xiangji"></i>
        </div>
    </div>
    <div class="search">
        <router-link :to="'/search'">
          <div class="input-container">
            <i class="iconfont icon-sousuo"></i>
            <input type="search" placeholder="搜索笔记、商品和用户">
          </div>
        </router-link>
    </div>
    
</div>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  components: {},
  methods: {
    showInfo() {
      this.$store.commit("SHOW_SLIDE", true);
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
.fixed {
  background: $white;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  .nav {
    display: flex;
    align-items: center;
    &-item {
      flex: auto;
      height: 36px;
      line-height: 36px;
      text-align: center;
      color: $font-color;
      font-size: $font-size;
      i {
        font-size: 22px;
        color: $font-detail-color;
      }
    }
    .router-link-active {
      border-bottom: 2px solid $red;
    }
    .avatar {
      height: 28px;
      width: 28px;
      border-radius: 50%;
      margin: 5px auto 0;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .search {
    padding: 12px 25px 8px;
    border-bottom: 1px solid #eee;
    .input-container {
      display: flex;
      background: $body-color;
      padding: 3px 10px;
      border-radius: 15px;
      input {
        flex: 1;
        background: 0 0;
        color: $black;
        border: none;
        padding-left: 7px;
      }
    }
  }
}
</style>

