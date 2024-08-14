const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyCJy6StVZnNbd8mA0FPbCgL_3PsC0Ov3kM",
    authDomain: "bloggingweb-b540a.firebaseapp.com",
    databaseURL: "https://bloggingweb-b540a-default-rtdb.firebaseio.com",
    projectId: "bloggingweb-b540a",
    storageBucket: "bloggingweb-b540a.appspot.com",
    messagingSenderId: "616384260631",
    appId: "1:616384260631:web:29ab02bbc3f89ef6f68a52"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var bloggingWebDB = firebase.database().ref("bloggingWeb");
  
  document.getElementById("RegistrationForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var Username = getElementVal("Name");
    var Email = getElementVal("Email");
    var Password = getElementVal("Password");

    saveMessages(Username, Email, Password);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("RegistrationForm").reset();
  }
  
  const saveMessages = (Username, Email, Password) => {
    var newbloggingForm = bloggingWebDB.push();
  
    newbloggingForm.set({
      Username: Username,
      Email: Email,
      Password: Password,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  