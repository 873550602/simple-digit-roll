<template>
  <div
    class="simple-digit-roll list-box"
    :style="{ height: fontSize + 'px', fontSize: fontSize + 'px' }"
  >
    <div
      class="number-box"
      v-for="(item, index) of showList"
      :key="index"
      :style="{
        transform: 'translateY(' + -item.curr * 100 + '%)',
        transitionDuration: duration + 's',
      }"
    >
      <template v-if="item.list">
        <div
          class="number"
          v-for="node of item.list"
          :key="node"
          :style="{
            height: fontSize + 'px',
            width: itemWidth + 'px',
          }"
        >
          {{ node }}
        </div>
      </template>
      <div
        class="number"
        v-else
        :style="{ height: fontSize + 'px', width: itemWidth + 'px' }"
      >
        {{ item.curr }}
      </div>
    </div>
  </div>
</template>
<script>
import { deepClone } from "@/assets/utils";
export default {
  props: {
    // 目标数字
    value: {
      type: [Number, String],
      default: 0,
    },
    // 滚动速度
    duration: {
      type: Number,
      default: 1,
    },
    // 每个数字宽度
    itemWidth: Number,
    // 字体大小
    fontSize: {
      type: Number,
      default: 12,
    },
  },
  data() {
    return {
      showList: [],
      defaultNumber: [],
      numberList: [],
    };
  },
  methods: {
    initData() {
      const arr = Array.from((this.value || 0).toString()).map((item) => {
        if (isNaN(item)) {
          return { curr: item };
        } else {
          return {
            curr: +item,
            list: new Array(10).fill(null).map((node, index) => index),
          };
        }
      });
      this.numberList = deepClone(arr);
      this.defaultNumber = deepClone(arr).map((item) => {
        if (item.list) {
          item.curr = 0;
        }
        return item;
      });
      this.start();
    },
    start() {
      this.showList = deepClone(this.defaultNumber);
      setTimeout(() => {
        this.showList = deepClone(this.numberList);
      });
    },
  },
  watch: {
    value() {
      this.initData();
    },
  },
  mounted() {
    this.initData();
  },
};
</script>

<style scoped>
.list-box {
  display: flex;
  overflow: hidden;
}
.number-box {
  display: flex;
  flex-direction: column;
  transform: translateY(0);
  transition: transform;
  transition-timing-function: cubic-bezier(1, 0.6, 0.6, 1);
}
.number {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
