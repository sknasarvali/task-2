var root=document.getElementById("main");
root.classList.add("col-xl-3");
root.classList.add("col-md-3");
root.classList.add("col-sm-3");
root.classList.add("card");
root.classList.add("mt-5");
root.classList.add("bg-warning");


var div=document.createElement("div");
div.classList.add("text-center");
root.appendChild(div);


var image=document.createElement("img");
image.src="images/man.png";
image.alt="profile pic";
image.classList.add("image");
div.appendChild(image);

var title=document.createElement("h2");
title.textContent="Nasarvali Shaik";
title.classList.add("card-title");
div.appendChild(title);

var email=document.createElement("p");
email.textContent="xyz@gmail.com";
email.classList.add("card-text");
div.appendChild(email);

var link=document.createElement("a");
link.textContent="View Profile";
link.href="resume.html";
link.classList.add("card-text");
link.classList.add("a");
div.appendChild(link);