setInterval(function(){spinss();},1000);
	var x = 0;
	function spinss() {
		x++;
		document.getElementById("displaynumber").innerHTML = x;
		if (x >= 1000000 ) {
			document.getElementById("nicetxt").innerHTML = "Only a 10^10^100 left!"
			document.getElementById("countertxt").innerHTML = "NO-LIFE-COUNTER"
		}else if (x >= 100000) {
			document.getElementById("nicetxt").innerHTML = "Just a few more now!"
			document.getElementById("countertxt").innerHTML = "Why are you still here Counter"
		}else if (x >= 10000) {
			document.getElementById("nicetxt").innerHTML = "Keep it up!"
		}else if (x >= 1000) {
			document.getElementById("nicetxt").innerHTML = "Almost there!"
		}else if (x >= 100) {
			document.getElementById("nicetxt").innerHTML = "Good Job!"
		}else if (x >= 10) {
			document.getElementById("nicetxt").innerHTML = "Nice one"
		}

	}
