<template>
  <div id="Banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in bannerDate" :key="index">
        <img :src="item.original" alt="">
        <div v-if="bannerDate.length>1" class="img-indicator">{{index+1}}/{{bannerDate.length}}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Banner",
  props: ["bannerDate"],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        autoplay: false,
        loop: true
      }
    };
  }
};
</script>
<style lang="scss">
@import "../assets/css/variables.scss";
#Banner {
  width: 100%;
  .swiper-slide {
    text-align: center;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
    .img-indicator{
      position: absolute;
      right: 10px;
      bottom: 3px;
      color: $white;
      font-size: $font-size
    }
  }
}
</style>
