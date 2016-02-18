"use strict";
function replaceMyInfo() {
    var info;
    info = document.getElementById("myself");
    info.innerHTML = "I am JaYmIn PaTeL, an International Student came from India, my hobbies are watch T-20 Cricket Match, Surffing Internat, in india  i completed M.C.A(Master of Computer Application)";
};
replaceMyInfo();

var button=document.getElementById("submit");

button.addEventListener("click",function() {
        console.log("clicked...");
});

function validateForm() 
			{
				var a = document.forms["contact"]["name"].value;
				var b = document.forms["contact"]["email"].value;
				var c = document.forms["contact"]["mobile"].value;
				var d = document.forms["contact"]["message"].value;

				if (a == null || a == "")
				{
					alert("Name must be filled out");
					return false;
				}
				else if(b == null || b == "")
				{
					alert("Email Address must be filled out");
					return false;
				}
				else if(c == null || c == "")
				{
					alert("Contact Number must be filled out");
					return false;
				}
				else if(d == null || d == "")
				{
					alert("Enter your Message, Query, Comments ");
					return false;
				}
			}
