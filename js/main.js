$(function(){

	var	hsv = {
			h: 0,
			s: 0,
			v: 0,
		},

		hsl = {
			h: 0,
			s: 0,
			l: 0
		};

	$('input').val(0);

	function fill_HSV() {
		var rgb = hsvToRgb(hsv),
			rgb_str = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
		$('.demo1').css('background',rgb_str);
	}

	$('#hsv_h').on('input',function(){
		hsv.h = parseInt($(this).val(), 10);
		$(this).siblings('i').text(hsv.h);
		fill_HSV();
	});

	$('#hsv_s').on('input',function(){
		hsv.s = parseInt($(this).val(), 10)/100;
		$(this).siblings('i').text(hsv.s);
		fill_HSV();
	});

	$('#hsv_v').on('input',function(){
		hsv.v = parseInt($(this).val(), 10)/100;
		$(this).siblings('i').text(hsv.v);
		fill_HSV();
	});


	function fill_HSL() {
		var rgb = hslToRgb(hsl),
			rgb_str = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')'; 
		$('.demo2').css('background',rgb_str);
	}

	$('#hsl_h').on('input',function(){
		hsl.h = parseInt($(this).val(), 10);
		$(this).siblings('i').text(hsl.h);
		fill_HSL();
	});

	$('#hsl_s').on('input',function(){
		hsl.s = parseInt($(this).val(), 10)/100;
		$(this).siblings('i').text(hsl.s);
		fill_HSL();
	});

	$('#hsl_l').on('input',function(){
		hsl.l = parseInt($(this).val(), 10)/100;
		$(this).siblings('i').text(hsl.l);
		fill_HSL();
	});






});