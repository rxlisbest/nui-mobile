<template>
  <div class="n-sms-input">
    <van-row gutter="20">
      <van-col :span="15">
        <van-field v-model="value" placeholder="请输入用户名" />
      </van-col>
      <van-col :span="9">
        <van-button
          type="default"
          plain
          :disabled="sendDisabled"
          class="n-sms-input-send"
          @click="send"
        >{{sendText}}</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Button, Col, Row, Field } from "vant";

const sendText = "发送短信";

@Component({
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Field.name]: Field,
    [Button.name]: Button
  }
})
export default class NSmsInput extends Vue {
  name = "NSmsInput";

  sendText = sendText;
  sendDisabled = false;

  @Prop() private value!: string;
  @Prop({ default: 60 }) private countdown!: number;

  send() {
    this.sendDisabled = true;
    this.sendText = this.countdown.toString();
    const timer = setInterval(() => {
      let countdown = Number(this.sendText.valueOf());
      countdown -= 1;
      if (countdown == 0) {
        this.sendText = sendText;
        this.sendDisabled = false;
        clearInterval(timer);
      } else {
        this.sendText = countdown.toString();
      }
    }, 1000);
  }
}
</script>

<style scoped lang="less">
@component: n-sms-input;
.@{component} {
  .van-button {
    width: 100%;
  }
  .van-field {
    border-bottom: 1px solid rgb(221, 214, 214);
  }
  .van-row {
    display: flex;
    align-items: flex-end;
  }
  &-send {
    font-size: 0.8rem;
    padding: 0 0;
    height: 36px;
    line-height: 36px;
  }
}
</style>
