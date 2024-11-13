let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

document.addEventListener("DOMContentLoaded", () => {
  const webinarsList = document.querySelector(".webinars-list");
  if (!webinarsList) {
    console.error("Webinars list element not found");
  }
});
