// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#first',
  data() {
    return {
      msg: 30,
      age: 1,
      number: 0,
    };
  },
  router,
  template: '<App/>',
  beforeCreate() {
    window.console.log('调用了beforCreate函数===============');
    // window.console.log(this);
    // window.console.log(`el:    ${this.$el}`);
    // window.console.log(`data   : ${this.$data}`);
    // 对比实例代码
    /*  const vm = Object.assign({}, this);
    window.console.log(vm);
      */
  },
  created() {
    window.console.log('调用了create函数===================');
    // window.console.log(this);
    // window.console.log(`el     : ${this.$el}`);
    // window.console.log(`data   : ${JSON.stringify(this.$data)}`);
    // window.console.log(`msg   : ${this.msg}`);
    /*
     验证没有el的选项
     this.toMount(); // this.$mount('#first');
    */
  },
  beforeMount() {
    window.console.log('调用了beforeMount函数=============');
    // window.console.log(this.$el);
  },
  mounted() {
    window.console.log('调用了mounted函数===================');
    // window.console.log(this.$el);

    // for (let i = 0; i < 100; i += 1) {
    //   this.ages = i;
    // }
    // this.ages = 3;
    // const age = this.ages;
    // window.console.log(age);
  },
  beforeUpdate() {
    window.console.log('调用了beforeUpdate函数=============');
  },
  updated() {
    window.console.log('调用了updated函数==================');
  },
  activated() {
    window.console.log('调用了activated函数==================');
  },
  deactivated() {
    window.console.log('调用了activated函数==================');
  },
  beforeDestroy() {
    window.console.log('调用了beforeDestroy函数============');
  },
  destroyed() {
    window.console.log('调用了destroyed函数=================');
  },
  errorCaptured(err, vm, info) {
    window.console.log('error================');
    const error = `${err.stack}\n\nfound in ${info} of component`;
    window.console.log(error);
    return false;
  },
  components: { App },
  methods: {
    toMount() {
      this.$mount('#first');
    },
  },
});
