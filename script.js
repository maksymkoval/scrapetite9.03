var modal2 = document.getElementById("cont2");
var modal1 = document.getElementById("cont1");

var btn = document.getElementById("registr");

var close1 = document.getElementById('cancel');

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal2.style.display = "block";
  modal1.style.display = "none"

}

// When the user clicks on <span> (x), close the modal
close1.onclick = function() {
	modal1.style.display = "block";
  modal2.style.display = "none";
}

function makeResizable(element){
	if (element && jQuery(element).length){
		var $el = jQuery(element);
		var elHeight = $el.outerHeight();
		var elWidth = $el.outerWidth();

		var $wrapper = $el.parent();

		var starterData = {
			size: {
				width: $wrapper.width(),
				height: $wrapper.height()
			}
		}
		var scale = Math.min(
			starterData.size.width / $el.outerWidth(),
			starterData.size.height / $el.outerHeight()
		);
		if (scale > 1){
			scale = 1;
		}
		var elMarginBottom = (scale * elHeight) - starterData.size.height;
		$el.css({
			transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
			'margin-bottom': elMarginBottom
		});
	}
}
$(document).on('ready',function() {
	makeResizable('#create');
});
// $(window).load(function() {
// //	makeResizable('#very-specific-design');
// });
$(window).on('resize',function() {
	makeResizable('#create');
});
$(document).on('ready',function() {
	makeResizable('#cont1');
});
// $(window).load(function() {
// //	makeResizable('#very-specific-design');
// });
$(window).on('resize',function() {
	makeResizable('#cont1');
});