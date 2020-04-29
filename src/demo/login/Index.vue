<template>
  <div class="login">
    <div class="login-app">
      <van-row>
        <van-col :span="20" :offset="2">
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="20" :offset="2">
          <van-field v-model="value" placeholder="请输入密码" />
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="20" :offset="2">
          <van-button round type="info">默认按钮</van-button>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="10" :offset="2">
          <router-link :to="{name: 'login'}">还没账号，去注册</router-link>
        </van-col>
        <van-col :span="10">
          <router-link>忘记密码</router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Button, Col, Row, Field } from "vant";

export default {
  name: "LoginIndex",
  components: {
    [Button.name]: Button,
    [Col.name]: Col,
    [Row.name]: Row,
    [Field.name]: Field
  }
};
</script>

<style lang="less" scoped>
@page: login;
.@{page} {
  &-app {
  }
  .van-field {
    border-bottom: 1px solid rgb(221, 214, 214);
  }
  .van-row {
    text-align: center;
  }
  .van-button {
    width: 100%;
  }
}
</style>
