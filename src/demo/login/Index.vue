<template>
  <div class="login">
    <div class="login-content">
      <van-row class="login-content-logo">
        <van-col :span="18" :offset="3">
          <van-image width="120" :src="require('@/assets/logo.png')" />
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="18" :offset="3">
          <van-field v-model="value" placeholder="请输入用户名" />
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="18" :offset="3">
          <van-field v-model="value" placeholder="请输入密码" />
        </van-col>
      </van-row>
      <van-row class="login-content-button">
        <van-col :span="18" :offset="3">
          <van-button round type="info">默认按钮</van-button>
        </van-col>
      </van-row>
      <van-row>
        <van-col :span="9" :offset="3" class="login-content-register">
          <router-link :to="'/'">还没账号，去注册</router-link>
        </van-col>
        <van-col :span="9" class="login-content-forget">
          <router-link :to="'/'">忘记密码</router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Button, Col, Row, Field, Image } from "vant";

@Component({
  components: {
    [Button.name]: Button,
    [Col.name]: Col,
    [Row.name]: Row,
    [Field.name]: Field,
    [Image.name]: Image
  }
})
export default class LoginIndex extends Vue {
  name = "LoginIndex";

  data() {
    return {
      value: ""
    };
  }
}
</script>

<style lang="less" scoped>
@page: login;
.@{page} {
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex; /* Safari */
  justify-content: center;
  align-items: center;
  &-content {
    width: 100%;
    padding-bottom: 38%;
    &-logo {
      margin-bottom: 10%;
    }
    .van-field {
      border-bottom: 1px solid rgb(221, 214, 214);
    }
    .van-row {
      margin-top: 8px;
      text-align: center;
    }
    .van-button {
      width: 100%;
    }
    &-register {
      font-size: 0.8rem;
      text-align: left;
    }
    &-forget {
      font-size: 0.8rem;
      text-align: right;
    }
    &-button {
      margin-top: 18px !important;
      margin-bottom: 12px !important;
    }
    a {
      color: #1989fa;
    }
    a:hover {
      color: #1989fa;
    }
  }
}
</style>
