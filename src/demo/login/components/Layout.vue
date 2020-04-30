<template>
  <div class="login">
    <van-row class="login-body" align="center" justify="center">
      <slot name="body"></slot>
    </van-row>
    <van-row class="login-footer" align="center">
      <div>Copyright © 2020 nui-mobile.com</div>
    </van-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Row } from "vant";

@Component({
  components: {
    [Row.name]: Row,
  }
})
export default class Layout extends Vue {
  name = "Layout";
}
</script>

<style lang="less" scoped>
@page: login;
@footerHeight: 50px;
.@{page} {
  width: 100%;
  height: 100%;
  &-body {
    height: calc(~"100% - " @footerHeight);
    width: 100%;
  }
  &-footer {
    height: @footerHeight;
    font-size: 0.8rem;
    color: #999999;
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: center;
    align-items: center;
  }
}
</style>
