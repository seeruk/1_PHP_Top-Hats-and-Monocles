var baseurl="resources/img/";var images=[baseurl+"background_radial.png",baseurl+"background.png",baseurl+"button_hover.png",baseurl+"button_pushed.png",baseurl+"button.png",baseurl+"header_footer_background.png",baseurl+"logo_background.png",baseurl+"logo.png",baseurl+"search_background.png",baseurl+"search_button_hover.png",baseurl+"search_button_pushed.png",baseurl+"search_button.png",baseurl+"search_input.png"];$({}).imageLoader({images:images,async:true,allcomplete:function(b,a){$(document).ready(function(){$("body").css("visibility","visible");$("#button").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});$("#button").mousedown(function(){$(this).addClass("pushed")});$("#button").mouseup(function(){$(this).removeClass("pushed");location.href=savemeLocation});var e,f,d,z=$("footer").height();$(window).resize(function(){e=$("body").height();f=$(window).height();d=$("footer").height();if(f>e){$("footer").height((f-e)+d)}else{$("footer").height(z)}}).trigger("resize");var c=$("nav").find("li").size()-1;$("nav").find("li").each(function(g){if(c!=g){$(this).after('<li class="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>')}});$("input.placeholder").each(function(){var g=$(this),h=$(this).val();$(this).focus(function(){if(g.val()==h){$(this).val("")}});$(this).blur(function(){if(g.val()==""){$(this).val(h)}})})})}});