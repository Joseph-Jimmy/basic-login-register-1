const inputbtn1 = document.getElementById("login");
const inputbtn2 = document.getElementById("reg");
const inputbtn3 = document.getElementById("regbtn");
const inputval1 = document.getElementById("user");
const inputval2 = document.getElementById("pass");
const inputvalu1 = document.getElementById("user1");
const inputvalu2 = document.getElementById("pass1");
const log2 = document.getElementById("logbtn");






inputbtn3.addEventListener("click", function () {
    const user = inputval1.value
    const password = inputval2.value
    if(!password||!user){
        alert("please add user/pass");
        return
    }

        let list = JSON.parse(localStorage.getItem("users")) || [];//JSON.parse basically returns the values as list containing the elements and this is inside a big list and one more thing ||(or function basically goes to the second condition only if the first condition null or false and the && function only moves to the second condition only if the first condition is true)
        for (u of list){ //this like i in  like python
            if(user === u[0]){
                alert("this username has already been used")
                return // this basically exits from the whole function preventing this value from being saved
            }
            
        }


        list.push([user, password]);
        localStorage.setItem("users", JSON.stringify(list));
        inputval1.value = '';
        inputval2.value = '';
        window.location.href = "http://127.0.0.1:5500/com.html"

});

function back(){
    window.location.href = "http://127.0.0.1:5500/com.html"
}