function addTask() {
  document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");

  const taskText = taskInput.value.trim();
  const dateTxt = dateInput.value.trim();

  // Validasi
  if (taskText === "" || !/^\d{2}\/\d{2}\/\d{4}$/.test(datetext)) {
    alert("isi sing bener cok");
    return;
  }
}

// !Add Task Button
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");
  const tableBody = document.getElementById("taskTableBody");
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === "") return;

  // !New Row
  const tr = document.createElement("tr");

  // !Sel Task
  const tdTask = document.createElement("td");
  tdTask.textContent = taskText;
  tr.appendChild(tdTask);

  // !Sel Date
  const tdDate = document.createElement("td");
  tdDate.textContent = taskDate;
  tr.appendChild(tdDate);

  // !Sel Status
  const tdStatus = document.createElement("td");
  tdStatus.textContent = "Pending";
  tr.appendChild(tdStatus);

  // !Sel Action
  const tdActions = document.createElement("td");
  tdActions.innerHTML =
    '<button onClick="this.parentElement.parentElement.remove()">Delete</button> <button onClick="toggleComplete(this)">Complete</button>';
  tdActions.innerHTML = `<button onClick="deleteTask(this)">Delete</button>
  <button onClick="completeTask(this)">Complete</button>`;
  tr.appendChild(tdActions)

  tableBody.appendChild(tr);

  // !Riset Input
  taskInput.value = "";
  dateInput.value = "";
}

// !Delete Task
// function untuk menghapus tr pada tabel
function deleteTask(button) {
  button.parentElement.parentElement.remove();
}

// !Complete Task
function completeTask(button) {
  // Mengubah status menjadi completed 
  const row = button.parentElement.parentElement;
  row.children[2].textContent = "Completed";
  row.classList.add("completed")
}

// !Filter Button
// Filter Tasks
function toggleFilter() {
  const dropbtn = document.getElementById("dropdownContent");
  dropbtn.style.display = dropbtn.style.display === "none" ? "block" : "none";
}

// Close dropdown jika klik diluar
function toggleDropdown() {
  const content = document.getElementById("dropdownContent");
  content.style.display = content.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
  }
};

// !Filter Tasks
function filterTasks(status) {
  const rows =document.querySelectorAll("#taskTableBody tr");
  rows.forEach(row => {
    const taskStatus = row.children[2].textContent;
    if (
      status === "all" || 
      (status === "pending" && taskStatus === "Pending") || 
      (status === "completed" && taskStatus === "Completed")
    ) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  })
}
// !Filter Button End

// !Delete All Tasks
function deleteAll() {
  const tableBody = document.getElementById("taskTableBody");
  tableBody.innerHTML = "";
}
// !Task Menu
// function
