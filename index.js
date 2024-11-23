function validateData() {

  
    let userName = document.getElementById("userName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

     
    const namePattern = /^[a-zA-Z0-9]{3,9}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // let loggedIn=true
    if (!namePattern.test(userName)) {
      alert(" oops!! Invalid Username: Must be 3-9 characters, alphanumeric only.");
      return false;
      // loggedIn=false
      
    }

    if (!emailPattern.test(email)) {
      alert("oops!!  Invalid Email: Please enter a valid email address.");
      return false;
      // loggedIn=false

    }

    if (!passwordPattern.test(password)) {
      alert(" oops!! Invalid Password");
      return false;
      // loggedIn=false
      
    }

    else{
      window.localStorage.setItem("name",userName)
      window.localStorage.setItem("email",email)
      window.localStorage.setItem("password",password)
      alert("Yahh!!! signUp SuccessFully...")
      window.location.href="login.html"
    }

}