<template>
  <div id="Sidebar" :class="show?'showSlide':'hideSlide'">
      <div :class="show?'mask':'' " @click="showInfo()"></div>
      <transition name="slide-fade">
        <div v-if="show" class="menu">
          <div class="user-info">
            <span class="avatar">
                <img src="@/assets/images/avatar.jpg" alt="" class="avatar-img">
                <img  src="@/assets/images/official.jpg" alt="小红书官方认证" class="official-verified-icon">
            </span>
            <div class="nick-name">LeeHom</div>
          </div>
          <ul class="personal-info info-list">
            <li v-for="i in personal" :key="i.id">
              <i class="iconfont" :class="i.id"></i>
              <span>{{i.name}}</span>
            </li>
          </ul>
          <ul class="product-info info-list">
            <li v-for="i in product" :key="i.id">
              <i class="iconfont" :class="i.id"></i>
              <span>{{i.name}}</span>
            </li>
          </ul>
          <ul class="setting-info info-list">
            <li v-for="i in setting" :key="i.id">
              <i class="iconfont" :class="i.id"></i>
              <span>{{i.name}}</span>
            </li>
          </ul>
        </div>
      </transition>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      personal: [
        {
          id: "icon-guanzhu",
          name: "我的关注"
        },
        {
          id: "icon-shoucang",
          name: "我的收藏"
        },
        {
          id: "icon-xiaoxi",
          name: "消息"
        }
      ],
      product: [
        {
          id: "icon-gouwuche",
          name: "购物车"
        },
        {
          id: "icon-dingdan",
          name: "订单"
        },
        {
          id: "icon-shuquan",
          name: "薯券"
        },
        {
          id: "icon-xinyuandan",
          name: "心愿单"
        },
        {
          id: "icon-huiyuan",
          name: "黑卡会员"
        }
      ],
      setting: [
        {
          id: "icon-shezhi",
          name: "设置"
        }
      ]
    };
  },
  methods: {
    showInfo() {
      this.$store.commit('SHOW_SLIDE',false);
    }
  },
  computed:{
    show(){
      return this.$store.state.status.show;
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";

#Sidebar {
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  z-index: 200;
  
}
.hideSlide{
  transform: translate(-500px,0)
}
.showSlide{
  transform: translate(0px,0px)
}
.mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.avatar {
  position: relative;
  .avatar-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .official-verified-icon {
    position: absolute;
    width: 11px;
    height: 11px;
    display: block;
    right: 0px;
    bottom: -13px;
    z-index: 10;
  }
}
.menu {
  width: 65%;
  background: $white;
  height: 100%;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  .user-info {
    text-align: center;
    padding: 20px 0;
    .nick-name {
      margin-top: 6px;
    }
  }
  .info-list {
    margin-left: 25px;
    border-bottom: 1px solid $grey;
    li {
      padding: 20px 0;
      font-size: $font-size;
      color: $font-color;
      i {
        padding-right: 10px;
        color: $font-detail-color;
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-80%);
  opacity: 0;
}
</style>

