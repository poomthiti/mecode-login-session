// window.fbAsyncInit = function() {
//   FB.init({
//     appId: "627611674314495",
//     cookie: true,
//     xfbml: true,
//     version: "v3.3"
//   });

//   FB.AppEvents.logPageView();

//     FB.Event.subscribe("auth.login", function() {
//       window.location.href = "acount.html";
//   //   });

//   FB.Event.subscribe("auth.logout", function() {
//     window.location.href = "login.html";
//   });

//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// };

// (function(d, s, id) {
//   let js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {
//     return;
//   }
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, "script", "facebook-jssdk");

// function statusChangeCallback(response) {
//   if (response.status === "connected") {
//     console.log("Logged in and authenticated");
//   } else {
//     console.log("Not authenticated");
//   }
// }

// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//     console.log(response);
//   });
// }

// const emailLoginFunc = () => {
//   console.log("////////EMAILLOGIN/////////////////");
//   const email = document.getElementById("emailInput");
//   const password = document.getElementById("emailPassword");
//   if (email.value === "mecode@asia.com" && password.value === "mecode") {
//     console.log("login////");
//     window.location.replace("/acount.html");
//   } else {
//     console.log("email or password is invalid.");
//   }
// };

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

document.addEventListener('DOMContentLoaded', () => {
  const isClear = getParameterByName("sessionStorage");
  sessionStorageClear(isClear);
});

const sessionStorageClear = (isClear) => {
  if (isClear === "clear") {
    sessionStorage.clear();
  } else {
    console.log("CANNOT CLEAR");
  }
};
