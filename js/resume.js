var root=document.getElementById("main");

var sec=document.createElement("section");
sec.classList.add("section");
root.appendChild(sec);

// create of card 
var div1=document.createElement("div");
div1.classList.add("text-center");
div1.classList.add("div");
div1.classList.add("bg-warning");
sec.appendChild(div1);


var image=document.createElement("img");
image.src="images/man.png";
image.alt="profile pic";
image.classList.add("img");
div1.appendChild(image);

var title=document.createElement("h2");
title.textContent="Nasarvali Shaik";
title.classList.add("card-title");
div1.appendChild(title);

var email=document.createElement("p");
email.textContent="xyz@gmail.com";
email.classList.add("card-text");
div1.appendChild(email);

var link=document.createElement("a");
link.textContent="Mobile:123456789";
link.classList.add("card-text");
div1.appendChild(link);

//creation of resume

var div2=document.createElement("div");
div2.classList.add("div2");
div2.classList.add("bg-warning");
sec.appendChild(div2);

var heading1=document.createElement("h1");
heading1.textContent="Career Objective";
div2.appendChild(heading1);


var para1=document.createElement("p");
para1.textContent="To work in an environment where I can utilize my skills.";
div2.appendChild(para1);

var line=document.createElement("hr");
div2.appendChild(line);

var heading2=document.createElement("h2");
heading2.textContent="Education Details";
div2.appendChild(heading2);

var tab=document.createElement("table");
div2.appendChild(tab);
 
var tr1=document.createElement("tr");
div2.appendChild(tr1);

var th1=document.createElement("th");
th1.textContent="S.No";
div2.appendChild(th1);

var text=document.createElement("th");
text.textContent="Name";
div2.appendChild(text);

var th2=document.createElement("th");
th2.textContent="Institute";
div2.appendChild(th2);

var th3=document.createElement("th");
th3.textContent="Course";
div2.appendChild(th3);

var th4=document.createElement("th");
th4.textContent="Marks/CGPA";
div2.appendChild(th4);


var tr2=document.createElement("tr");
div2.appendChild(tr2);

var td1=document.createElement("td");
td1.textContent="1";
div2.appendChild(td1);

var tname=document.createElement("td");
tname.textContent="Nasarvali";
div2.appendChild(tname);

var td2=document.createElement("td");
td2.textContent="Eswar College of Engineering";
div2.appendChild(td2);

var td3=document.createElement("td");
td3.textContent="EEE";
div2.appendChild(td3);

var td4=document.createElement("td");
td4.textContent="79.15%";
div2.appendChild(td4);


var tr3=document.createElement("tr");
div2.appendChild(tr3);

var td5=document.createElement("td");
td5.textContent="2";
div2.appendChild(td5);

var tname2=document.createElement("td");
tname2.textContent="Sai Krishna";
div2.appendChild(tname2);

var td6=document.createElement("td");
td6.textContent="Eswar College of Engineering";
div2.appendChild(td6);

var td7=document.createElement("td");
td7.textContent="ECE";
div2.appendChild(td7);

var td8=document.createElement("td");
td8.textContent="90.15%";
div2.appendChild(td8);

var heading3=document.createElement("h2");
heading3.textContent="Skills";
div2.appendChild(heading3);

var ul1=document.createElement("ul");
div2.appendChild(ul1);

var li1=document.createElement("li");
li1.textContent="ANGULAR-8";
div2.appendChild(li1);

var li2=document.createElement("li");
li2.textContent="REACTJS";
div2.appendChild(li2);

var li3=document.createElement("li");
li3.textContent="YARN";
div2.appendChild(li3);

var heading4=document.createElement("h2");
heading4.textContent="Hobbies";
div2.appendChild(heading4);

var ul2=document.createElement("ul");
div2.appendChild(ul2);

var li4=document.createElement("li");
li4.textContent="Reading Books";
div2.appendChild(li4);

var li5=document.createElement("li");
li5.textContent="Playing Games";
div2.appendChild(li5);

var heading5=document.createElement("h2");
heading5.textContent="Declaration";
div2.appendChild(heading5);

var lastpara=document.createElement("p");
lastpara.textContent="I here declared that above information is correct and hope you reply soon.";
div2.appendChild(lastpara);