<template>
  <div id="app">
    <div id="home-container">
      <step v-if='step === "1" || step === "2" || step === "3" || step === "4"'></step>
      <step12 v-if='step === "1-2"'></step12>
      <step22 v-if='step === "2-2"'></step22>
      <step32 v-if='step === "3-2"'></step32>
    </div>
  </div>
</template>

<script>
import Step from './components/Step.vue'
import Step12 from './components/Step1_2.vue'
import Step22 from './components/Step2_2.vue'
import Step32 from './components/Step3_2.vue'

export default {
  name: 'App',
  components: {
    Step,
    Step12,
    Step22,
    Step32
  },
  data () {
    return {
      step: ''
    }
  },
  mounted () {
    this.step = '1'
  }
}
</script>

<style>
@import './assets/css/fonts.css';
@import './assets/css/reset.css';
@import './assets/css/styles.css';
</style>
