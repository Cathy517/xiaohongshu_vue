<template>
  <div id="CommentSummary" v-if="summary">
      <router-link :to="{path:`/noteComment/${summary.target_note.id}`,query:{page_size:summary.total}}">
        <div class="header">
            <div class="title-text">笔记评论</div>
            <div class="comment-num">共{{summary.total}}条评论
                <i class="iconfont icon-jiantouyou"></i>
            </div>
        </div>
      </router-link>
      <div class="content">
          <div class="current-user"><!-- 此处需改为当前登录用户信息-->
            <div class="avatar">
                <img :src="summary.target_note.user.image" alt="" class="avatar-img">
                <img v-if="summary.target_note.user.official_verified" src="@/assets/images/official.jpg" alt="小红书官方认证" class="official-verified-icon">
            </div>
            <div class="promp">想勾搭，先评论</div>   
          </div>
          <ul class="comment">
              <li class="comment-item" v-for="(item,index) in summary.comments" :key="index">
                <div class="avatar">
                    <img :src="item.user.image" alt="" class="avatar-img">
                    <img v-if="item.user.official_verified" src="@/assets/images/official.jpg" alt="小红书官方认证" class="official-verified-icon">
                </div>
                <div class="comment-content">
                    <div class="comment-info">
                        <div class="nick-name">{{item.user.nickname}}</div>
                        <p>{{item.content}}</p>
                    </div>
                    <div class="comment-stats">
                        <div class="publish-time">{{item.time}}</div>
                        <div class="huifu">回复 · </div>
                        <div class="likes">
                            <i class="iconfont icon-dianzan"></i> {{item.likes}}
                        </div>
                    </div>
                    <div v-if="item.sub_comments.length!=0" class="reply">
                        <div class="sub_comment">
                            <span class="name">{{item.sub_comments[0].user.nickname}}</span>
                            <span class="name" v-if="item.sub_comments[0].user.id==summary.target_note.user.id">(作者)</span>
                            <span class="name" v-if="item.sub_comments[0].target_comment.user.id!==item.user.id">回复{{item.sub_comments[0].target_comment.user.nickname}}</span>
                            <span class="reply-content">: {{item.sub_comments[0].content}}</span>
                        </div>
                        <div class="sub_comments_total">共{{item.sub_comments_total}}条回复 <i class="iconfont icon-jiantouyou"></i>
                        </div>
                    </div>
                </div>
              </li>
          </ul>
      </div>
      <router-link :to="`/noteComment/${summary.target_note.id}`">
        <div class="viewAll">查看全部{{summary.total}}条评论</div>
      </router-link>
  </div>
</template>
<script>
export default {
  name: "CommentSummary",
  components:{
  },
  props: ["summary"],
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";

#CommentSummary {
  background: $white;
  margin-top: 8px;
  .header {
    display: flex;
    font-size: $font-size - 2;
    line-height: 12px;
    margin-left: 10px;
    padding: 12px 10px 12px 0;
    border-bottom: 1px solid $grey;
    .title-text {
      flex: auto;
      color: $font-color;
      border-left: 2px solid $red;
      padding-left: 5px;
    }
    .comment-num {
      color: $font-detail-color;
      i {
        font-size: $font-size - 2;
      }
    }
  }
  .avatar {
    position: relative;
    .avatar-img {
      width: 28px;
      height: 28px;
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
  .content {
    padding: 0px 15px;
    .current-user {
      display: flex;
      padding: 8px 0;
      .promp {
        flex: auto;
        margin-left: 10px;
        background: $body-color;
        color: $font-color;
        font-size: $font-size - 2;
        line-height: 12px;
        padding: 8px 0 0 10px;
        border-radius: 3px;
      }
    }
    ul {
      li {
        display: flex;
        padding: 8px 0;
        .comment-content {
          width: 100%;
          padding-left: 15px;
          .comment-info {
            font-size: $font-size;
            color: $font-color;
            .nick-name {
              color: $font-detail-color;
            }
            p {
              padding: 5px 0;
            }
          }
          .comment-stats {
            display: flex;
            font-size: $font-size - 2;
            color: $font-detail-color;
            .publish-time {
              flex: auto;
            }
            .likes {
              margin-left: 5px;
              i {
                font-size: $font-size - 2;
              }
            }
          }
          .reply {
            background: $body-color;
            font-size: $font-size - 2;
            padding: 6px 10px;
            margin-top: 6px;
            .sub_comment {
              .name {
                color: $font-detail-color;
              }
              .reply-content {
                color: $font-color;
              }
            }
            .sub_comments_total {
              color: $blue;
            }
          }
        }
      }
    }
  }
  .viewAll{
    text-align: center;
    padding: 12px 0;
    color: $font-detail-color;
    font-size: $font-size;
    border-top: 1px solid $grey
  }
}
</style>
