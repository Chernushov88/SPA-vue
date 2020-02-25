<template>
  <main class="wrapper step2-2">
    <div class="backgroung-center" >
      <div class="wrapper-in" >
        <div class="header">
          <ul class="step">
            <li><span class="active"></span></li>
            <li><span class="current">2</span></li>
            <li><span>3</span></li>
          </ul>
          <div class="refresh-wrapper">
            <div class="refresh-background">
              <a href="#" class="refresh" title="" aria-describedby="ui-id-10" v-on:click="restart"></a>
            </div>
            <div class="ui-widget-content"><div class="ui-tooltip-content">Начать сначала</div></div>
          </div>
          <div class="description" v-html="question" v-bind:class="{'correctly' : question == 'Правильно!'}"></div>
        </div>
        <section class="content">
          <div id="city" class="content-elem"><img src="./../assets/images/city-bg.png" alt=""></div>
          <div class="element-block">
            <div id="truboprovod" class="content-elem">
              <img src="./../assets/images/truboprovod-bg-2.png" alt="">
            </div>
            <div id="neftvyshki" class="content-elem" v-if="!answerMoved">
              <img src="./../assets/images/neftvyshki-bg-2.png" alt="">
            </div>
            <div class="neftvyshki-in" v-if="answerMoved">
              <img src="./../assets/images/neftvyshk-animate2.png" class="neftvyshk-animate2" alt="">
              <img src="./../assets/images/nasos@2x.png" class="neftvyshk-animate" alt="">
              <img src="./../assets/images/neftvyshki-bg-x2.gif" class="neftvyshki-bg-x2" alt="">
            </div>
          </div>
          <div class="button-wrapper">
            <transition name="fade">
              <div class="button button2-1" v-on:click="answerQuestion(1)" v-bind:class="{'error' : wrongNumber == 1}" v-if="!animating">водопровод</div>
            </transition>
            <div class="button button2-2" v-on:click="answerQuestion(2)" v-bind:class="{'success' : rightNumber == 2}" v-bind:style="{ left: leftRightAnswer + 'px' }">нефтепровод</div>
            <transition name="fade">
              <div class="button button2-3" v-on:click="answerQuestion(3)" v-bind:class="{'error' : wrongNumber == 3}" v-if="!animating">канализация</div>
            </transition>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      wrongNumber: 0,
      rightNumber: 0,
      question: 'Как называются трубы <br>для нефти?',
      animating: false,
      leftRightAnswer: 220,
      answerMoved: false
    }
  },
  methods: {
    restart () {
      this.$parent.step = '1'
    },
    answerQuestion (buttonNumber) {
      var self = this
      switch (buttonNumber) {
        case 1 : {
          this.wrongNumber = buttonNumber
          setTimeout(function () {
            self.wrongNumber = 0
          }, 500)
          break
        }
        case 2 : {
          this.question = ''
          this.animating = true
          this.rightNumber = 2
          setTimeout(function () {
            var timer = setInterval(function () {
              if (self.leftRightAnswer >= 440) {
                self.answerMoved = true
              }
              if (!self.answerMoved) {
                self.leftRightAnswer += 2.5
              } else {
                setTimeout(function () {
                  clearInterval(timer)
                  self.$parent.step = '3'
                }, 4000)
              }
            }, 10)
          }, 500)
          break
        }
        case 3 : {
          this.wrongNumber = buttonNumber
          setTimeout(function () {
            self.wrongNumber = 0
          }, 500)
          break
        }
      }
    }
  }
}
</script>

<style>

</style>
