let btn1 = document.getElementById("deleto");

btn1.addEventListener("click",function() {
    localStorage.clear()
    window.location.href = "http://127.0.0.1:5500/com.html"
      
})
