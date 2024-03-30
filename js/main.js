const password = document.getElementById("password");
password.addEventListener('input', ()=>{
	if(password.value.length < 4){
		password.style.borderBottom = "5px solid tomato"
	}else if(password.value.length >= 4 && password.value.length < 7){
		password.style.borderBottom = "5px solid yellow"
	}else if(password.value.length > 7 && password.value.length <= 10){
		password.style.borderBottom = "5px solid #38d39f"
	}
})
const inputs = document.querySelectorAll(".input");
function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}
function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});