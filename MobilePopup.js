$(document).ready(function () {
	var instance = $.fn.deviceDetector;
	var IsMobile = instance.getInfo().mobile;
	if (IsMobile) {
		if(instance.getInfo().android){
			$("#iosLink").hide();
		}else{
			$("#androidLink").hide();
		}
	}
});