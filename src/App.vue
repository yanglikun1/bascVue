<template>
  <div id="app">
   <!-- <div class="fileimge"></div> -->
   <div class="demo">
      <p><b>beforeDestroy</b>:实例销毁之前调用。在这一步，实例仍然完全可用。</p> <button @click="destoryd" >销毁App</button>
      <p><b>destroyed</b>:Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。</p>
     <p><b>age = {{age}}</b></p>
     <component :is="view"></component>
     <!-- <p>
       <component :is="view" v-on:keepChages="chageKeep" :keep-number="keepnumber"></component>
     </p> -->
     <!-- <p>
      <component :is="view1" v-on:helloChages="chageHello" :hello-number="hellonumber"></component>
     </p> -->
       <!-- <component :is="view" v-show="viewShow"></component> -->
    <!-- <div><p>msg ：{{msg}}</p></div> -->
     <!-- <button @click="keepnumber = 12, hellonumber = 13"></button> -->
   </div>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld';
import TestKeep from './components/TestKeep';

export default {
  name: 'app',
  data() {
    return {
      age: 1,
      view: 'TestKeep',
      view1: 'HelloWorld',
      keepnumber: 1,
      hellonumber: 1,
      viewShow: true,
      msg: 'nihao',
      showH: true,
      number: 1,
    };
  },
  components: {
    HelloWorld, TestKeep,
  },
  beforeCreate() {
    window.console.log('App.vue调用了beforCreate函数');
  },
  created() {
    window.console.log('App.vue调用了create函数');
  },
  beforeMount() {
    window.console.log('App.vue调用了beforeMount函数');
  },
  mounted() {
    window.console.log('App.vue调用了mount函数');
  },
  beforeUpdate() {
    window.console.log('App.vue调用了beforeUpdate函数');
  },
  updated() {
    window.console.log('App.vue调用了Update函数');
  },
  beforeDestroy() {
    window.console.log('App.vue调用了beforeDestroy函数');
  },
  destroyed() {
    window.console.log('App.vue调用了destroyed函数');
    this.age = 50;
    window.console.log(this.age);
  },
  activated() {
    window.console.log('App.vue调用了 activate');
    // this.view = 'TestKeep';
  },
  deactivated() {
    window.console.log('App.vue调用了 deactivated');
  },
  // computed: {
  //   ab() {
  //     return this.age + 1;
  //   },
  //   ac() {
  //     return (1 + 1);
  //   },
  // },
  // watch: {
  //   // 监控a变量变化的时候，自动执行此函数
  //   age(val, oldVal) {
  //     window.console.log('new: %s, old: %s', val, oldVal);
  //   },
  // },
  methods: {
    destoryd() {
      this.$destroy();
    },
    dosomting() {
      window.console.log('执行了实例方法');
    },
    chageKeep() {
      window.console.log('执行了changesKeep方法');
      this.keepnumber = 4;
    },
    chageHello() {
      window.console.log('执行了changesHello方法');
      this.hellonumber = 4;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 7rem;
  text-align: center;
}
.fileimge {
  width: 2rem;
  height: 5rem;
  background: url(./assets/fileceycle.jpg) no-repeat;
  background-size: 100%;
  float: left;
}
.demo {
  margin-right: 20px;
}
p {
  text-align: left;
  background-color: rgb(255, 254, 254);
  padding: 2% 5%;
}
button {
  padding: 1px 1%;
  background: #4EB862;
  width: 70px;height: 20px;
}
</style>
