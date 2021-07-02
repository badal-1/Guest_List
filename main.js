var guest = [];
var hu = [];
function Array_push() {
var a1 = document.getElementById("Storing_Function").value;
console.log(guest);
guest.push (a1);
document.getElementById("Array").innerHTML = guest;
}
function show(){  
for (var w = 0; w < guest.length; w++){
hu.push("<p>" + guest[w] + "</p>");
}
document.getElementById("g").innerHTML = hu;
}
function sorting() {
var hua = hu.sort();
document.getElementById("h").innerHTML= hua;
}
function searching() {
var s = document.getElementById("werty").value;
var fountr=0;
var k;
for (k=0; k<guest.length; k++){
if (s==guest[k])   {
fountr=fountr+1;
}                                                                                      
}
document.getElementById("ds").innerHTML="Name found " + fountr +" time/s";
}
