var foldBtns = document.getElementsByClassName("fold-button");
for (var i = 0; i<foldBtns.length; i++){
 foldBtns[i].addEventListener("click", function(e) {
 elem = e.target.parentElement.parentElement.parentElement;
 if (elem.className == "one-post"){
	elem.children[0].children[1].innerHTML = "<h2>развернуть</h2>";
	elem.className = "one-post folded";
	return;
 }
 if (elem.className == "one-post folded"){
	 elem.children[0].children[1].innerHTML = "<h2>свернуть</h2>";
	elem.className = "one-post";
	return;
 }
});
}


