//SSN AutoTab
function autotab(current, to) {
	if (current.getAttribute &&
		current.value.length == current.getAttribute("maxlength")) {
		to.focus()
	}
}




//Change TextColor
function color() {
	var s1 = document.getElementById("email").value;
	var s2 = document.getElementById("name").value;
	var s3 = document.getElementById("date").value;
	var s4 = document.getElementById("address").value;
	var s5 = document.getElementById("tel").value;
	if (s1 == "" && s2 == "" && s4 == "" && s5 == "") {
		document.getElementById("label1").style.color = "red";
		document.getElementById("label2").style.color = "red";
		document.getElementById("label3").style.color = "red";
		document.getElementById("label4").style.color = "red";
		document.getElementById("label6").style.color = "red";
		document.getElementById("button").style.backgroundColor = "red";
		return false;
	}

	if (s1 == "") {
		document.getElementById("email-label").style.color = "red";
		return false;
	} else if (s2 == "") {
		document.getElementById("name-label").style.color = "red";
		return false;
	} else if (s3 == "") {
		document.getElementById("phone-label").style.color = "red";
		return false;
	} else if (s4 == "") {
		document.getElementById("address-label").style.color = "red";
		return false;
	} else if (s5 == "") {
		document.getElementById("date").style.color = "red";
		return false;
	}


}

//passWord
var check = function() {
  if (document.getElementById('password2').value ==
    document.getElementById('password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Not Matching';
  }
}







var check2 = function() {
	var myInput = document.getElementById("password");
  if(myInput.value.length >= 8){
    document.getElementById('message2').style.color = 'green';
    document.getElementById('message2').innerHTML = 'Good Length';
  } else {
    document.getElementById('message2').style.color = 'red';
    document.getElementById('message2').innerHTML = 'At least 8 or more characters';
  }

}
var check3 = function() {
	var myInput2 = document.getElementById("name");
  if(myInput2.value.match(/^[a-z0-9]+$/i)) {
    document.getElementById('message3').style.color = 'green';
    document.getElementById('message3').innerHTML = 'Good';
  } else {
    document.getElementById('message3').style.color = 'red';
    document.getElementById('message3').innerHTML = 'Must Be Alphanumeric';
  }

}

function upper(){
         var str = document.getElementById('name').value   
        document.getElementById('name').value = str.toUpperCase();
}


//submit action
function validateMyForm()
{
	var n;
	n = document.getElementById("name").value;
	var e;
	e = document.getElementById("email").value;
	var p 
	p = document.getElementById("password").value;
	var t 
	t = document.getElementById("tel").value;
  if(n == "" || e == "" || p =="" || t == "")
  { 
    alert("Not Completed");
   event.preventDefault();
    return false;
  }

  alert("validations passed");
  return true;
}





//save the data for next page
function save2(){
	sessionStorage.uname = document.getElementById('name').value;
     
}
function getStorage(){
	if(sessionStorage.uname){
		document.getElementById('span1').innerHTML=sessionStorage.uname;
	}
	
}

//drop and drag
function Drop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(evvent) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}


function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
        }





