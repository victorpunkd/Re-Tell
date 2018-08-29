$(document).ready(function(){

	$("#search").click(function()
	{
		$("#search_modal").addClass("animated fadeIn");
		$("#search_modal").show();
	});
	
	$("#sm_done").click(function()
	{
		$("#search_modal").slideUp();
	});
	
	$("#sm_cancel").click(function()
	{
		$("#search_modal").slideUp();
	});
});