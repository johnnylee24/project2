//
//sessionStorage.setItem("Fname","Johnny");
//sessionStorage.setItem("Lname","Lee");
function save(){
	sessionStorage.uname = document.getElementById('email').value;
     
}
function getStorage(){
	if(sessionStorage.uname){
		document.getElementById('span1').innerHTML=sessionStorage.uname;
	}
	
}