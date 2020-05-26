<template>
  <copyright-layout>
    <template slot="body">
      <div class="content">
        <van-row>
          <van-col :span="18" :offset="3">
            <van-field v-model="formData.username" placeholder="请输入手机号" />
          </van-col>
        </van-row>
        <van-row>
          <van-col :span="18" :offset="3">
            <n-sms-input v-model="formData.captcha" :placeholder="'请输入验证码'"></n-sms-input>
          </van-col>
        </van-row>
        <van-row>
          <van-col :span="18" :offset="3">
            <van-field v-model="formData.password" type="password" placeholder="请输入密码" />
          </van-col>
        </van-row>
        <van-row>
          <van-col :span="18" :offset="3">
            <van-field
              v-model="formData.password_confirmation"
              type="password"
              placeholder="请输入确认密码"
            />
          </van-col>
        </van-row>
        <van-row>
          <van-col :span="18" :offset="3">
            <van-checkbox-group v-model="formData.is_agree" direction="horizontal">
              <van-checkbox name="1" shape="square" v-model="formData.is_agree" icon-size="0.9rem">
                <span class="agree-content">
                  我已阅读并同意
                  <router-link :to="'/'">隐私权保护声明</router-link>
                </span>
              </van-checkbox>
            </van-checkbox-group>
          </van-col>
        </van-row>
        <van-row class="button">
          <van-col :span="18" :offset="3">
            <van-button round type="info" @click="handleSubmit">默认按钮</van-button>
          </van-col>
        </van-row>
        <van-row>
          <van-col :span="9" :offset="3" class="register">
            <router-link :to="'/'">还没账号，去注册</router-link>
          </van-col>
          <van-col :span="9" class="forget">
            <router-link :to="'/'">忘记密码</router-link>
          </van-col>
        </van-row>
      </div>
    </template>
  </copyright-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button, Col, Row, Field, Image, CheckboxGroup, Checkbox } from "vant";
import NSmsInput from "@/components/NSmsInput.vue";
import CopyrightLayout from "@/components/CopyrightLayout.vue";

@Component({
  components: {
    [Button.name]: Button,
    [Col.name]: Col,
    [Row.name]: Row,
    [Field.name]: Field,
    [Image.name]: Image,
    [CheckboxGroup.name]: CheckboxGroup,
    [Checkbox.name]: Checkbox,
    NSmsInput,
    CopyrightLayout
  }
})
export default class LoginMobile extends Vue {
  name = "Register";

  formData = {
    username: "",
    captcha: "",
    password: "",
    password_confirmation: "",
    is_agree: []
  };

  handleSubmit() {
    console.log(this.formData);
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
  .agree-content {
    font-size: 0.8rem;
    color: #999;
  }
}
</style>
