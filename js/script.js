function ganti(object){

	var data = $(object).attr("src");

	$("#target").attr("src",data);

	$(".normal").css({
		"border" : "1px #ddd solid"
	});

	$(object).css({
		"border" : "4px #9e0000 solid"
	});

}