/**
 * @author DONATO ROUCO FERNÁNDEZ
 */
$(document).ready(function() {	  
	$(".tab_content").hide(); //Hide tab content 
	$("ul.simpletabs li:first").addClass("active").show(); //Set First tab as selected 
	$(".tab_content:first").show(); //Show first tab by default
	//On Click Event 
	$("ul.simpletabs li").click(function() { $("ul.simpletabs li").removeClass("active"); //Remove active class 
		$(this).addClass("active"); //Set clicked tab as active 
		$(".tab_content").hide(); //Hide tab content 
		var activeTab = $(this).find("a").attr("href"); //Find the next active tab 
		$(activeTab).fadeIn(); //Agregar efecto de transición (fade) en el contenido activo 
		return false; 
	}); 
}); 
