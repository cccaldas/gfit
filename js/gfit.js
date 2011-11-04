var GFit = {};

GFit.ready = function()
{		
	GFit.app = $("#" + GFit.target);
	GFit.init();
	GFit.resize();
}

GFit.init = function()
{	
	GFit.width 	= GFit.app.width();
	GFit.height	= GFit.app.height();
	
	$("object", app).css("margin-bottom", "-4px");
}

GFit.resize = function()
{
	//caso a window.width for menor que o tamanho minimo
	if($(window).width() < GFit.width)
	{
		GFit.app.width(GFit.width);
		$("body").css("overflow-x", "scroll");
	}
	else
	{
		GFit.app.width("100%");
		$("body").css("overflow-x", "hidden");
	}
	
	//caso a window.height for menor que o tamanho minimo
	if($(window).height() < GFit.height)
	{
		GFit.app.height(GFit.height);
		$("body").css("overflow-y", "scroll");
	}
	else
	{
		GFit.app.height("100%");
		$("body").css("overflow-y", "hidden");
	}
	
	$("#lbl_status").text(GFit.app.width() + ", " + GFit.app.height());
}

GFit.fit = function(target)
{
	GFit.target = target;
	$(document).ready(GFit.ready);
	$(window).resize(GFit.resize);
}