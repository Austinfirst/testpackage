import Counter from './components/Counter.vue'

// 导出组件
export { Counter }

// 导出安装函数，用于全局注册
export default {
  install(app) {
    app.component('Counter', Counter)
  }
}
    