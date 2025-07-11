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

// // Function to add a new task
// function filterTask(status) {
//   const tasks = document.querySelectorAll(".task");
//   tasks.forEach((task) => {
//     if (status === "all") {
//       task.style.display = "block";
//     } else if (status === "pending" && !task.classList.contains("completed")) {
//       task.style.display = "block";
//     } else if (status === "completed" && task.classList.contains("completed")) {
//       task.style.display = "block";
//     } else {
//       task.style.display = "none";
//     }
//   });
// }
