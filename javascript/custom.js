console.log("heyoooooo");

let menu = document.querySelector(".mobile_menu_overlay");
let modal = document.querySelector(".thatgoddamnmodaliforgotabout");
let closemodal = document.querySelector("#closemodal");


function display_menu(){
	menu.classList.remove("slideout");
	menu.style.display = "block";
	menu.classList.add("slidein");
}

function close_menu(){
	menu.classList.remove("slidein");
	menu.classList.add("slideout");
}

window.onscroll = function() {modalpopup()};

function modalpopup(){
	if(document.body.scrollTop > 550 || document.documentElement.scrollTop > 550){
		modal.style.visibility = "visible";
		modal.classList.add("fadein");
	}
}

function close_modal(){
	modal.style.display = "none";
}