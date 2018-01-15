<template>
  <div id="ppp">
   <!-- <div class="fileimge"></div> -->
   <div class="demo">
     <!-- <p style=" text-align:left;text-indent:20px;">
      Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列
      过程，我们称这是 Vue 的生命周期。通俗说就是 Vue 实例从创建到销毁的过程，就是生命周期。
     </p>
     <div>
      <p style="text-align:left;">
        <b> beforeCreate</b>:在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
        在此钩子上能否调用data 定义的数据？</p>
       <p style="color:red;">Vue会自动将data里面的数据进行递归抓换成getter和setter进行观测；因此钩子尚未完成数据观测 所以 获取不到数据;</p>
      <p style="text-align:left;">
        <b>created</b>:在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
         </p>
       <p><b>el选项的有无对生命周期过程的影响</b>
        首先系统会判断对象中有没有el选项
        有el选项，则继续编译过程
        没有el选项，则<b>停止编译</b>，也意味着暂时停止了生命周期，直到vm.$mount(el)
        <button @click="elshow=!elshow" >试一试</button> <br/>
        <ul v-show="!elshow">
          <li>1, 删除new vue() 中的 el  查看consle</li>
          <li>2, 在creat钩子下 添加 this.mount('#app') 查看consle</li>
          <li>小尝试: 将 this.mount('#app') 放在最前 和最后 查看区别 查看consle</li>
        </ul>
       </p>
        <p><b>template参数选项的有无对生命周期的影响</b>
        <ul>
          <li>1.如果Vue实例对象中有template参数选项，则将其作为模板编译成render函数</li>
          <li>2.如果没有template参数选项，则将外部的HTML作为模板编译（template），也就是说，template参数选项的优先级要比外部的HTML高</li>
        </ul>
         <button @click="temshow=!temshow" >试一试</button> <br/>
         <ul v-show="temshow">
          <li>1.修改html 中 挂载元素id修改为 first</li>
          <li>2，修改main.js 中的 el 为 ‘#first’</li>
          <li>3, 注释掉 main.js 中的 'template'  查看页面现象</li>
        </ul>
        </p>
      <p style="text-align:left;">
        <b>beforeMount</b>:在挂载开始之前被调用：相关的 render 函数首次被调用。
         <button @click="bmshow=!bmshow" >试一试</button> <br/>
           <ul v-show="bmshow">
          <li>1.修改html 中 挂载元素id修改为 first</li>
          <li>2，修改main.js 中的 el 为 ‘#first’</li>
          <li>3, 查看 consloe</li>
        </ul>
         </p>
      <p><b>mounted</b>：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
      如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。<button @click="mtshow=!mtshow" >试一试</button>
         注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
        <ul v-show="mtshow">
          <li>1.修改html 中 挂载元素id修改为 first</li>
          <li>2, 在 first div 中添加 '<div id="texts"> </div>'</li>
          <li>3, 修改main.js 中的 el 为 ‘#first’</li>
          <li>查看浏览器 Element结构</li>
        </ul>

      </p>
      <p><b>beforeUpdate</b>:数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
      你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。<button @click="age = 19" >试一试</button>
      </p>
      <p><b>updated</b>:由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
         当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
         注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated</p>

       <p>重渲染（调用这两个钩子函数）的前提是被更改的数据已经被写入模板中！！</p>
      <p><b>activated:</b>keep-alive 组件激活时调用</p>
      <p><b>deactivated:</b>keep-alive 组件停用时调用。</p> -->
      <p><b>beforeDestroy</b>:实例销毁之前调用。在这一步，实例仍然完全可用。</p> <button @click="destoryd" >试一试</button>
      <p><b>destroyed</b>:Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。</p>
     <p><b>age = {{age}}</b></p>
     </div>
     <!-- <keep-alive>
        <component :is="view"></component>
     </keep-alive> -->
     <!-- <p>
       <component :is="view" v-on:keepChages="chageKeep" :keep-number="keepnumber"></component>
     </p> -->
     <!-- <p>
      <component :is="view1" v-on:helloChages="chageHello" :hello-number="hellonumber"></component>
     </p> -->
       <!-- <component :is="view" v-show="viewShow"></component> -->

    <div><p>msg ：{{msg}}</p></div>
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
    this.$nextTick(() => {
      window.console.log('App.vue调用了mount函数');
    });
  },
  beforeUpdate() {
    window.console.log('App.vue调用了beforeUpdate函数');
  },
  updated() {
    this.$nextTick(() => {
      window.console.log('App.vue调用了Update函数');
    });
  },
  beforeDestroy() {
    window.console.log('App.vue调用了beforeDestroy函数');
    // this.viewShow = false;
    // this.dosomting();
    // this.number = 3;
    // window.console.log(this.number);
    this.msg = 50;
    window.console.log(this.msg);
  },
  destroyed() {
    window.console.log('App.vue调用了destroyed函数');
    // this.dosomting();
    // this.number = 10;
    // // window.console.log(this.number);
    // this.msg = 100;
    // window.console.log(this.msg);
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
