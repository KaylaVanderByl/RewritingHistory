var $ = jQuery.noConflict();
var fadeLock = false;


function changePage(page)
{
	if (fadeLock) {
		return;
	}

	fadeLock = true;
	$('.section').removeClass('show');
	setTimeout(function() {
		window.location = page;

		fadeLock = false;
	}, 400);
}

function setupScratch()
{
	$('#menu span.masked').wScratchPad({
		size        : 50,
		bg          : '#ffffff',
		fg          : '#9a9a99',
		realtime    : true,
		scratchDown : null,
		scratchUp   : null,
		scratchMove : function(e, percent) {
			if (percent > 80) {
				$(e.target).parent().addClass('unmasked');
			}
		},
		cursor      : 'crosshair'
	});


	$('.pageContent .masked').wScratchPad({
		size        : 10,
		bg          : '#ffffff',
		fg          : '#9a9a99',
		realtime    : true,
		scratchDown : null,
		scratchUp   : null,
		scratchMove : null,
		cursor      : 'crosshair'
	});


	$('.imgMasked').wScratchPad({
		size        : 35,
		bg          : '#ffffff',
		fg          : '#9a9a99',
		realtime    : true,
		scratchDown : null,
		scratchUp   : null,
		scratchMove : null,
		cursor      : 'crosshair'
	});

	$('.pageContent .contactMasked').wScratchPad({
		size        : 35,
		bg          : '#ffffff',
		fg          : '#9a9a99',
		realtime    : true,
		scratchDown : null,
		scratchUp   : null,
		scratchMove : function(e, percent) {
			if (percent > 85) {
				$(e.target).parent().addClass('unmasked');
			}
		},
		cursor      : 'crosshair'
	});
}

/*
window.onpageshow = function(event) {
  if (event.persisted) {
      window.location.reload(); 
  }
};
*/

$(document).ready(function() {

	setupScratch();

	if (!isMobile) {
		$(window).resize(function() {
			$('#menu span.masked').wScratchPad('reset');
			$('.pageContent .masked').wScratchPad('reset');
			$('.imgMasked').wScratchPad('reset');
			$('.pageContent .contactMasked').wScratchPad('reset');
			setupScratch();
		});
	}

	if ($('#aniversari').length || $('#festa').length) {
		$('body').imagesLoaded( function() {
			$(window).resize();
			$('body').addClass('loaded');
			setupScratch();
		});

		// Plugin not working at all on init
		// God damn it
		setTimeout(function() {
			$(window).resize();
			setupScratch();
		}, 200);
	} else {
		
		$('body').addClass('loaded');
	}


	$('#menu canvas').click(function(e) {
		e.stopPropagation();
		e.preventDefault();
	});

	if (!isMobile) {
		$('#menu .row1 span').click(function() {
			changePage('aniversari');
		});

		$('#menu .row2 span, #menu .row3 span').click(function() {
			changePage('festa');
		});

		$('#menu .row4 span').click(function() {
			changePage('contacte');
		});
	} else {
		$('#menu .row2 span').click(function() {
			changePage('aniversari');
		});

		$('#menu .row3 span, #menu .row4 span').click(function() {
			changePage('festa');
		});

		$('#menu .row5 span').click(function() {
			changePage('contacte');
		});
	}

	$('.back').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('.section').removeClass('show');
		setTimeout(function() {
			window.location = 'index.php';
		}, 400);
	});

	if (!isMobile) {
		$('#menu span').mouseenter(function() {
			if ($(this).hasClass('masked') && !$(this).hasClass('unmasked')) {
				return;
			}
			$(this).parent().addClass('hover');
			if ($(this).parent().hasClass('row2')) {
				$('.row3').addClass('hover');
			} else if ($(this).parent().hasClass('row3')) {
				$('.row2').addClass('hover');
			}
		});

		$('#menu span').mouseleave(function() {
			$('#menu .row').removeClass('hover');
		});
	}
});