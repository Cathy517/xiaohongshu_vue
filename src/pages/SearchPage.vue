<template>
  <div id="SearchPage">
      <div class="nav">
          <div class="input-container">
            <i class="iconfont icon-sousuo"></i>
            <input type="search">
          </div>
          <div class="cancle" @click="back()">取消</div>
    </div>

    <div class="search-page">
      <div class="search-recommend">
        <div class="search-title">热门搜索</div>
        <ul class="search-keywords">
          <li class="keyword" @click="word(hotwordItem)" v-for="(hotwordItem,index) in hotwordJson" :key="index">
            <router-link :to="`/SearchResultsPage/${hotwordItem}`">
              {{hotwordItem}}
            </router-link>
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import axiosRq from "../config";
export default {
  name: "SearchPage",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getHotwordData"]),
    back() {
      this.$router.go(-1);
    },
    word(hotwordItem){
      this.$store.commit('GETSEARCHWORD',hotwordItem)
    }
  },
  computed: {
    ...mapState({
      hotwordJson: state => state.search.hotword.data,
    })
  },
  mounted() {
    this.getHotwordData({ type: "hotword" });
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
#SearchPage {
  .nav {
    display: flex;
    align-items: center;
    background: $white;
    padding: 8px 12px;
    border-bottom: 1px solid #eee;
    .input-container {
      flex: auto;
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
    .cancle {
      padding-left: 12px;
      color: $font-detail-color;
    }
  }
  .search-page {
    background: $white;
    position: fixed;
    top: 45px;
    // bottom: 0;
    width: 100%;
    .search-recommend {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      .search-title {
        color: $font-detail-color;
        font-size: $font-size - 2;
        padding: 10px 12px;
      }
      .search-keywords {
        width: 100%;
        background: $white;
        padding: 12px 12px 5px 12px;
        color: $font-color;
        font-size: $font-size;
        white-space: normal;
        .keyword {
          display: inline-block;
          padding: 8px 10px;
          margin: 0 8px 8px 0;
          background: $body-color;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
