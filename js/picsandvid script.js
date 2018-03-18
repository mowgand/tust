
function attacheventlisteners(){
	var vidlist = document.getElementsByClassName("vid");
	var overlaylist = document.getElementsByClassName("video-overlay");
	for(var i = 0; i < vidlist.length; i++){
		vidlist[i].preload = "none";
		var eye = i;
		//vidlist[i].controls = true;	
		vidlist[i].onabort = function() {
			//alert("Video load aborted");
			console.log("Video load aborted");
		};
		vidlist[i].onerror = function() {
			//alert("Video error");
			console.log("Video error");
		};
		vidlist[i].onclick = function (){
			//pausplay(this);
			//var eye = i;
			this.play();
			this.loop = true;
			//alert(overlaylist[i].innerHTML);
			//document.getElementById('body').style.display = "none";
			//alert(eye);
		}
		vidlist[i].onmouseout = function (){
			//pausplay(this);
			this.loop = false;
		}
	}

	delay(document.getElementById("slider"), function() {
		//var slider = document.getElementsByClassName("slider");
		var slider = document.getElementById("slider");
		var mapmap = document.getElementById("map");
		var wid = slider.offsetWidth;//.style.width;
		var all = $(window).width();
		pcent = wid / all;
		//alert(pcent);
		if (pcent < 0.5) {
			slider.style.width = "75%";
			slider.style.height = "75%";
			//mapmap.style.width = "100%";
			//mapmap.style.height = "100%";
			//alert("derp")
			initMap(); //need to load map again due to the resize for some reason?
		} //else {
		//	slider.style.width = "25%";
		//	slider.style.height = "25%";
			//mapmap.style.width = "100%";
			//mapmap.style.height = "100%";
		//	//alert("derp")
		//	initMap(); //need to load map again due to the resize for some reason?
		//}
	});
	
	delay(document.getElementById("main"), function() {
		var slider = document.getElementById("slider");
		var mapmap = document.getElementById("map");
		var wid = slider.offsetWidth;//.style.width;
		var all = $(window).width();
		pcent = wid / all;
		if (pcent > 0.5) {
			slider.style.width = "25%";
			slider.style.height = "25%";
			initMap(); //need to load map again due to the resize for some reason?
			
		}
	});
		
};

	var delay = function (elem, callback) {
		var timeout = null;
		elem.onmousedown = function() {
			// Set timeout to be a timer which will invoke callback after 1s
			timeout = setTimeout(callback, 500);
		};
		elem.onmouseout = function() {
			// Clear any timers set to timeout
			clearTimeout(timeout);
		};
	};

	
var videos = document.getElementsByTagName("video");

function checkScroll() {
    //for(var i = 0; i < videos.length; i++) {
	for(var i = 0; i < 3; i++) {
        var video = videos[i];
        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, b = y + h, //bottom
         visibleY, visible;
        //visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        var visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
        var visible = visibleY / h;
		
		//alert(isScrolledIntoView(video))
		//alert(video.currentSrc)
		isScrolledIntoView(video)
		
            if (visible > 0.7) {
                //video.play();
				//vidlist[i].preload = "auto";
				//alert(video.currentSrc +" visible" + video.offsetTop +", "+ video.offsetWidth +", "+ video.offsetHeight)
				if (video.readyState !== 4){
					if (video.preload = "none"){
						video.load();
						video.preload = "auto"
						
					}
				}
            } else {
                video.pause();
				//alert(video.currentSrc +", " + video.offsetTop +", "+ video.offsetWidth +", "+ video.offsetHeight)
				//vidlist[i].preload = "none";
            }
    }
}

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;
	//alert(elemTop +", "+ elemBottom)
	//alert("ok")
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);	


function gettext(){
//$(document).load(function(){
		$.ajax({
			url: "/america/the_stuff/20th.txt",
			dataType: 'text',
			success: function(result){
				result = result.replace(/\n/g, '<br />');
				result = result.replace(/"/g, "\\'");
				$("#20th").html(result);
			}			
		});
		$.ajax({
			url: "/america/the_stuff/21st.txt",
			dataType: 'text',
			success: function(result){
				result = result.replace(/\n/g, '<br />');
				result = result.replace(/"/g, "\\'");
				$("#21st").html(result);
			}
		});
		$.ajax({
			url: "/america/the_stuff/22nd.txt",
			dataType: 'text',
			success: function(result){
				result = result.replace(/\n/g, '<br />');
				result = result.replace(/"/g, "\\'");
				$("#22nd").html(result);
			}
		});
		$.ajax({
			url: "/america/the_stuff/23rd.txt",
			dataType: 'text',
			success: function(result){
				result = result.replace(/\n/g, '<br />');
				result = result.replace(/"/g, "\\'");
				$("#23rd").html(result);
			}
		});
		$.ajax({
			url: "/america/the_stuff/24th.txt",
			dataType: 'text',
			success: function(result){
				result = result.replace(/\n/g, '<br />');
				result = result.replace(/"/g, "\\'");
				$("#24th").html(result);
			}
		});
		$.ajax({
			url: "/america/the_stuff/25th.txt",
			dataType: 'text',
			success: function(result){
				result = result.replace(/\n/g, '<br />');
				result = result.replace(/"/g, "\\'");
				$("#25th").html(result);
			}
		});
		$.ajax({
			url: "/america/the_stuff/26th.txt",
			dataType: 'text',
			success: function(result){
				result = result.replace(/\n/g, '<br />');
				result = result.replace(/"/g, "\\'");
				$("#26th").html(result);
			}
		});
		$.ajax({
			url: "/america/the_stuff/27th.txt",
			dataType: 'text',
			success: function(result){
				result = result.replace(/\n/g, '<br />');
				result = result.replace(/"/g, "\\'");
				$("#27th").html(result);
			}
		});
		$.ajax({
			url: "/america/the_stuff/28th.txt",
			dataType: 'text',
			success: function(result){
				result = result.replace(/\n/g, '<br />');
				result = result.replace(/"/g, "\\'");
				$("#28th").html(result);
			}
		});
		$.ajax({
			url: "/america/the_stuff/29th.txt",
			dataType: 'text',
			success: function(result){
				result = result.replace(/\n/g, '<br />');
				result = result.replace(/"/g, "\\'");
				$("#29th").html(result);
			}
		});
//});
}

gettext();



