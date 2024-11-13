let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}
// Data for recently enrolled courses
const recentCourses = [
  {
    title: "JavaScript Fundamentals",
    facilitator: "John Doe",
    progress: 75,
  },
  {
    title: "Advanced CSS Techniques",
    facilitator: "Jane Smith",
    progress: 50,
  },
  {
    title: "React Development",
    facilitator: "Emily Davis",
    progress: 30,
  },
  {
    title: "Data Structures and Algorithms",
    facilitator: "Michael Johnson",
    progress: 90,
  },
];

// Function to render the courses
function renderRecentCourses() {
  const coursesContainer = document.getElementById("recent-courses");
  coursesContainer.innerHTML = "";

  recentCourses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");

    const title = document.createElement("div");
    title.classList.add("course-title");
    title.textContent = course.title;

    const facilitator = document.createElement("div");
    facilitator.classList.add("facilitator-name");
    facilitator.textContent = `Facilitator: ${course.facilitator}`;

    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    const progressFill = document.createElement("div");
    progressFill.classList.add("progress-fill");
    progressFill.style.width = `${course.progress}%`;

    const progressText = document.createElement("span");
    progressText.classList.add("progress-text");
    progressText.textContent = `${course.progress}%`;

    progressBar.appendChild(progressFill);
    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(progressText);

    courseCard.appendChild(title);
    courseCard.appendChild(facilitator);
    courseCard.appendChild(progressContainer);

    coursesContainer.appendChild(courseCard);
  });
}

// Initialize the courses display
document.addEventListener("DOMContentLoaded", renderRecentCourses);
