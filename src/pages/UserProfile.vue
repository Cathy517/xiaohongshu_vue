<template>
  <div id="UserProfile" v-if="userJson">
    <UserInfo :userData="userJson"></UserInfo>
    <UserTab :userTab="userJson" :noteListItem="noteJson" :boardList="boardJson"></UserTab>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import axiosRq from "../config";
import UserInfo from "@/components/UserInfo";
import UserTab from "@/components/UserTab";
import NoteList from "@/components/NoteList";
export default {
  name: "UserProfile",
  components: {
    UserInfo,
    UserTab,
    NoteList
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getUserData", "getNoteData","getBoardData"]),
    
  },
  computed: {
    ...mapState({
      userJson: state => state.user.userinfo.data,
      noteJson: state => state.user.usernote.data,
      boardJson: state => state.user.userboard.data,      
    })
  },
  mounted() {
    let id = this.$route.params.id;
    this.getUserData({ id });
    // let pageSize = this.$store.state.user.userinfo.data.notes;
    // console.log(pageSize);
    this.getNoteData({ id: id });
    this.getBoardData({ id: id });
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
#UserProfile {
  
#NoteList{
  margin-top: 8px
}
 
}
</style>
