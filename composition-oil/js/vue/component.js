Vue.component('home', {
	template: `
	<div :class="'element-wrapp-' + counterspan">
		<div
			:class="'element-' + type + ' ' + classposition + ' '+ classerorr +' ' + counter" 			
			v-on:mousedown="startmove" 
			>						
		</div>		
	</div>
	`,
	data: function () {  
		return { 
			top_home: 0,
			left_home: 0,
		} 
	},
	computed: {
		counter: function () {
			// console.log('counter homebarrelposition' +this.homebarrelposition);
			// console.log('counter move ' +this.move);
			// console.log(this.move + ' - counter');
			if (this.move ) {				
				return 'hide';		
			}
			// if (!this.move  ) {				
			// 	if (this.homebarrelposition ) {				
			// 		return 'hide';		
			// 	}	
			// 	else{
			// 		return '';
			// 	}	
			// }

			return '';			
		},
		counterspan: function () {
			// console.log('counterspan homebarrelposition' +this.homebarrelposition);
			// console.log('counterspan move ' +this.move);
			// console.log(this.move + ' - counterspan');
			if (this.move ) {				
				return 'hide';		
			}
			// if (!this.move  ) {				
			// 	if (this.homebarrelposition ) {				
			// 		return 'hide';		
			// 	}	
			// 	else{
			// 		return '';
			// 	}	
			// }	
						

			return this.homebarrelposition;			
		},

	},
	props:{
		move:{
			type: Boolean,
			default: false,
		},
		type:{ 
			type: String,
			default: 'metan',
		},
		label:{
			type: String,
			default: 'Метан',
		},
		src:{
			type: String,
			default: '',
		},
		classerorr: {
			type: String,
			default: '',
		},		
		classposition: {
			type: String,
			default: '',
		},	
		innertype:{
			type: String,
			default: '',
		},		
		homebarrelposition:{
			type: String,
			default: '',
		}
	},	
	methods: {
		startmove: function(e){
			// console.log('Кнопка зажата');
			this.top_home = e.clientY-27;
			this.left_home = e.clientX-27;
			var label = '';
			label = this.classposition;
			if (this.classposition != "") {
				label = label.replace('label-catch label-','');
			};
			
			this.$emit('elementstart', this.innertype, this.type, label)
			
		},
		stopmove: function(e){
			// console.log('Кнопка поднята');
			// console.log(this.move);
			this.top_home = e.clientY-27;
			this.left_home = e.clientX-27;
			this.$emit('elementstop', this.innertype, '')

		},
		gomove: function(e){			
			if (this.move == true) {
				this.top_home = e.clientY-27;
				this.left_home = e.clientX-27;
			};					
			// console.log(e.clientY)
			// console.log(e.clientX)		
		},	 
	}
})


Vue.component('barrel', {
	template: `
		<div 
			:class="'label-catch label-' + classname " 		
				@mouseover="startmoveBarrel"
				@mouseleave="stopmoveBarrel"
				>				
		</div>
	`,
	data: function () {
		return { 
			move: false,
			initY : 0,
			finishY : 0,
			hovererror: false,
		}
	},
	computed: {
		classerorr:function(){
			if ( (this.startelement !='') && this.hovererror) {
				return 'hover-error';
			}
			else{
				return '';
			}			
		},
	},
	props:{
		type:{
			type: String,
			default: '',
		},
		elementImg:{
			type: String,
			default: '',
		},
		imgBarel:{
			type: String,
			default: '',
		},
		labelCatch:{
			type: String,
			default: '',
		},
		barrelvess:{
			type: Number,
			default: 3,
		},
		// barrelcount:{
		// 	type: Number,
		// 	default: 0,
		// },	
		startelement:{
			type: String,
			default: '',
		},
		innertype:{
			type: String,
			default: '',
		},	
		classname:{
			type: String,
			default: '',
		}

	},
	
	methods: {
		startmoveBarrel: function(e){
			var erorr = '';
			// console.log('В нутри бочки - '+ this.innertype);
			// this.hovererror = true;
			var position = this.classname;
			
			// console.log(position);
			this.$emit('enterbarrel', this.type, this.innertype, erorr, position);	
		},
		stopmoveBarrel: function(e){
			var position = '';
			// console.log('Вышли из бочки - '+ this.innertype);
			// this.hovererror = false;			
			// console.log(position);
			this.$emit('exitbarrel', this.type, this.innertype, 'erorr', position);	
		},

	
	}
})