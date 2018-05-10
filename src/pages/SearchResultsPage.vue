<template>
    <div id="SearchResultsPage" v-if="keywordJson">
        <div class="header">
            <div class="sousuo">
            <i class="iconfont icon-zuojiantou back" @click="back()"></i>
            <div class="input-container">
                <input type="search" :value="searchword">
                <i class="iconfont icon-shanchu"></i>
            </div>
        </div>
        <div class="nav">
            <!-- <router-link :to="''" class="nav-item"> -->
              <div class="nav-item">全部</div>
            <!-- </router-link>
             <router-link :to="''" class="nav-item"> -->
              <div class="nav-item">商品</div>
            <!-- </router-link>
             <router-link :to="''" class="nav-item"> -->
              <div class="nav-item">用户</div>
            <!-- </router-link> -->
        </div>
        </div>
        <NoteList :noteListItem="keywordJson"></NoteList>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import axiosRq from "../config";
import NoteList from "@/components/NoteList";

export default {
  name: "SearchResultsPage",
  data() {
    return {};
  },
  components: {
    NoteList
  },
  methods: {
    ...mapActions(["getKeywordData"]),
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState({
      keywordJson: state => state.search.keyword.data,
      searchword: state => state.status.searchWord
    })
  },
  mounted() {
    let keyword = this.$route.params.name;
    console.log(keyword);
    this.getKeywordData({ type: "note", keyword: keyword, page: 1 });
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";

#SearchResultsPage {
  .header {
    background: $white;
    border-bottom: 1px solid #eee;
  }
  .sousuo {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 8px 20px 8px 0;
    .back {
      font-size: 24px;
      padding: 0 8px 0 12px;
    }
    .input-container {
      flex: auto;
      display: flex;
      background: $body-color;
      padding: 3px 10px;
      border-radius: 6px;
      i {
        font-size: 16px;
      }
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
  .nav {
    display: flex;
    align-items: center;
    padding: 0 20%;
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
  }
}
</style>

