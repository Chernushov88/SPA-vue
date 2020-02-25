Vue.component('stepcomponent', {
	template: `
		<ul class="step">			
			<li><span class="current-active active">1</span></li>
			<li><span class="current">1</span></li>
			<li>3</li>
		</ul>
	`,
	data: function () {
		return { 
			
		} 		
	},	
	// methods: {

	// },
	// computed: {

	// },
	// props:{
		 
	// },
	
	
})

Vue.component('elementblock', {
	template: `
		<div :id="elemenid" class="content-elem">
			<img :src="'images/' + elemenimg + '-bg.png'" alt="">
		</div>
	`,
	data: function () {
		return { 

		} 		
	},
	props:{
		elemenid:{
			type: String,
			default: '',
		},
		elemenimg:{
			type: String,
			default: '',
		},		
	},
})

 

Vue.component('buttoncomponent', {
	template: `
		<div :class="'button button-' + number">
			<img :src="'images/button/0' + number + '.jpg'" alt="">
			<p>{{descbutton}}</p>
		</div>
	`,
	data: function () {
		return { 

		} 		
	},
	props:{
		number:{
			type: Number,
			default: 1,
		},
		descbutton:{
			type: String,
			default: '',
		}
	},
})
