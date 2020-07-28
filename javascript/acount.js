function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const firstName = getParameterByName("firstName");
const lastName = getParameterByName("lastName");
const userName = getParameterByName("userName");
const displayImg = getParameterByName("imgUrl");

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOMCONTENT//////////////");
  document.getElementById("firstNameDisplay").innerHTML = firstName;
  document.getElementById("lastNameDisplay").innerHTML = lastName;
  document.getElementById("userNameDisplay").innerHTML = userName;
  document.getElementById("firstNameForm").value = firstName;
  document.getElementById("lastNameForm").value = lastName;
  document.getElementById("displayImg").src = displayImg;
});

window.addEventListener("unload", event => {
  console.log("///////////UNLOADED//////////");
  const firstNameDisplay = document.getElementById("firstNameDisplay");
  const lastNameDisplay = document.getElementById("lastNameDisplay");
  const addressDisplay = document.getElementById("addressDisplay");
  const phoneNoDisplay = document.getElementById("phoneNoDisplay");
  const languageDisplay = document.getElementById("languageDisplay");
  const userNameDisplay = document.getElementById("userNameDisplay");
  const displayImg = document.getElementById("displayImg");
  sessionStorage.setItem("userName", userNameDisplay.innerHTML);
  sessionStorage.setItem("firstName", firstNameDisplay.innerHTML);
  sessionStorage.setItem("lastName", lastNameDisplay.innerHTML);
  sessionStorage.setItem("address", addressDisplay.innerHTML);
  sessionStorage.setItem("phoneNo", phoneNoDisplay.innerHTML);
  sessionStorage.setItem("language", languageDisplay.innerHTML);
  sessionStorage.setItem("displayImg", displayImg.src);
});

window.addEventListener("load", function(event) {
  console.log("///////////////LOAD////////////");
  const userNameDisplay = document.getElementById("userNameDisplay");
  const firstNameDisplay = document.getElementById("firstNameDisplay");
  const lastNameDisplay = document.getElementById("lastNameDisplay");
  const addressDisplay = document.getElementById("addressDisplay");
  const phoneNoDisplay = document.getElementById("phoneNoDisplay");
  const languageDisplay = document.getElementById("languageDisplay");
  const firstNameForm = document.getElementById("firstNameForm");
  const lastNameForm = document.getElementById("lastNameForm");
  const addressForm = document.getElementById("addressForm");
  const phoneNoForm = document.getElementById("phoneNoForm");
  const languageForm = document.getElementById("languageForm");
  const displayImg = document.getElementById("displayImg");
  sessionStorageDisplayWithForm("firstName", firstNameDisplay, firstNameForm);
  sessionStorageDisplayWithForm("lastName", lastNameDisplay, lastNameForm);
  sessionStorageDisplayWithForm("address", addressDisplay, addressForm);
  sessionStorageDisplayWithForm("phoneNo", phoneNoDisplay, phoneNoForm);
  sessionStorageDisplayWithForm("language", languageDisplay, languageForm);
  sessionStorageDisplay("userName", userNameDisplay);
  sessionStorageDisplayImg("displayImg", displayImg);
});

const sessionStorageDisplayImg = (objectKey, objectDisplay) => {
  if (sessionStorage.getItem(objectKey)) {
    objectDisplay["src"] = sessionStorage.getItem(objectKey);
  } else {
    console.log(`error with ${objectKey}`);
  }
};

const sessionStorageDisplay = (objectKey, objectDisplay) => {
  if (sessionStorage.getItem(objectKey)) {
    objectDisplay["innerHTML"] = sessionStorage.getItem(objectKey);
  } else {
    console.log(`error with ${objectKey}`);
  }
};

const sessionStorageDisplayWithForm = (
  objectKey,
  objectDisplay,
  objectForm
) => {
  if (sessionStorage.getItem(objectKey)) {
    const objectValue = sessionStorage.getItem(objectKey);
    objectDisplay["innerHTML"] = objectValue;
    objectForm["value"] = objectValue;
  } else {
    console.log(`error with ${objectKey} or ${objectForm}`);
  }
};

function firstNameEditFunc() {
  var firstNameEdit = document.getElementById("firstNameEdit");
  var firstNameUpdate = document.getElementById("firstNameUpdate");
  firstNameEdit.classList.add("d-none");
  firstNameUpdate.classList.remove("d-none");
}

function firstNameUpdateFunc() {
  var firstNameEdit = document.getElementById("firstNameEdit");
  var firstNameUpdate = document.getElementById("firstNameUpdate");
  var firstNameDisplay = document.getElementById("firstNameDisplay");
  var firstNameForm = document.getElementById("firstNameForm");
  firstNameUpdate.classList.add("d-none");
  firstNameEdit.classList.remove("d-none");
  var firstNameValue = firstNameForm.value;
  firstNameDisplay.innerHTML = firstNameValue;
}

const firstNameCancelFunc = () => {
  var firstNameEdit = document.getElementById("firstNameEdit");
  var firstNameUpdate = document.getElementById("firstNameUpdate");
  firstNameEdit.classList.remove("d-none");
  firstNameUpdate.classList.add("d-none");
};

