// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// Fires each time the user scrolls
window.onscroll = function() {

	// Target the responsive area
	var responsive = document.getElementById('web-browser');

	// If in view, add 'activated' class
	if (isInViewport(responsive)) {
		activateResponsive();
	}
}

function activateResponsive() {
	var iPhoneNodeList1 = document.querySelectorAll('.iphone-h1');
	var iPhoneNodeList2 = document.querySelectorAll('.iphone-h2');
	var browserNodeList1 = document.querySelectorAll('.browser-h1');
	var browserNodeList2 = document.querySelectorAll('.browser-h2');

	for (i=0; i < iPhoneNodeList1.length; ++i) {
		iPhoneNodeList1[i].className += ' activated';
	}

	for (i=0; i < iPhoneNodeList2.length; ++i) {
		iPhoneNodeList2[i].className += ' activated';
	}

	for (i=0; i < browserNodeList1.length; ++i) {
		browserNodeList1[i].className += ' activated';
	}

	for (i=0; i < browserNodeList2.length; ++i) {
		browserNodeList2[i].className += ' activated';
	}	
}



// Determine if an element is in the visible viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}
// The above function could be used by adding a “scroll” event listener to the window and then calling isInViewport().