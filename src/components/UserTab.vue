<template>
  <div class="UserTab">
       <div class="tab-content" v-if="userTab">
            <ul class="tab-inner-container">
                <li v-for="(item,index) in utabs" :key="index" class="cube-tab-item" :class="{active:index===tabIndex}" @click="toggleTabs(item.view,index)">
                    <div>
                    <span>{{item.type}}·</span>
                    <span>{{item.type=='笔记'?userTab.notes:userTab.boards}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="tabs">
            <component :is="currentView" keep-alive :noteListItem="noteListItem" :boardListItem="boardList"></component>
            <!-- <div v-if="currentView==NoteList" class="end">- The END -</div>  -->
        </div>
            <!-- <NoteList v-if="noteListItem" :noteListItem="noteListItem"></NoteList>
            <Board v-if="boardList" :boardListItem="boardList"></Board> -->

  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import axiosRq from "../config";
import NoteList from "@/components/NoteList";
import Board from "@/components/Board";

export default {
  name: "UserTab",
  props: ["userTab", "noteListItem", "boardList"],
  data() {
    return {
      NoteList: "NoteList",
      Board: "Board",
      currentView: "NoteList",
      utabs: [
        {
          type: "笔记",
          view:NoteList
        },
        {
          type: "专辑",
          view:Board
        }
      ],
      tabIndex:0
    };
  },
  components: {
    NoteList,
    Board
  },
  methods: {
    toggleTabs(tabText, index) {
      this.currentView = tabText;
      this.tabIndex = index;
    }
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
.active {
  border-bottom: 2px solid $red;
  font-weight: bold
}
.tab-content {
  border-top: 1px solid #eee;
  background: $white;
  overflow: hidden;
  border-bottom: 1px solid #eee;
  .tab-inner-container {
    display: flex;
    position: relative;
    float: left;
    left: 50%;
    transform: translateX(-50%);
    .cube-tab-item {
      float: left;
      padding: 15px 18px 10px;
      font-size: $font-size + 2;
      line-height: 16px;
      text-align: center;
    }
  }
}
.end {
  font-size: $font-size;
  color: $font-color;
  text-align: center;
  padding: 8px 0;
}
</style>
