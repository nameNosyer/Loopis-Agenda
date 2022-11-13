let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");


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
      acceptData();
      add.setAttribute("data-bs-dismiss", "modal");
      add.click();
      (() => {
        add.setAttribute("data-bs-dismiss", "");
      })();
    }
  };

 let data = {};

let acceptData = () => {
    data["text"]= textInput.value;
    data["date"]= dateInput.value;
    data["description"] = textarea.value;

    createTasks();
};

let createTasks = () => {
  tasks.innerHTML += `
    <div>
          <span class="fw-bold">${data.text}</span>
          <span class="small text-secondary">${data.date}</span>
          <p>${data.description}</p>
  
        </div>
    `;
    resetForm();
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};