<template>
  <div id="NoteList">
      <ul class="note-item-wall" v-if="noteListItem">
            <li class="article" v-for="(item,index) in noteListItem" :key="index">
              <router-link :to="`/noteDetail/${item.id}`">
                <div class="cube-image">
                  <img :src="item.cover.original" alt="">
                </div>
              </router-link>
                    <div class="note-content">
                        <span class="note-title">{{item.title}}</span>
                        <p class="note-desc">{{item.desc}}
                        </p>
                    </div>
                    <div class="note-info">
                        <div class="note-author">
                            <a href="" class="avatar">
                                <img :src="item.user.image" alt="" class="avatar-img">
                                <img v-if="item.user.official_verified" src="@/assets/images/official.jpg" alt="小红书官方认证" class="official-verified-icon">
                            </a>
                            <a href="" class="author-nickname">{{item.user.nickname}}</a>
                        </div>
                        <span class="note-likes">
                  <i class="iconfont icon-xin"></i>
                  <span>{{item.likes}}</span>
                        </span>
                    </div>
            </li>
        </ul>
  </div>
</template>
<script>

export default {
  name: "NoteList",
  props: ["noteListItem"],
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
#NoteList{
  margin-top: 8px;
.note-item-wall {
  display: block;
  position: relative;
  column-count: 2;
  column-gap: 8px;
  .article {
    display: block;
    margin: 0 0px 8px 0px;
    background: $white;
    border-radius: 5px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    transition: all 100;
    position: relative;
    -moz-page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
    break-inside: avoid;
    overflow: hidden;
    .cube-image {
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .note-content {
    padding: 8px 8px 0;
    .note-title {
      color: $font-title-color;
      font-size: $font-size;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: 500;
    }
    .note-desc {
      font-size: $font-size - 2;
      color: $font-color;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .note-info {
    position: relative;
    display: flex;
    padding: 8px;
    .note-author {
      display: inline-block;
      .avatar {
        position: relative;
        .avatar-img {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .official-verified-icon {
          position: absolute;
          width: 8px;
          height: 8px;
          display: block;
          right: 3px;
          bottom: -5px;
          z-index: 10;
        }
      }
      .author-nickname {
        display: inline-block;
        width: 95px;
        color: $font-color;
        font-size: $font-size - 2;
        line-height: 2.2;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle
      }
    }
    .note-likes {
      position: absolute;
      right: 8px;
      color: $font-detail-color;
      font-size: $font-size - 2;
      line-height: 1.8;
    }
  }
}
}

</style>

