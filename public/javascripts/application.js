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






//function() {
//		var self = this;

//		this.element.addClass("ui-selectable");

//		this.dragged = false;

//		// cache selectee children based on filter
//		var selectees;
//		this.refresh = function() {
//			selectees = $(self.options.filter, self.element[0]);
//			selectees.each(function() {
//				var $this = $(this);
//				var pos = $this.offset();
//				$.data(this, "selectable-item", {
//					element: this,
//					$element: $this,
//					left: pos.left,
//					top: pos.top,
//					right: pos.left + $this.outerWidth(),
//					bottom: pos.top + $this.outerHeight(),
//					startselected: false,
//					selected: $this.hasClass('ui-selected'),
//					selecting: $this.hasClass('ui-selecting'),
//					unselecting: $this.hasClass('ui-unselecting')
//				});
//			});
//		};
//		this.refresh();

//		this.selectees = selectees.addClass("ui-selectee");

//		this._mouseInit();

//		this.helper = $("<div class='ui-selectable-helper'></div>");
//	},

//	destroy: function() {
//		this.selectees
//			.removeClass("ui-selectee")
//			.removeData("selectable-item");
//		this.element
//			.removeClass("ui-selectable ui-selectable-disabled")
//			.removeData("selectable")
//			.unbind(".selectable");
//		this._mouseDestroy();

//		return this;
//	},


//$(document).ready(
//	
//	function(){

//	$('li#li_education').click(function(event){
//		event.preventDefault();
//		$('section#home').fadeOut(1000);
//		$('section#videos').fadeOut(1000);
//		$('section#photos').fadeOut(1000);
//		$('section#education').fadeIn(1000);
//		$(' h1#big_title').text('Education');
//		}),
//		
//		$('li#li_home').click(function(event){
//			event.preventDefault();
//			$('section#education').fadeOut(1000);
//			$('section#photos').fadeOut(1000);
//			$('section#videos').fadeOut(1000);
//			$('section#home').fadeIn(1000);
//			$(' h1#big_title').text('Home');
//		}),
//		
//		$('li#li_videos').click(function(event){
//			event.preventDefault();
//			$('section#home').fadeOut(1000);
//			$('section#education').fadeOut(1000);
//			$('section#photos').fadeOut(1000);
//			$('section#videos').fadeIn(1000);
//			$(' h1#big_title').text('Videos');
//		}),
//		
//		$('li#li_photos').click(function(event){
//			event.preventDefault();
//			$('section#home').fadeOut(1000);
//			$('section#education').fadeOut(1000);
//			$('section#videos').fadeOut(1000);
//			$('section#photos').fadeIn(1000);
//			$(' h1#big_title').text('Photos');
//		});
//});







