
var form = document.getElementById("form");

form.addEventListener("submit", checkID);

function checkID() {
    var fullname = document.getElementById("fullname").value;
    document.getElementById("result").innerHTML = fullname;

}
