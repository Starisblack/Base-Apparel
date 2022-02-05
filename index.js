document.querySelector(".arrow-icon").addEventListener("click", function() {
  var emailInput = document.querySelector(".email-address");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailInput.value.match(mailformat)) {
    alert("subscribed successfully");
    document.querySelector(".error-msg").style.display = "none";
    document.querySelector(".error-mark").style.display = "none";
  } else {
    document.querySelector(".error-msg").style.display = "block";
    document.querySelector(".error-mark").style.display = "block";
  }
});
