<template>
  <div id="Purchase">
      <Sidebar></Sidebar>
  <Header></Header>
      Purchase
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
export default {
  name: "Purchase",
  data() {
    return{}
  },
  components: {
    Sidebar,
    Header
  }
};
</script>