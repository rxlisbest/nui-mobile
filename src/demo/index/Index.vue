<template>
  <copyright-layout>
    <template slot="body">
      <div class="content">
        <van-row class="logo">
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
            <van-field v-model="value" type="password" placeholder="请输入密码" />
          </van-col>
        </van-row>
        <van-row class="button">
          <van-col :span="18" :offset="3">
            <van-button round type="info" @click="handleSubmit">默认按钮</van-button>
          </van-col>
        </van-row>
        <van-row>
          <van-col :span="9" :offset="3" class="register">
            <router-link :to="{name: 'Register'}">还没账号，去注册</router-link>
          </van-col>
          <van-col :span="9" class="forget">
            <router-link :to="{name: 'Login'}">忘记密码</router-link>
          </van-col>
        </van-row>
      </div>
    </template>
  </copyright-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button, Col, Row, Field, Image } from "vant";
import CopyrightLayout from "@/components/demo/CopyrightLayout.vue";
import { userLogin } from "@/api/demo/user";

@Component({
  components: {
    [Button.name]: Button,
    [Col.name]: Col,
    [Row.name]: Row,
    [Field.name]: Field,
    [Image.name]: Image,
    CopyrightLayout
  }
})
export default class LoginMobile extends Vue {
  name = "Index";

  data() {
    return {
      value: ""
    };
  }

  handleSubmit() {
    userLogin({username: '', password: ''}).then(res => {
      console.log(res)
    });
  }
}
</script>

<style lang="less" scoped>
@container: container;
@page: content;

.@{container} {
  /deep/ &-body {
    display: flex;
    display: -webkit-flex; /* Safari */
    justify-content: center;
    align-items: center;
  }
}

.@{page} {
  width: 100%;
  margin-bottom: 30%;
  .logo {
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
  .register {
    font-size: 0.8rem;
    text-align: left;
  }
  .forget {
    font-size: 0.8rem;
    text-align: right;
  }
  .button {
    margin-top: 28px !important;
    margin-bottom: 12px !important;
  }
  a {
    color: #1989fa;
  }
  a:hover {
    color: #1989fa;
  }
}
</style>
