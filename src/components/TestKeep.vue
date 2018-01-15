<template>
  <div class="keep">{{num}}
  <button @click="destoryd" >子组件销毁</button>
  </div>
</template>

<script>
export default {
  name: 'TestKeep',
  data() {
    return {
      msg: 'Welcome to TestKeep',
      num: 0,
    };
  },
  props: {
    keepNumber: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    keepNumber: (val) => {
      if (val === 12) {
        setTimeout(() => {
          this.num = 13;
        }, 1000);
      }
    },
  },
  created() {
   //
  },
  mounted() {
    // setTimeout(() => {
    //   this.$emit('keepChages');
    // }, 10000);
    window.console.log('TestKeep调用了mounted函数');
  },
  beforeUpdate() {
    window.console.log('TestKeep调用了beforeUpdate函数');
  },
  updated() {
    window.console.log('TestKeep调用了updated函数');
  },
  beforeDestroy() {
    window.console.log('TestKeep组件销毁前');
  },
  destroyed() {
    window.console.log('TestKeep组件已经销毁');
  },
  activated() {
    window.console.log('TestKeep调用了 activate');
  },
  deactivated() {
    window.console.log('TestKeep调用了 deactivated');
  },
  methods: {
    destoryd() {
      this.$destroy();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
