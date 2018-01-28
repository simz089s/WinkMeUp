$(document).ready(function(){
    $("#btn1").click(function(){
        $("ol").css("visibility","visible");
		  $("#btn1").hide();
		  $("#btn1").attr("id","btn2");
    });
});