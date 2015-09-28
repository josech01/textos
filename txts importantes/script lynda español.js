var x = document.getElementsByClassName("video-transcript")[0];
var z = x.getElementsByTagName("P")
var u,v,w,m,a,b,c,d;
for (k = 0; k < z.length; k++) {
	 	var y = z[k].getElementsByTagName("span");
		for (i = 0; i < y.length; i++) {
			/*u = y[i].innerHTML.replace(/(<).*(>)/g,"");*/
            m = /(<font>)/g;
            c = /(<[/]font>)/g;
            d = /(<font class="">)/g
			u = y[i].innerHTML.replace(m, "");
			v = u.replace(c, "");
			w = v.replace(d, "");
			a = Math.floor(y[i].dataset.duration / 60);
			b = y[i].dataset.duration - 60*a;
			if (a >= 10) {
    			a = a;
			}
			else{
			a = "[0"+ a;
			}
			if (b >= 10) {
    			b = b.toFixed(2);
			}
			else{
			b = "0"+ b.toFixed(2);
			}
			console.log(a + ":" + b + "]" + "\t" + w);
		}
}