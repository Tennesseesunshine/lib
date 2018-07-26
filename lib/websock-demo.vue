<template>
  <div id="page">
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {}
  },
  mounted () {
    this.initWebSocket()
    this.threadPoxi()
  },
  methods: {
    threadPoxi () { // 实际调用的方法
      const agentData = 'mymessage'
      // 若是ws开启状态
      if (this.websock.readyState === this.websock.OPEN) {
        console.log('已经开启正在发送')
        this.websocketsend(agentData)
      } else if (this.websock.readyState === this.websock.CONNECTING) { // 若是 正在开启状态，则等待300毫秒
        console.log('正在开启的话 等待300ms')
        setTimeout(() => {
          // this.websocketsend(agentData)
        }, 300)
      } else { // 若未开启 ，则等待500毫秒
        console.log('500ms后开启')
        this.initWebSocket()
        setTimeout(() => {
          // this.websocketsend(agentData)
        }, 500)
      }
    },
    initWebSocket () { // 初始化weosocket
      console.log('正在初始化')
      this.websock = new WebSocket(window.config.wsUrl)
      this.websock.onmessage = this.websocketonmessage
      this.websock.onclose = this.websocketclose
    },
    websocketonmessage (e) { // 数据接收
      console.log('开始数据接收')
      const redata = JSON.parse(e.data)
      console.log(redata.value)
    },
    websocketsend (agentData) { // 数据发送
      console.log('开始发送数据')
      this.websock.send(agentData)
    },
    websocketclose (e) { // 关闭
      console.log('连接关闭')
      console.log('connection closed (' + e.code + ')')
    }
  },
  computed: {},
  watch: {},
  props: [ ],
  components: {}
}
</script>

<style lang="scss">
</style>
