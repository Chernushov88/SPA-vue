<template>
  <main class="wrapper step1-2">
    <div class="backgroung-center" >
      <div class="wrapper-in" >
        <div class="header">
          <ul class="step">
            <li><span class="current">1</span></li>
            <li><span>2</span></li>
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
            <div id="neftvyshki" class="content-elem" style="z-index: 50">
              <img src="./../assets/images/neftvyshki-bg.png" alt="">
            </div>
            <div id="factory" class="content-elem" style="z-index: 50">
              <img src="./../assets/images/factory-bg.png" alt="">
            </div>
            <div id="station" class="content-elem">
              <img src="./../assets/images/station-bg.png" alt="">
            </div>
            <div id="tanker" class="content-elem" v-bind:style="{ left: leftTanker + 'px', top: topTanker + 'px' }">
              <img src="./../assets/images/tanker-bg-2.png" alt="">
              <div class="button">танкер</div>
            </div>
          </div>
          <div class="button-wrapper">
            <transition name="fade">
              <div class="button button1-1" v-on:click="answerQuestion(1)" v-bind:class="{'error' : wrongNumber == 1}" v-if="!animating">баржа</div>
            </transition>
            <transition name="fade">
              <div class="button button1-2" v-on:click="answerQuestion(2)" v-bind:class="{'error' : wrongNumber == 2}" v-if="!animating">пароход</div>
            </transition>
            <div class="button button1-3" v-on:click="answerQuestion(3)" v-bind:class="{'success' : rightNumber == 3}" v-bind:style="{ left: leftRightAnswer + 'px', top: topRightAnswer + 'px' }">танкер</div>
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
      question: 'Как называется судно <br>для перевозки нефти?',
      animating: false,
      answerMoved: false,
      leftTanker: 163,
      topTanker: 252,
      leftRightAnswer: 340,
      topRightAnswer: 0
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
          this.wrongNumber = buttonNumber
          setTimeout(function () {
            self.wrongNumber = 0
          }, 500)
          break
        }
        case 3 : {
          this.question = ''
          this.animating = true
          this.rightNumber = 3
          setTimeout(function () {
            var timer = setInterval(function () {
              if (self.topRightAnswer >= 210 && self.leftRightAnswer <= 260) {
                self.answerMoved = true
              }
              if (self.leftTanker >= 720 && self.topTanker <= 140) {
                setTimeout(function () {
                  clearInterval(timer)
                  self.$parent.step = '2'
                }, 500)
              }
              if (!self.answerMoved) {
                if (self.topRightAnswer < 210) {
                  self.topRightAnswer += 2.25
                }
                if (self.leftRightAnswer > 260) {
                  self.leftRightAnswer -= 0.85
                }
              } else {
                if (self.leftTanker < 720) {
                  self.leftTanker += 2.5
                  self.leftRightAnswer += 2.5
                }
                if (self.topTanker > 140) {
                  self.topTanker -= 0.5
                  self.topRightAnswer -= 0.5
                }
              }
            }, 10)
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
