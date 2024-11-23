function login(){
    

    let inputName=document.getElementById("name").value.trim();
    let inputEmail=document.getElementById("email").value.trim();
    let inputPassword=document.getElementById("pass").value.trim();

    let UserName=localStorage.getItem("userName");
    let UserEmail=localStorage.getItem("email");
    let UserPassword=localStorage.getItem("password");

    if(UserName === inputName && UserEmail === inputEmail && UserPassword === inputPassword){
        alert("congratulation!!!!! you are LogIn Successfully..")
        localStorage.setItem("isLoggedIn",true)

      Window.location.href="output.txt"
    }
    else{
        alert("oops !!! invalid credintials")
        window.location.href="index.html"

    }
    inputName.value="";
    inputEmail.value=""
    inputPassword.value=""

}

