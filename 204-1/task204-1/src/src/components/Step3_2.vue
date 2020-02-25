<template>
  <main class="wrapper step3-2">
    <div class="backgroung-center" >
      <div class="wrapper-in" >
        <div class="header">
          <ul class="step">
            <li><span class="active"></span></li>
            <li><span class="active"></span></li>
            <li><span class="current">3</span></li>
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
          <div class="element-block eb-step3-2" v-bind:style="{ 'margin-left' : marginTrain + 'px' }">
            <div class="tank-block content-elem" v-if="!answerMoved" style="width: 221px; height: 105px">
            </div>
            <div class="tank-block content-elem tank-block-2" v-if="answerMoved" v-bind:style="{ 'margin-left' : marginTrain + 'px' }">
              <img src="./../assets/images/tank-bg-2.png" alt="" class="tank">
              <img src="./../assets/images/wheels-tank.gif" alt="" class="wheels-tank" v-if="animateWheels">
            </div>
            <transition name="fade">
              <div class="tank-block content-elem" v-if="answered" v-bind:style="{ 'margin-left' : marginTrain + 'px' }">
                <img src="./../assets/images/tank-bg-2.png" alt="" class="tank">
                <img src="./../assets/images/wheels-tank.gif" alt="" class="wheels-tank" v-if="animateWheels">
              </div>
            </transition>
            <div class="train-block content-elem" v-bind:style="{ 'margin-left' : marginTrain + 'px' }">
              <img src="./../assets/images/train-bg-2.png" alt="" class="train">
              <img src="./../assets/images/wheels.gif" alt="" class="wheels" v-if="animateWheels">
            </div>
          </div>
          <div class="button-wrapper">
            <transition name="fade">
              <div class="button button3-1" v-on:click="answerQuestion(1)" v-bind:class="{'error' : wrongNumber == 1}" v-if="!animating">
                <img src="./../assets/images/button/wagon.jpg" alt="">
                <span>в вагонах</span>
              </div>
            </transition>
            <transition name="fade">
              <div class="button button3-2" v-on:click="answerQuestion(2)" v-bind:class="{'error' : wrongNumber == 2}" v-if="!animating">
                <img src="./../assets/images/button/wagonetka.jpg" alt="">
                <span>в вагонетках</span>
              </div>
              </transition>
            <transition name="fade">
              <div class="button button3-3" v-on:click="answerQuestion(3)" v-bind:class="{'success' : rightNumber == 3}" v-if="!animating">
                <img src="./../assets/images/button/cisterna.jpg" alt="">
                <span>в цистернах</span>
              </div>
            </transition>
            <img src="./../assets/images/tank-bg-2.png" alt="" class="tank" v-on:click="answerQuestion(3)" v-bind:style="{ left: leftRightAnswer + 'px', top: topRightAnswer + 'px' }" v-if="!answerMoved">
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
      question: 'В чем перевозят нефть <br>по железной дороге?',
      animating: false,
      answerMoved: false,
      animateWheels: false,
      answered: false,
      leftRightAnswer: 473,
      topRightAnswer: 19,
      marginTrain: -20
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
          this.question = 'Правильно!'
          this.rightNumber = 3
          setTimeout(function () {
            self.answered = true
            self.animating = true
            setTimeout(function () {
              var timer = setInterval(function () {
                if (self.topRightAnswer >= 289 && self.leftRightAnswer <= -480) {
                  self.answerMoved = true
                  self.animateWheels = true
                }
                if (self.marginTrain >= 600) {
                  self.animateWheels = false
                  clearInterval(timer)
                  setTimeout(function () {
                    self.$parent.step = '4'
                  }, 1000)
                }
                if (!self.answerMoved) {
                  if (self.topRightAnswer < 289) {
                    self.topRightAnswer += 1
                  }
                  if (self.leftRightAnswer > -480) {
                    self.leftRightAnswer -= 3.5
                  }
                } else {
                  if (self.marginTrain <= 600) {
                    self.marginTrain += 2
                  }
                }
              }, 10)
            }, 500)
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
