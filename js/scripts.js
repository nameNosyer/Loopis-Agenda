let form = document.getElementById("form");
let textInput = document.getElementById("textInput");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
  });

  let formValidation = () => {
    if (textInput.value === "") {
      console.log("failure");
      msg.innerHTML = "O titulo não poode ficar em branco";
    } else {
      console.log("success");
      msg.innerHTML = "";
    }
  };