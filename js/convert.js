function hslToRgb(hsl) {

	var rgb = {},

		h = hsl.h,

		s = hsl.s,

		l = hsl.l;

	if( s === 0 ) {
		rgb = {
			r: l,
			g: l,
			b: l
		}
	}
	else {

		var q = l < 0.5 ? l * ( 1 + s ) : l + s - ( l * s ),

			p = 2 * l - q,

			hk = h / 360,

			t = {
				r: hk + 1/3,
				g: hk,
				b: hk - 1/3
			};

		for( var i in t ) {

			if( t[i] < 0 ) {
				t[i] += 1;
			}
			else if( t[i] > 1 ) {
				t[i] -= 1;
			}

			if( t[i]*6 < 1 ) {
				rgb[i] = p + ((q - p) * 6 * t[i]);
			}
			else if( t[i]*2 < 1 ) {
				rgb[i] = q;
			}
			else if( t[i]*3 < 2) {
				rgb[i] = p + ((q - p) * 6 * (2/3 - t[i]));
			}
			else {
				rgb[i] = p;
			}
		}

		rgb.r = Math.round(rgb.r * 255);
		rgb.g = Math.round(rgb.g * 255);
		rgb.b = Math.round(rgb.b * 255);		

	}

	return rgb;

}

function hsvToRgb(hsv) {

	var rgb = {},

		h = hsv.h;

		s = hsv.s,

		v = hsv.v,

		hi = Math.floor(h/60),

		f = h/60 - hi,

		p = v*(1-s),

		q = v*(1-s*f),

		t = v*(1-(1-f)*s);

	switch (hi) {
		case 0: rgb = {
			r: v,
			g: t,
			b: p
		};break;
		case 1: rgb = {
			r: q,
			g: v,
			b: p
		};break;
		case 2: rgb = {
			r: p,
			g: v,
			b: t
		};break;
		case 3: rgb = {
			r: p,
			g: q,
			b: v
		};break;
		case 4: rgb = {
			r: t,
			g: p,
			b: v
		};break;
		case 5: rgb = {
			r: v,
			g: p,
			b: q
		};break;
		default: break;
	}

	rgb.r = Math.round(rgb.r * 255);
	rgb.g = Math.round(rgb.g * 255);
	rgb.b = Math.round(rgb.b * 255);

	return rgb;

}