var firstName = sessionStorage.getItem('firstName')
var lastName = sessionStorage.getItem('lastName')
var phoneNo = sessionStorage.getItem('phoneNo')

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("yourName").value = firstName + ' ' + lastName;
  document.getElementById("phoneNumber").value = phoneNo;
});