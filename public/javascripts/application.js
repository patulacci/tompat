$(document).ready(function(){
$("ul li a").click(function(){
		var onglet = $(this);
		$(onglet).addClass("ui-selected").parent().siblings(".menu").children().removeClass("ui-selected");
		
    var idToShow = $(this).attr("href");
    $(idToShow).fadeIn().siblings(".content").fadeOut();
    
    var nomPage = $(this).text();
    
    $(' h1#big_title').text(nomPage);
    return false;
		});
});







