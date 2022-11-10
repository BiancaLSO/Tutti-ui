import { useState } from "react";

export default function SignUp (){
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
// const [isMusician, setIsMusician] = useState(false);

function updateUsername(event){
    setUsername(event.target.value);
  
}

function updateEmail(event){
    setEmail(event.target.value);
}

function updatePassword(event){
    setPassword(event.target.value);
}

function updateConfirmPassword(event){
    setConfirmPassword(event.target.value);
}
// function updateIsMusician(event){
//     setIsMusician(event.target.value);
// }

    function handleSubmit() {
        fetch ("http://localhost:3000/signup", {
            method:"POST",
            body: JSON.stringify({
            username: username.body.value,
            email: email.body.value,
            password: password.body.value,
            confirmPassword: confirmPassword.body.value,
            // isMusician: isMusician,
           }),
       })
         .then((response) => response.json())
         .then((result) => {
           if(result.message === "SUCCESS"){
             alert("You are logged in.");
            //  this.goToMain();
            } else {
                alert("Please check your login information.");
            }
         });
    }

    return(
       <>
<form method="POST" action="http://localhost:3000/signup">
<label >
<input type = "text" placeholder="name" name = "username" value={username} onChange={updateUsername} />
</label>

<label >
<input type = "email" placeholder="email" name = "email" value={email} onChange={updateEmail}/>    
</label>

<label>
<input type = "password" placeholder="password" name = "password" value={password} onChange={updatePassword}/>    
</label>

<label>
<input type = "password" placeholder=" Confirm password" name = "confirmPassword" value={confirmPassword} onChange={updateConfirmPassword}/>    
</label>


{/* <label >
<input type = "text" placeholder="Are you a musician?" name = "isMusician" value={isMusician} onChange={updateIsMusician}/>    
</label> */}

<input type= "submit" onClick={handleSubmit} value = "Sign Up"/>

</form>

       </>
        

    );
}