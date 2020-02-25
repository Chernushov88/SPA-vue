/*-----------------------------------------------------------------------------------*/
/*	
/*-----------------------------------------------------------------------------------*/
$( document ).ready(function() {
	$(".darken-sucsees").on('click', function(){
		PopUpHide();
	});
});
/*-----------------------------------------------------------------------------------*/
/*  PopUp
/*-----------------------------------------------------------------------------------*/
//Функция отображения PopUp
function PopUpShow(){$(".darken-error").fadeIn(); $("#popup").fadeIn();}
function PopUpShow2(){$(".darken-sucsees").fadeIn(); $("#popup-2").fadeIn();}
        
    //Функция скрытия PopUp
function PopUpHide(){$(".darken-sucsees, .darken-error").fadeOut(300); $("#popup-2, #popup").fadeOut(300); } 