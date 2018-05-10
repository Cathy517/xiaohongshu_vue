<template>
<div id="Discovery">
  <Sidebar></Sidebar>
  <Header></Header>
  <ul class="category">
    <li class="category-item" v-for="i in categorys" :key="i.id">{{i.name}}</li>
    </ul>
    <NoteList :noteListItem="noteList"></NoteList>
</div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import NoteList from "@/components/NoteList"
import axiosRq from "../config"
export default {
  name: "Discovery",
  data() {
    return {
      categorys: [
        {
          id: "tuijian",
          name: "推荐"
        },
        {
          id: "shanghai",
          name: "上海"
        },
        {
          id: "shipin",
          name: "视频"
        },
        {
          id: "shishang",
          name: "时尚"
        },
        {
          id: "hufu",
          name: "护肤"
        },
        {
          id: "caizhuang",
          name: "彩妆"
        },
        {
          id: "meishi",
          name: "美食"
        },
        {
          id: "lvxing",
          name: "旅行"
        },
        {
          id: "yingshi",
          name: "影视"
        }
      ],
      noteList:[]
    };

  },
  components: {
    Header,
    NoteList,
    Sidebar
  },
  methods: {
    getNoteList(page_size,oid,page) {
      axiosRq("GET", "note_list", {
        page_size: page_size,
        oid: oid,
        page: page
      }).then(res=>{
        console.log(res.data);
        this.noteList=res.data;
      })
    }
  },
  computed:{

  },
  mounted() {
    this.getNoteList(20,'recommend',1);
  }
};
</script>

<style lang="scss">
@import "../assets/css/variables.scss";
.category {
  margin-top: 85px;
  width: 100%;
  background: $white;
  display: inline-block;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  border-bottom: 1px solid #eee;
  &-item {
    display: inline-block;
    padding: 5px 12px;
    color: lighten($black, 30%);
  }
}
</style>

