// id selector
$(document).ready(function(){
	$('h1#first').hide(3000);
})


// bind & unbind
$(document).ready(function(){
	
	$("h1").mouseenter(function(){
	$(this).css("background-color","green");
	});
	
	$("h1").mouseleave(function(){
		$(this).css("background-color","white");
	});
	
});