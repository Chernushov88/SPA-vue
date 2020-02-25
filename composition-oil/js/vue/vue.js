var allHome = new Vue({
		el: '#home-container',
		data:{
			type : '',	
			element: '',
			classerorr: [
				{ metan: '' },
				{ ciklogeksan: '' },
				{ azot: '' },
				{ geksan: '' },
				{ serovodorod: '' },
				{ geksadekan: '' },
				{ benzol: '' },
				{ oktadekan: '' },
				{ oktan: '' },
				{ water: '' },
				{ metantiol: '' },
				{ kremnia: '' },
			], 
			classerorrhide: [ 
				{ metan: '' },
				{ ciklogeksan: '' },
				{ azot: '' },
				{ geksan: '' },
				{ serovodorod: '' },
				{ geksadekan: '' },
				{ benzol: '' },
				{ oktadekan: '' },
				{ oktan: '' },
				{ water: '' },
				{ metantiol: '' },
				{ kremnia: '' },
			],
			classposition: [
				{ metan: '' },
				{ ciklogeksan: '' },
				{ azot: '' },
				{ geksan: '' },
				{ serovodorod: '' },
				{ geksadekan: '' },
				{ benzol: '' },
				{ oktadekan: '' },
				{ oktan: '' },
				{ water: '' },
				{ metantiol: '' },
				{ kremnia: '' },
			], 
			elementtype: '',
			barreltype: '',
			barrelposition: '',
			counlabel: '1',
			barrel_arey: [
				{top: 0},
				{center: 0},
				{bottom: 0},
			],
			erorr: '',
			elementmove: [
				{ metan: false},
				{ ciklogeksan: false},
				{ azot: false},
				{ geksan: false},
				{ serovodorod: false},
				{ geksadekan: false},
				{ benzol:false },
				{ oktadekan: false},
				{ oktan: false},
				{ water: false},
				{ metantiol: false},
				{ kremnia: false},
			], 
			labelletoff: [
				{ metan: '' },
				{ ciklogeksan: '' },
				{ azot: '' },
				{ geksan: '' },
				{ serovodorod: '' },
				{ geksadekan: '' },
				{ benzol: '' },
				{ oktadekan: '' },
				{ oktan: '' },
				{ water: '' },
				{ metantiol: '' },
				{ kremnia: '' },
			],
			arraycatch: [
				{ top_1: 0 },
				{ top_2: 0 },
				{ top_3: 0 },
				{ top_4: 0 },
				{ center_1: 0 },
				{ center_2: 0 },
				{ center_3: 0 },
				{ center_4: 0 },
				{ center_5: 0 },
				{ bottom_1: 0 },
				{ bottom_2: 0 },
				{ bottom_3: 0 },
			],
			hide_flag: true,
			hide_fail: true,
			hide_success: true,
		},			
		methods: {	
			empty: function( mixed_var ) {
			    return ( 
			        mixed_var === '' || 
			        mixed_var === 0 || 
			        mixed_var === '0' || 
			        mixed_var === null || 
			        mixed_var === false || 
			        mixed_var === 'false' || 
			        mixed_var === undefined 
			        );
			},
			startmove_Vue: function (type, innertype, erorr, position) {
				this.erorr = erorr;
				// console.log('Вошли в бочку VUE - ' + innertype)
				this.barreltype = innertype;
				this.barrelposition = type; // top, center, bottom
				this.counlabel = position;
				// console.log(type);	
			},
			stopmove_Vue: function (type, innertype, erorr, position) {	
				this.erorr = erorr;
				// console.log('Вышли из бочки VUE - ' + innertype)										
				this.barreltype = '';		
				position = '';		 
				// console.log(position);					
			},
			gomove_Vue: function (e) {
				var stop;
				console.log('отпускание елемента - ' + this.element);
				this.elementmove[this.element] = false;
				// if (this.counlabel != this.counlabel) {
				// 	console.log('this.elementmove');
				// };
				// console.log(this.arraycatch[this.counlabel] + ' - 0');
				console.log(this.erorr  + ' - 1');
				if (this.erorr == "") {				
					if ( this.empty(this.arraycatch[this.counlabel]) ){
						console.log(this.counlabel + ' - 2');

						this.classposition[this.element] =  'label-catch label-' + this.counlabel; 
						this.labelletoff[this.element] = this.barrelposition
						
						this.barrel_arey[this.barrelposition] = this.counlabel;
						// console.log('тип barreltype - ' + this.barreltype);
						// console.log('тип елемента - ' + this.elementtype);
						this.arraycatch[this.counlabel] = 1;
					}
					else{ 
						console.log(this.barrelposition + ' - 3');
						var i = 1;
						switch(this.barrelposition) {
						  case 'top':  
						    stop = 4;
						    break;
						  case 'center':  
						    stop = 5;
						    break;
					    case 'bottom':  
						    stop = 3;
						    break;
					    case '':  
					    	console.log('33333');
						    stop = 0;
						    console.log(this.element + ' - 4444444444');
						    this.labelletoff[this.element] = '';
						    break;
						}
						while( i <= stop){
							var label = this.barrelposition + "_" + i;
							if ( this.empty(this.arraycatch[label]) ) {					
								this.classposition[this.element] =  'label-catch label-' + label; 
								this.labelletoff[this.element] = this.barrelposition;
								this.arraycatch[label] = 1;
								i = 10;
							}							
							i++;
						}

						// this.labelletoff[this.element] = ' ';
					}
					console.log(this.barrelposition + ' - 4');

					if (this.barreltype != this.elementtype) {
						this.classerorrhide[this.element] = 'erorr';
						// this.classerorr[this.element] = 'error';
					}							
				}			
				// console.log(this.arraycatch[this.counlabel] + ' - 4');		
				this.element = '';
			},

			testcheck: function(e){
				var erorr = '';
				var check = false;
				for (erorr in this.classerorrhide ) {
					this.classerorr[erorr] = this.classerorrhide[erorr];	
					console.log(this.classerorrhide[erorr]);		
					if (this.classerorrhide[erorr] == 'erorr') {
						console.log('this.classerorrhide == true');
						check = true
					}		
				};
				if ( check == true ) {
					this.hide_fail = false;
					this.hide_success = true;
				}
				else{
					this.hide_success = false;
					this.hide_fail = true;
				}


				console.log('Запустили проверку');
				allHome.$forceUpdate();
			},
			refreshAll: function () {
				this.type = ''	
				this.element= ''
				this.classerorr= [
					{ metan: '' },
					{ ciklogeksan: '' },
					{ azot: '' },
					{ geksan: '' },
					{ serovodorod: '' },
					{ geksadekan: '' },
					{ benzol: '' },
					{ oktadekan: '' },
					{ oktan: '' },
					{ water: '' },
					{ metantiol: '' },
					{ kremnia: '' },
				] 
				this.classerorrhide= [ 
					{ metan: '' },
					{ ciklogeksan: '' },
					{ azot: '' },
					{ geksan: '' },
					{ serovodorod: '' },
					{ geksadekan: '' },
					{ benzol: '' },
					{ oktadekan: '' },
					{ oktan: '' },
					{ water: '' },
					{ metantiol: '' },
					{ kremnia: '' },
				]
				this.classposition = [
					{ metan: '' },
					{ ciklogeksan: '' },
					{ azot: '' },
					{ geksan: '' },
					{ serovodorod: '' },
					{ geksadekan: '' },
					{ benzol: '' },
					{ oktadekan: '' },
					{ oktan: '' },
					{ water: '' },
					{ metantiol: '' },
					{ kremnia: '' },
				]
				this.elementtype = '',
				this.barreltype = '',
				this.barrelposition = '',
				this.counlabel = '1',
				this.barrel_arey = [
					{top: 0},
					{center: 0},
					{bottom: 0},
				]
				this.erorr = ''
				this.elementmove = [
					{ metan: false},
					{ ciklogeksan: false},
					{ azot: false},
					{ geksan: false},
					{ serovodorod: false},
					{ geksadekan: false},
					{ benzol:false },
					{ oktadekan: false},
					{ oktan: false},
					{ water: false},
					{ metantiol: false},
					{ kremnia: false},
				] 
				this.labelletoff = [
					{ metan: '' },
					{ ciklogeksan: '' },
					{ azot: '' },
					{ geksan: '' },
					{ serovodorod: '' },
					{ geksadekan: '' },
					{ benzol: '' },
					{ oktadekan: '' },
					{ oktan: '' },
					{ water: '' },
					{ metantiol: '' },
					{ kremnia: '' },
				]
				this.arraycatch = [
					{ top_1: 0 },
					{ top_2: 0 },
					{ top_3: 0 },
					{ top_4: 0 },
					{ center_1: 0 },
					{ center_2: 0 },
					{ center_3: 0 },
					{ center_4: 0 },
					{ center_5: 0 },
					{ bottom_1: 0 },
					{ bottom_2: 0 },
					{ bottom_3: 0 },
				]
				this.hide_flag = true
				this.hide_fail = true
				this.hide_success = true
				console.log('refreshAll document');
			},
			startchecktype: function(innertype, type, label){
				console.log('тип курсора start - ' + type);
				console.log('тип елемента start - ' + innertype);
				if (label != '') {
					this.arraycatch[label] = 0; 
				};

				this.element = type;
				this.elementtype = innertype;
				this.elementmove[this.element] = true;
				this.classerorrhide[this.element] = "";
			},
			stopchecktype: function(innertype, type){
				console.log('тип курсора stop - ' + type);
				console.log('тип елемента stop - ' + innertype);
				
				this.element = type;
				this.elementtype = innertype;
				this.elementmove[this.element] = false;
			},
			cursor: function (el) {
				// console.log('44444444444');
				this.type = '';	
				this.elementtype = '';	
				this.element = '';	
				this.classerorr[this.element] = '';	
			},			
		},			
	
})
 