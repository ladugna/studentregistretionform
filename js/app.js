/**
 * census.js
 */
 "use strict";

 function display () {

    var result = "";
    var Fullname="Applicant's fullname: " + document.getElementById("first_name").value +  document.getElementById("middle_initials").value + "" +document.getElementById("last_name").value+"\n";
    var Addres = "Address: " + document.getElementById("inputAddress").value + "\n";
    var ApplID = "Applicant Id: " + document.getElementById("std_id").value +"\n";
   
    var level = ""
    

    

    result =  Fullname + Addres+ ApplID;
    alert(result);

}

var btn = document.getElementById("student_registration_form")
btn.onsubmit = display;