<template>
    <div id="userInfo" class="user" v-if="userData">
        <div class="user-card">
            <div class="user-card-bg">
                <div class="bg-image" :style="`background-image: url(${userData.banner_image})`"></div>
                <div class="bg-mask"></div>
            </div>
            <div class="user-card-center">
                <div class="user-card-header">
                <i class="iconfont icon-zuojiantou" @click="back()"></i>
                <i class="iconfont icon-fenxiang"></i>
                </div>
                <a class="avatar user-img">
                    <span><img :src="userData.images" alt="" class="avatar-img"></span>
                    <img v-if="userData.official_verified" src="@/assets/images/official.jpg" alt="小红书官方认证" class="official-verified-icon">
                </a>
                <p class="user-name">{{userData.nickname}}</p>
                <div class="user-about">
                    <div class="user-about-item follows">
                    <p class="num follows-num">{{userData.follows}}</p>
                    <p class="text follows-text">关注</p>
                    </div>
                    <div class="user-about-item fans">
                    <span class="line left"></span>
                    <p class="num fans-num">{{userData.fans}}</p>
                    <p class="text fans-text">粉丝</p>
                    <span class="line right"></span>
                    </div>
                    <div class="user-about-item liked">
                    <p class="num liked-num">{{userData.liked}}</p>
                    <p class="text liked-text">获赞与收藏</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="user-more-info">
            <div class="follow-btn">关注</div>
            <p class="user-location-level">
            <i class="iconfont icon-dingwei"></i>
            <span>{{userData.location}}</span>
                <span class="line"></span>
            <i class="iconfont icon-dengji"></i>
            <span>{{userData.level.name}}</span>
            <img :src="userData.level.image" alt="">
            </p>
            <div v-if="userData.desc" class="user-introduce">{{userData.desc}}</div>
            <div v-else class="user-introduce">还没有简介哦</div>            
        </div>
    </div>
</template>
 <script>
import { mapState, mapActions } from "vuex";
import axiosRq from "../config";
export default {
  name: "userInfo",
  props: ["userData"],
  data() {
    return {};
  },
  methods:{
      back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
.user {
  position: relative;
  .user-card-header {
    width: 100%;
    height: $header-height;
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    color: $font-title-color;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    align-items: center;
    i {
      font-size: $font-size + 6;
      color: $white;
    }
  }
  .user-card {
    position: relative;
    width: 100%;
    height: 210px;

    &-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .bg-image {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
      }
      .bg-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
    &-center {
      width: 100%;
      height: auto;
      margin: 0 auto;
      position: absolute;
      color: $white;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      z-index: 10;
      .avatar {
        position: relative;
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto;
        .avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          vertical-align: middle;
        }
        .official-verified-icon {
          position: absolute;
          width: 11px;
          height: 11px;
          display: block;
          right: 3px;
          bottom: 8px;
          z-index: 10;
        }
      }
      .user-img {
        margin-top: 42px;
        span {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid $white !important;
          position: absolute;
        }
        span:before {
          content: "";
          position: absolute;
          width: 200%;
          height: 200%;
          top: 0;
          left: 0;
          -webkit-transform-origin: 0 0;
          -moz-transform-origin: 0 0;
          -o-transform-origin: 0 0;
          -ms-transform-origin: 0 0;
          transform-origin: 0 0;
          -webkit-transform: scale(0.5);
          -moz-transform: scale(0.5);
          -o-transform: scale(0.5);
          -ms-transform: scale(0.5);
          transform: scale(0.5);
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          border: 1px solid #e6e6e6;
          border: none;
        }
      }
      .user-name {
        margin: 12px auto;
        text-align: center;
      }
      .user-about {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15%;
        &-item {
          flex: 1;
          text-align: center;
          .num {
            font-size: 16px;
          }
          .text {
            font-size: 12px;
          }
        }
        .fans {
          position: relative;
          .line {
            position: absolute;
            width: 1px;
            height: 18px;
            background-color: $white;
            top: 50%;
            transform: translateY(-50%);
            display: inline-block;
          }
          .left {
            left: 0;
          }
          .right {
            right: 0;
          }
        }
      }
    }
  }
  .user-more-info {
    position: relative;
    background-color: $white;
    overflow: hidden;
    padding-top: 12px;
    .follow-btn {
      width: 130px;
      height: 30px;
      line-height: 30px;
      background: $red;
      color: $white;
      font-size: $font-size + 2;
      border-radius: 5px;
      text-align: center;
      margin: 0 auto;
    }
    .user-location-level {
      font-size: $font-size - 2;
      text-align: center;
      padding: 8px 0;
      i,
      span,
      img {
        vertical-align: middle;
      }
      i {
        color: $font-detail-color;
      }
      .line {
        height: 10px;
        width: 1px;
        margin: 0 8px;
        background-color: $font-detail-color;
        display: inline-block;
      }
      img {
        width: 14px;
        height: 14px;
      }
    }
    .user-introduce {
      font-size: $font-size - 2;
      margin: 0 12px;
      padding: 8px 0;
      border-top: 1px solid #eee;
    }
  }
  
}
</style>
