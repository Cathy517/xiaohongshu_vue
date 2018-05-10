<template>
  <div id="Board">
      <ul class="user_board" v-if="boardListItem"> 
          <li class="board-item" v-for="(item,index) in boardListItem" :key="index">
              <div class="board-title">{{item.title}}</div>
              <p class="board-tag">
                  <span>笔记·{{item.notes}}</span>
                  <span>粉丝·{{item.fans}}</span>                  
              </p>
              <ul class="board-tag-images">
                  <li class="board-img" v-for="(boardImg,index) in item.images" :key="index"><img :src="boardImg" alt=""></li>              
              </ul>
              <div class="board-create">
                <span class="avatar">
                    <img :src="item.user.image" alt="" class="avatar-img">
                    <img  src="@/assets/images/official.jpg" alt="小红书官方认证" class="official-verified-icon">
                </span>
                <div class="create-text">
                    由
                    <span class="create-user">{{item.user.nickname}}</span>
                    创建
                </div>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import axiosRq from "../config";
export default {
  name: "Board",
  props: ["boardListItem"],
  data(){
      return{};
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
.user_board {
  .board-item:first-child {
    margin: 0 0 8px !important;
  }
  .board-item {
    background: $white;
    margin: 0 8px 8px;
    padding: 10px 0;
    border-radius: 3px;
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.1);
    .board-title {
      color: $font-color;
      font-size: $font-size;
      font-weight: 500;
      padding: 0 10px;
      margin-bottom: 3px;
    }
    .board-tag {
      color: $font-detail-color;
      font-size: $font-size - 2;
      padding: 0 10px;
    }
    .board-tag-images {
      display: flex;
      width: 100%;
      padding: 12px 10px;
      border-bottom: 1px solid #eee;
      .board-img {
        flex: 1;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .board-img:last-child {
        margin-right: 0 !important;
      }
    }
    .board-create {
      display: flex;
      padding: 8px 10px 0;
      .create-text {
        margin-left: 10px;
        font-size: $font-size;
        color: $font-detail-color;
        line-height: 25px;
        .create-user {
          color: $font-color;
        }
      }
    }

    .avatar {
      position: relative;
      .avatar-img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .official-verified-icon {
        position: absolute;
        width: 8px;
        height: 8px;
        display: block;
        right: -1px;
        bottom: -1px;
        z-index: 10;
      }
    }
  }
}
</style>

