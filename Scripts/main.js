"use strict";

(function () {

    if (document.getElementById("aboutme") != null) {
        console.log("About Page");
    } 
    else if (document.getElementById("project") != null) {
        console.log("Project Page");
    } 
    else if (document.getElementById("index") != null) {
        console.log("Index Page");
     }
    else if (document.getElementById("contactme") != null) {
        console.log("Contact Page");
        //declare variables and create a reference to form elements
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var mobile = document.getElementById("mobile");
        var message = document.getElementById("message");
        var submitButton = document.getElementById("submit");
        submitButton.pre


        submitButton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Name: " + name.value);
            console.log("Email: " + email.value);
            console.log("Contact No: " + mobile.value);
            console.log("Query: " + message.value);
        });


    } // end else if

    
})();

function replaceMyInfo() {
    var myself;
    myself = document.getElementById("myself");
    myself.innerHTML = "I am JaYmIn PaTeL, an International Student came from India, my hobbies are watch T-20 Cricket Match, Surffing Internat, in india  i completed M.C.A(Master of Computer Application)";
};
replaceMyInfo()

function validateForm() {
				var a = document.forms["contact"]["name"].value;
				var b = document.forms["contact"]["email"].value;
				var c = document.forms["contact"]["mobile"].value;
				var d = document.forms["contact"]["message"].value;

				if (a == null || a == "") {
        alert("Name must be filled out");
        return false;
				}
				else if (b == null || b == "") {
        alert("Email Address must be filled out");
        return false;
				}
				else if (c == null || c == "") {
        alert("Contact Number must be filled out");
        return false;
				}
				else if (d == null || d == "") {
        alert("Enter your Message, Query, Comments ");
        return false;
				}
}
