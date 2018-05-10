<template>
  <div id="Attention">
      <Sidebar></Sidebar>
      <Header></Header>

      
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
export default {
  name: "Attention",
  data() {
    return {};
  },
  components: {
    Sidebar,
    Header,
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
</style>
