const inputbtn = document.getElementById("logbtn");
const inputval1 = document.getElementById("user1");
const inputval2 = document.getElementById("pass1");

inputbtn.addEventListener("click", function(){
  const user = inputval1.value;
  const pass = inputval2.value;

  if (!user || !pass) {
    alert("Please enter both a username and a password.");
    return;
  }

  let list = JSON.parse(localStorage.getItem("users"))||[];
  let userfound = false;
  for (let i = 0; i < list.length; i ++) {
    if (user == list[i][0] && pass == list[i][1]){
        userfound = true;
        window.location.href = "http://127.0.0.1:5500/com.html"
        }
    }
  if (!userfound){
    alert("account doesnt exist")
  }


  


  

  
});