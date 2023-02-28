const data =
    {
name:String,
email:String,
password:String,
cpassword:String,
    }
function data1 (){
const fname1 = document.getElementById("fname").value
const lname1 = document.getElementById("lname").value
const email = document.getElementById("email").value
const contact = document.getElementById("contact").value
const url1 = document.getElementById("url1").value
const url2 = document.getElementById("url2").value
const password = document.getElementById("password").value
const cpassword = document.getElementById("cpassword").value
 
 if (password===cpassword) {
    document.getElementById("name").innerHTML=fname1+" "+lname1
    document.getElementById("email-1").innerHTML=email
    document.getElementById("url-1").innerHTML=url1
    document.getElementById("url-2").innerHTML=url2
    document.getElementById("password-1").innerHTML=cpassword
    
    // console.log(fname1,lname1,email,contact,url1,url2,password,cpassword)
    
}else{
    window.alert("please re-enter th epassword")
}
}
 function handleSubmit(event) {
    event.preventDefault();
    data1();
   // document.getElementById("myForm").reset();
  }