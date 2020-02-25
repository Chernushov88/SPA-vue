Vue.component('stepcomponent', {
	template: `				
		<li 
			:class="current "
			@click="test()"
		>
			{{this.questionimg}}
		</li>	
	`,
	data: function () {
		return { 
			current: "",			
		} 		
	},	
	props:{		

	},
	methods: {

	},	
	computed: {

})

Vue.component('buttoncomponent', {
	template: `	
		<div class="button " 
				 :class="'button-' + position" 
				 @click="checkAnsver()">
			<div class="block-img">
				<img :src="imgsrc" alt="">								
			</div>
			<div class="desc">{{this.descrip}}</div>
		</div>
	`,
	data: function () {
		return { 

		} 		
	},
	props:{

	},
	methods: {

	},
	computed: {
		
	},	
})



Vue.component('imgcomponent', {
	template: `
		<div class="col-right active">
			<img :src="'images/question-img/' + this.questionimg + '.jpg'" alt="">
			<div :class="'speech-bubble' + this.errorClass">	
				<p>{{this.errormessege}}</p>
			</div>
		</div>
	`,
	data: function () {

	},	
	props:{
		errormessege:{
			type: String,
			default: "",
		},
		questionimg:{
			type: String,
			default: "1",
		},
		questionresult:{
			type: Number,
			default: 1,
		},
	},
	methods: {
	
	},	
	computed: {

	},
})

 