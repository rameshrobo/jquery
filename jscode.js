/*
 $(document).ready(function (){
	$("p").css("background-color","red");
 });
 */
 // show pop up message on click
 
 $(document).ready(function(){
	$('h3').click(function(){
		alert('Hi, How are you...!!!');
	});
 });
 
 //hide the element
 
 $(document).ready(function(){
	$('h4').hide(2000);
	});

	
// selectors 
$(document).ready(function(){
	$('strong').css('color','green');
});

// fadeout element

$(document).ready(function(){
	$('h2').fadeOut(2000);;
})

// class selector
////////////////// fadein property
$(document).ready(function(){
	//$('first').fadeIn(2000); select the main class
		$('div.first').fadeIn(3000);
})

// id selector
$(document).ready(function(){
	$('#first').hide(3000);
})
