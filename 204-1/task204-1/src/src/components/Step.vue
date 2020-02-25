<style>
@-webkit-keyframes stepanim{
  10%{
    box-shadow: 0px 0px 15px 0 rgba(36,221,208,1);
    background-color: rgba(36,221,208,1);
    border-color: rgba(36,221,208,1);
  }
}
@keyframes stepanim{
  10%{
    box-shadow: 0px 0px 15px 0 rgba(36,221,208,1);
    background-color: rgba(36,221,208,1);
    border-color: rgba(36,221,208,1);
  }
}
.step-animation{
  animation: stepanim 1s linear .75s alternate;
    -webkit-animation: stepanim .75s linear 1 alternate;
}
</style>
<template>
  <main class="wrapper">
    <div class="backgroung-center">
      <div class="wrapper-in" >
        <div class="header" style="z-index: 50">
          <ul class="step">
            <li><span v-bind:class="{'current' : $parent.step == '1', 'active' : $parent.step > '1', 'active-curent' : $parent.step == '2'}">1</span></li>
            <li><span v-bind:class="{'current' : $parent.step == '2', 'active' : $parent.step > '2', 'active-curent' : $parent.step == '3'}">2</span></li>
            <li><span v-bind:class="{'current' : $parent.step == '3', 'active' : $parent.step > '3', 'active-curent' : $parent.step == '4'}">3</span></li>
          </ul>
          <div class="refresh-wrapper">
            <a href="#" class="refresh" title="" aria-describedby="ui-id-10" v-on:click="restart"></a>
            <div class="ui-widget-content">
              <div class="ui-tooltip-content">Начать сначала</div>
            </div>
          </div>
          <transition name="fade">
            <div class="description" v-if="questionVisible && $parent.step == '1'">{{ this.question1 }}</div>
          </transition>
          <transition name="fade">
            <div class="description" v-if="questionVisible && $parent.step == '2'">{{ this.question2 }}</div>
          </transition>
          <transition name="fade">
            <div class="description" v-if="questionVisible && $parent.step == '3'">{{ this.question3 }}</div>
          </transition>
          <transition name="fade">
            <div class="description correctly-aqua" v-if="$parent.step == '4'">{{ this.question4 }}</div>
          </transition>
        </div>
        <section class="content" v-bind:class="{ 'transparent-background' : backgroundTransparent }">
          <div class="element-block">
            <div id="city" class="content-elem" v-bind:class="{'upper' : $parent.step == '2'}">
              <img src="./../assets/images/city-bg.png" alt="" v-bind:style="{ width: cityWidth + 'px', height: cityHeight + 'px' }">
            </div>
            <div id="truboprovod" class="content-elem" v-if="$parent.step == '3' || $parent.step == '4'">
              <img src="./../assets/images/truboprovod-bg.png" alt="">
            </div>
            <div id="neftvyshki" class="content-elem" v-bind:class="{'upper' : $parent.step == '1' || $parent.step == '2' || $parent.step == '3'}">
              <img src="./../assets/images/neftvyshki-bg.png" alt="" v-bind:style="{ width: pumpWidth + 'px', height: pumpHeight + 'px' }">
            </div>
            <div id="tanker" class="content-elem" v-if="$parent.step == '2' || $parent.step == '3' || $parent.step == '4'">
              <img src="./../assets/images/tanker-bg.png" alt="">
            </div>
            <div id="train" class="content-elem" v-if="$parent.step == '4'">
              <img src="./../assets/images/train-bg.png" alt="">
            </div>
            <div id="tank-1" class="content-elem" v-if="$parent.step == '4'">
              <img src="./../assets/images/tank-bg.png" alt="">
            </div>
            <div id="tank-2" class="content-elem" v-if="$parent.step == '4'">
              <img src="./../assets/images/tank-bg.png" alt="">
            </div>
            <div id="factory" class="content-elem" v-bind:class="{'upper' : $parent.step == '1'}">
              <img src="./../assets/images/factory-bg.png" alt="" v-bind:style="{ width: factoryWidth + 'px', height: factoryHeight + 'px' }">
            </div>
            <div id="station" class="content-elem" v-bind:class="{'upper' : $parent.step == '3'}">
              <img src="./../assets/images/station-bg.png" alt="" v-bind:style="{ width: stationWidth + 'px', height: stationHeight + 'px' }">
            </div>
          </div>
          <transition name="fade">
            <div class="button-wrapper" v-if="buttonsVisible">
              <div class="button button-1" v-on:click="answerQuestion(1)" v-bind:class="{'error' : wrongNumber == 1}">
                <img src="./../assets/images/button/01.jpg" alt="">
                <p>на самолётах</p>
              </div>
              <div class="button button-2" v-on:click="answerQuestion(2)" v-bind:class="{'error' : wrongNumber == 2}">
                <img src="./../assets/images/button/02.jpg" alt="">
                <p>по проводам</p>
              </div>
              <div class="button button-3" v-on:click="answerQuestion(3)" v-bind:class="{'error' : wrongNumber == 3, 'success' : rightNumber == 3 }">
                <img src="./../assets/images/button/03.jpg" alt="">
                <p>по рельсам</p>
              </div>
              <div class="button button-4" v-on:click="answerQuestion(4)" v-bind:class="{'error' : wrongNumber == 4}">
                <img src="./../assets/images/button/04.jpg" alt="">
                <p>на грузовиках</p>
              </div>
              <div class="button button-5" v-on:click="answerQuestion(5)" v-bind:class="{'error' : wrongNumber == 5, 'success' : rightNumber == 5 }">
                <img src="./../assets/images/button/05.jpg" alt="">
                <p>по трубам</p>
              </div>
              <div class="button button-6" v-on:click="answerQuestion(6)" v-bind:class="{'error' : wrongNumber == 6, 'success' : rightNumber == 6 }">
                <img src="./../assets/images/button/06.jpg" alt="">
                <p>по морю</p>
              </div>
            </div>
          </transition>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Step',
  data () {
    return {
      buttonsVisible: false,
      questionVisible: false,
      backgroundTransparent: false,
      step: '1',
      question1: 'Как лучше доставить нефть к этому заводу?',
      question2: 'Как лучше доставить нефть к этому посёлку?',
      question3: 'Как лучше доставить нефть к этой станции?',
      question4: 'Правильно!',
      rightNumber: 0,
      wrongNumber: 0,
      pumpWidth: 341,
      pumpHeight: 148,
      factoryWidth: 365,
      factoryHeight: 167,
      cityWidth: 342,
      cityHeight: 127,
      stationWidth: 254,
      stationHeight: 117
    }
  },
  methods: {
    restart () {
      this.$parent.step = '1'
      this.rightNumber = 0
      var self = this
      setTimeout(function () {
        self.questionVisible = true
      }, 1000)
      setTimeout(function () {
        self.backgroundTransparent = true
      }, 2000)
      setTimeout(function () {
        self.buttonsVisible = true
      }, 3500)
    },
    answerQuestion (buttonNumber) {
      var self = this
      switch (this.$parent.step) {
        case '1' : {
          if (buttonNumber === 6) {
            self.rightNumber = 6
            setTimeout(function () {
              self.$parent.step = '1-2'
            }, 1000)
          } else {
            this.wrongNumber = buttonNumber
            setTimeout(function () {
              self.wrongNumber = 0
            }, 500)
          }
          break
        }
        case '2' : {
          if (buttonNumber === 5) {
            self.rightNumber = 5
            setTimeout(function () {
              self.$parent.step = '2-2'
            }, 1000)
          } else {
            this.wrongNumber = buttonNumber
            setTimeout(function () {
              self.wrongNumber = 0
            }, 500)
          }
          break
        }
        case '3' : {
          if (buttonNumber === 3) {
            self.rightNumber = 3
            setTimeout(function () {
              self.$parent.step = '3-2'
            }, 1000)
          } else {
            this.wrongNumber = buttonNumber
            setTimeout(function () {
              self.wrongNumber = 0
            }, 500)
          }
          break
        }
      }
    },
    animateStation () {
      var changeWidth = 1.2
      var changeHeight = 0.6
      var self = this
      var timer = setInterval(function () {
        if (self.stationWidth >= 279 || self.stationHeight >= 127) {
          changeWidth = -1.2
          changeHeight = -0.6
        }
        if (self.stationWidth <= 253 || self.stationHeight <= 116) {
          clearInterval(timer)
          self.stationWidth = 254
          self.stationHeight = 117
        }
        self.stationWidth += changeWidth
        self.stationHeight += changeHeight
      }, 25)
    },
    animateCity () {
      var changeWidth = 1.7
      var changeHeight = 0.6
      var self = this
      var timer = setInterval(function () {
        if (self.cityWidth >= 375 || self.cityHeight >= 140) {
          changeWidth = -1.7
          changeHeight = -0.6
        }
        if (self.cityWidth <= 341 || self.cityHeight <= 126) {
          clearInterval(timer)
          self.cityWidth = 342
          self.cityHeight = 127
        }
        self.cityWidth += changeWidth
        self.cityHeight += changeHeight
      }, 25)
    },
    animatePump () {
      var changeWidth = 1.7
      var changeHeight = 0.7
      var self = this
      var timer = setInterval(function () {
        if (self.pumpWidth >= 375 || self.pumpHeight >= 163) {
          changeWidth = -1.7
          changeHeight = -0.7
        }
        if (self.pumpWidth <= 340 || self.pumpHeight <= 147) {
          clearInterval(timer)
          self.pumpWidth = 341
          self.pumpHeight = 148
        }
        self.pumpWidth += changeWidth
        self.pumpHeight += changeHeight
      }, 25)
    },
    animateFactory () {
      var changeWidth = 1.8
      var changeHeight = 0.8
      var self = this
      var timer = setInterval(function () {
        if (self.factoryWidth >= 401 || self.factoryHeight >= 184) {
          changeWidth = -1.8
          changeHeight = -0.8
        }
        if (self.factoryWidth <= 364 || self.factoryHeight <= 166) {
          clearInterval(timer)
          self.factoryWidth = 365
          self.factoryHeight = 167
        }
        self.factoryWidth += changeWidth
        self.factoryHeight += changeHeight
      }, 25)
    }
  },
  mounted () {
    var self = this
    this.$nextTick(function () {
      if (self.$parent.step !== '4') {
        setTimeout(function () {
          self.questionVisible = true
        }, 1000)
        setTimeout(function () {
          self.backgroundTransparent = true
          if (self.$parent.step === '1') {
            self.animatePump()
            self.animateFactory()
          } else if (self.$parent.step === '2') {
            self.animatePump()
            self.animateCity()
          } else if (self.$parent.step === '3') {
            self.animatePump()
            self.animateStation()
          }
        }, 2000)
        setTimeout(function () {
          self.buttonsVisible = true
        }, 3500)
      }
    })
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
