$(document).ready(function(){
	$("button").click(function(){
		$("div").toggle(1000);
	});
});
// fadein
/*
$(document).ready(function(){
	$("button.btn").click(function(){
		$("#div1").fadeOut();
		$("#div2").fadeOut(1000);
		$("#div3").fadeOut(2000);
	});
});
*/
// fade toggle
$(document).ready(function(){
	$("button.btn").click(function(){
		$("#div1").fadeToggle();
		$("#div2").fadeToggle();
		$("#div3").faceToggle();
	})
})