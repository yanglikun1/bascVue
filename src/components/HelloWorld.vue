<template>
  <div class="hello">{{helloNumber}}
  <button @click="destoryd" >子组件销毁</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to HelloWorld',
    };
  },
  props: {
    helloNumber: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    window.console.log('HelloWorld调用了mounted函数');
    // this.$emit('helloChages');
  },
  beforeUpdate() {
    window.console.log('HelloWorld调用了beforeUpdate函数');
  },
  updated() {
    window.console.log('HelloWorld调用了updated函数');
  },
  beforeDestroy() {
    window.console.log('HelloWorld组件销毁前');
  },
  destroyed() {
    window.console.log('HelloWorld组件已经销毁');
    // document.querySelector('.hello').innerHTML = '123456';
   // window.console.log(this.msg);
  },
  activated() {
    window.console.log('HelloWorld调用了 activate');
  },
  deactivated() {
    window.console.log('HelloWorld调用了 deactivated');
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
button{
  padding: 1px 1%;
  background: #4EB862;
  width: 70px;height: 20px;
}
</style>
