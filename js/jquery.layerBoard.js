$(function(){
	var modal = $(".modal");//���[�_���E�C���h�E�̃N���X
	var opacity = 0.6;//���[�_���w�i�̓����x
	var button = $(".close_modal");//���[�_�������{�^���̃N���X
	var limit = 120;//Cookie�̗L������(��)
	var cookie = $.cookie("modal");
	if(cookie !== "off"){
		var overlay = $("<div></div>");
		overlay.css({
			"position":"fixed",
			"z-index":100,
			"top":0,
			"left":0,
			"height":100+"%",
			"width":100+"%",
			"background":"#000",
			"opacity":opacity
		});
		$("body").append(overlay);
		modal.css("display", "block");
	}
	button.click(function(){
		$(overlay).fadeOut("slow");
		$(modal).hide();
		var clearTime = new Date();
		clearTime.setTime(clearTime.getTime()+(limit*60*1000));
		$.cookie("modal", "off", {expires:clearTime, path:"/"});
	});
	$(".remove_cookie").click(function(){
		$.removeCookie("modal", {expires:-1, path:"/"});
		location.reload();
	});
});