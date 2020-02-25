Vue.component("timer", {
  props: {
    interval: {
      type: Number,
      default: 1
    },
    initial: {
      type: Number
    },
    ansver: {
      type: String,
    },
  },
  template: `
      <p v-html="ansver"></p>
  `,
  data() {
    return {
      current: this.initial,
      timerInterval: null,
      classvisible: '',
    }
  },
  methods: {
    onInterval() {
      this.current = this.current -= this.interval
      console.log(this.current);
      if (this.current <= 0) {
        // console.log('current 1 - '+this.current);
        clearInterval(this.timerInterval)
        this.current = 0
        this.$emit("stoperror");
        // this.$emit("allstoperror");
        // console.log('current 2 - '+this.current);
      }
    }
  },
  mounted() {
    this.timerInterval = setInterval(this.onInterval, this.interval * 1000);
  }
})

