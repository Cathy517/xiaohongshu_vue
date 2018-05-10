<template>
  <div id="NoteContent" v-if="detailContent">
     <div class="author">
       <router-link :to="`/userProfile/${detailContent.user.id}`"  class="author-info">
            <span class="avatar">
                <img :src="detailContent.user.image" alt="" class="avatar-img">
                <img v-if="detailContent.user.official_verified" src="@/assets/images/official.jpg" alt="小红书官方认证" class="official-verified-icon">
            </span>
            <span class="author-nickname">{{detailContent.user.nickname}}</span>
            <img v-if="detailContent.user.level" class="level" :src="detailContent.user.level.image">
       </router-link>
        
        <a class="focus-btn">+关注</a>
     </div>
     <div class="note">
         <div class="title">{{detailContent.title}}</div>
         <div class="content">
           <div v-if="detailContent.desc_json">
            <p v-html='noteContentData' class="paragraph"></p>
          </div>
          <div v-else>
            <p v-for="(para,index) in detailContent.desc.split('\n')" :key="index">{{para}}</p>
          </div>
          
          <!-- <div class="check-more">
            <div class="check-btn">展开剩余81%</div>
          </div> -->
         </div>
         <div class="bottom">
            <div class="publish-date">{{detailContent.time}}</div>
            <div class="collection">{{detailContent.collects}}次收藏</div>
            <div class="like">{{detailContent.likes}}次赞</div>
         </div>
     </div>

  </div>
</template>
<script>
export default {
  name: "NoteContent",
  props: ["detailContent", "noteContentData"],
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
#NoteContent {
  background: $white;
}
.author {
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin: 0 15px;
  border-bottom: 1px solid $grey;
  &-info {
    flex: auto;
    .avatar {
      position: relative;
      .avatar-img {
        width: 36px;
        height: 36px;
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
    .author-nickname {
      display: inline-block;
      max-width: 95px;
      padding: 0 5px;
      color: $font-color;
      vertical-align: middle;
      font-size: $font-size - 2;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .level {
      width: 16px;
      height: 16px;
      vertical-align: middle;
    }
  }
  .focus-btn {
    width: 58px;
    height: 24px;
    padding: 3px;
    text-align: center;
    color: $red;
    font-size: $font-size - 2;
    position: relative;
  }
  .focus-btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: $red solid 1px;
    border-radius: 4px;
    box-sizing: border-box;
  }
}
.note {
  position: relative;
  font-size: $font-size;
  padding: 10px;
  .title {
    padding-bottom: 10px;
    font-weight: bold;
  }
  .content {
    // height: 1104px;
    // overflow: hidden;
    position: relative;
    .paragraph {
      padding: 5px 0;
    }
    img {
      width: 100%;
      height: auto;
    }
    .check-more {
      position: absolute;
      left: 0;
      bottom: -120px;
      width: 100%;
      height: 150px;
      background-image: linear-gradient(
        -180deg,
        hsla(0, 0%, 100%, 0),
        #fff 70%
      );
      z-index: 100;
      .check-btn {
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: $blue;
        font-size: $font-size;
        text-align: center;
      }
      .check-btn:before {
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
        border-top: 1px solid #e6e6e6;
      }
    }
  }
  .bottom {
    display: flex;
    padding: 10px 0;
    color: $font-detail-color;
    font-size: $font-size - 2;
    .publish-date {
      flex: auto;
    }
    .collection {
      padding-right: 12px;
    }
  }
}
</style>