function lastNameEditFunc() {
  var lastNameEdit = document.getElementById("lastNameEdit");
  var lastNameUpdate = document.getElementById("lastNameUpdate");
  lastNameEdit.classList.add("d-none");
  lastNameUpdate.classList.remove("d-none");
}

function lastNameUpdateFunc() {
  var lastNameEdit = document.getElementById("lastNameEdit");
  var lastNameUpdate = document.getElementById("lastNameUpdate");
  var lastNameDisplay = document.getElementById("lastNameDisplay");
  var lastNameForm = document.getElementById("lastNameForm");
  lastNameEdit.classList.remove("d-none");
  lastNameUpdate.classList.add("d-none");
  var lastNameValue = lastNameForm.value;
  lastNameDisplay.innerHTML = lastNameValue;
}

const lastNameCancelFunc = () => {
  var lastNameEdit = document.getElementById("lastNameEdit");
  var lastNameUpdate = document.getElementById("lastNameUpdate");
  lastNameEdit.classList.remove("d-none");
  lastNameUpdate.classList.add("d-none");
};

function addressEditFunc() {
  var addressEdit = document.getElementById("addressEdit");
  var addressUpdate = document.getElementById("addressUpdate");
  addressEdit.classList.add("d-none");
  addressUpdate.classList.remove("d-none");
}

function addressUpdateFunc() {
  var addressEdit = document.getElementById("addressEdit");
  var addressUpdate = document.getElementById("addressUpdate");
  var addressDisplay = document.getElementById("addressDisplay");
  var addressForm = document.getElementById("addressForm");
  addressEdit.classList.remove("d-none");
  addressUpdate.classList.add("d-none");
  var addressValue = addressForm.value;
  addressDisplay.innerHTML = addressValue;
}

const addressCancelFunc = () => {
  var addressEdit = document.getElementById("addressEdit");
  var addressUpdate = document.getElementById("addressUpdate");
  addressEdit.classList.remove("d-none");
  addressUpdate.classList.add("d-none");
};

function phoneNoEditFunc() {
  var phoneNoEdit = document.getElementById("phoneNoEdit");
  var phoneNoUpdate = document.getElementById("phoneNoUpdate");
  phoneNoEdit.classList.add("d-none");
  phoneNoUpdate.classList.remove("d-none");
}

function phoneNoUpdateFunc() {
  var phoneNoEdit = document.getElementById("phoneNoEdit");
  var phoneNoUpdate = document.getElementById("phoneNoUpdate");
  var phoneNoDisplay = document.getElementById("phoneNoDisplay");
  var phoneNoForm = document.getElementById("phoneNoForm");
  phoneNoEdit.classList.remove("d-none");
  phoneNoUpdate.classList.add("d-none");
  var phoneNoValue = phoneNoForm.value;
  phoneNoDisplay.innerHTML = phoneNoValue;
}

const phoneNoCancelFunc = () => {
  var phoneNoEdit = document.getElementById("phoneNoEdit");
  var phoneNoUpdate = document.getElementById("phoneNoUpdate");
  phoneNoEdit.classList.remove("d-none");
  phoneNoUpdate.classList.add("d-none");
};

function languageEditFunc() {
  var languageEdit = document.getElementById("languageEdit");
  var languageUpdate = document.getElementById("languageUpdate");
  languageEdit.classList.add("d-none");
  languageUpdate.classList.remove("d-none");
}

function languageUpdateFunc() {
  var languageEdit = document.getElementById("languageEdit");
  var languageUpdate = document.getElementById("languageUpdate");
  var languageDisplay = document.getElementById("languageDisplay");
  var languageForm = document.getElementById("languageForm");
  languageEdit.classList.remove("d-none");
  languageUpdate.classList.add("d-none");
  var languageValue = languageForm.value;
  languageDisplay.innerHTML = languageValue;
  sessionStorage.setItem("language", languageDisplay.innerHTML);
}

const languageCancelFunc = () => {
  var languageEdit = document.getElementById("languageEdit");
  var languageUpdate = document.getElementById("languageUpdate");
  languageEdit.classList.remove("d-none");
  languageUpdate.classList.add("d-none");
};

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const firstName = getParameterByName("firstName");
const lastName = getParameterByName("lastName");
const userName = getParameterByName("userName");

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("firstNameDisplay").innerHTML = firstName;
  document.getElementById("lastNameDisplay").innerHTML = lastName;
  document.getElementById("userNameDisplay").innerHTML = userName;
});

const firstNameEdit = document.getElementById("firstNameEdit");
const lastNameEdit = document.getElementById("lastNameEdit");
const addressEdit = document.getElementById("addressEdit");
const phoneNoEdit = document.getElementById("phoneNoEdit");
const languageEdit = document.getElementById("languageEdit");

function saveData () {
  var firstNameInput = firstNameForm.value
  var lastNameInput = lastNameForm.value
  var addressInput = addressForm.value
  var phoneNoInput = phoneNoForm.value
  var languageInput = languageForm.value
  sessionStorage.setItem('firstName', firstNameInput)
  sessionStorage.setItem('lastName', lastNameInput)
  sessionStorage.setItem('address', addressInput)
  sessionStorage.setItem('phoneNo', phoneNoInput)
  sessionStorage.setItem('language', languageInput)

  location.href = "index.html"
}
