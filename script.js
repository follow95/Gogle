function auth() { 
        event.preventDefault(); 
        var email1 = document.getElementById("email1").value; var password1 = document.getElementById("password1").value;
         if (email1 === "admin5025@gmail.com" && password1 === "kilometer") { 
         window.location.replace("index2.html"); 
         } else { 
         alert("Invalid information"); 
         return;
    
     } 
         
  } 
