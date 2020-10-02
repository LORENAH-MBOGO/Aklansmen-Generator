$(document).ready(function(){
    $("#myBirthDate").mask("MM/DD/YYYY");
});


function getAkanName(){
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var myBirthday = document.getElementById("myBirthDate").value;
    var myGender = document.getElementsByName("gender");
    var dateOfBirth = new Date(myBirthday);
    var dayOfTheWeek = dateOfBirth.getDay();
            if(myGender[i].checked){
                if(myGender[i].value === "Male"){
                    document.getElementById('message').innerHTML =  "Hello Aklansman! You were born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name is <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                    
                }
                else {
                    document.getElementById('message').innerHTML = "Hello Aklansman! You were born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name is <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                    
                }
               
            }
        }

function cancel(){
    document.getElementById('message').innerHTML = "";
}
