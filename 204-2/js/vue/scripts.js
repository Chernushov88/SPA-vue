var allHome = new Vue({
	el: '#home-container',
	data:{
		step_array: [1,1,2,2,1,2,1,2,2,1],
		ansver_array:[
			'И вилочки, и стакан сделаны из пластмассы. А её делают из нефти!',
			'Синтетические нити делают из нефти.',
			'Эта посуда сделана <br>из обожжённой глины.',
			'Такую фольгу делают <br>из металла алюминия.',
			'Асфальт — это смесь песка, камушков и веществ, которые получают из нефти.',
			'Материалы из нефти <br>не ржавеют.',
			'Эти воланчики сделаны <br>из пластмассы, а её <br>делают из нефти.',
			'Красные кирпичи делают <br>из обожжённой глины.',
			'Эта посуда сделана <br>из стекла.',
			'Такие краски, акриловые, делают из нефти.',
		],
		url_array:[
			'images/question-img/1.jpg',
			'images/question-img/2.jpg',
			'images/question-img/3.jpg',
			'images/question-img/4.jpg',
			'images/question-img/5.jpg',
			'images/question-img/6.jpg',
			'images/question-img/7.jpg',
			'images/question-img/8.jpg',
			'images/question-img/9.jpg',
			'images/question-img/10.jpg',
		],
		stept: 1,
		errors: false,
		times: 1,
		hidden: false,
		check_true: false,
		check_false: false,
	},	
	props: {
    interval: {
      type: Number,
      default: 1
    },
  },	
	methods: {		
		nextstep: function (){
			console.log(this.stept);
			this.errors = false;
			if (this.stept<=10) {	
				this.hidden = true;	
				this.check_true = true;		
				var self = this
					setTimeout(function () {
	        	self.errors = false;
						self.stept = self.stept + 1;
						self.hidden = false;		
						self.check_true = false;
						this.check_false = false;	
	      }, 1000)
			}
			if (this.stept == 11){
				self.stept == 0;
				console.log('this.stept == 11');
			}				
		},

		nextstepstop: function(){
			this.stept = 1
			this.errors = false
			console.log('nextstepstop = nextstepstop');
		},
		onInterval: function(){
			console.log('this.times - '+ this.times);
			if (this.times == 2){
					this.errors = false;
					this.times = 0;
					clearInterval(this.timerInterval);
			}
			else{
				this.times ++;
			}
    },
   //  allClearInterval: function(){
   //  	if (this.times == 1){
			// 		this.errors = false;
			// 		this.times = 0;
			// 		clearInterval(this.timerInterval);    		
			// }
   //  	console.log('click');
   //  },
		errorstept: function (){			
			this.errors = true;
			this.check_false = true;		
			var self = this
			setTimeout(function(){self.check_false = false;}, 4000)
			// setInterval(this.onInterval(), 1 * 1000);
		},
		refreshAll: function (){
				this.stept = 1
				this.errors = false
				console.log(this.stept);
		},
		hidebubble: function(){
			this.errors = false;
			console.log('hidebubble');			
		},
		hidebubbleall: function(){
			console.log('hidebubble-all-0');
			var self = this
				setTimeout(function () {
					console.log('hidebubble-all-1');

						self.errors = false;
						console.log('hidebubble-all-2');
			
      }, 100)			
				
		},		
	},
	computed: {
			  
	},
	
})
  