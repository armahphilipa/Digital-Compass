// let users=null;
//   fetch('assets/user.json')
//   .then(response => response.json())
//   .then(data => {
//       users=data;
//       console.log(users);
//       loadLeaderboard(users);
      
//   });

// const leaderboardList = document.querySelector('.leaderboard-list');

// function loadLeaderboard(users) {
//     leaderboardList.innerHTML = '';
//     users.forEach((user) => {
//       const item = document.createElement('div');
//       item.classList.add('leaderboard-item');
//       item.innerHTML = `
//         <img src="${user.profile_img}" alt="${user.name}">
//         <div class="details">
//           <h3>${user.name}</h3>
//           <div>
//             <span class="hours">${user.learning_hours} hrs</span> | 
//             <span class="points">${user.points} XP</span>
//           </div>
//         </div>
//       `;
//       leaderboardList.appendChild(item);
//     });
// }

  
// function filterLeaderboard() {
//     const searchTerm = document.getElementById('search').value.toLowerCase();
//     const filterType = document.getElementById('filter').value;
//     const filteredData = users
//       .filter(user => user.name.toLowerCase().includes(searchTerm))
//       .sort((a, b) => {
//         if (filterType === 'hours') return b.learning_hours - a.learning_hours;
//         if (filterType === 'points') return b.points - a.points;
//         return 0;
//       });
//     displayFilteredData(filteredData);
// }
  
// function displayFilteredData(data) {
//     const leaderboardList = document.getElementById('leaderboard-list');
//     leaderboardList.innerHTML = '';
//     data.forEach((user) => {
//       const item = document.createElement('div');
//       item.classList.add('leaderboard-item');
//       item.innerHTML = `
//         <img src="${user.profile_img}" alt="${user.name}">
//         <div class="details">
//           <h3>${user.name}</h3>
//           <div>
//             <span class="hours">${user.learning_hours} hrs</span> | 
//             <span class="points">${user.points} XP</span>
//           </div>
//         </div>
//       `;
//       leaderboardList.appendChild(item);
//     });
// }
  
// // document.addEventListener('DOMContentLoaded', () => {
// //     loadLeaderboard();
// // });
  

let users = [];

// Fetch JSON data and initialize leaderboard
fetch('main/user.json')
  .then(response => response.json())
  .then(data => {
    users = data;
    loadLeaderboard(users); // Load leaderboard with fetched data
  })
  .catch(error => console.error('Error loading user data:', error));

// Populate leaderboard with user data
function loadLeaderboard(data) {
  const leaderboardList = document.getElementById('leaderboard-list');
  leaderboardList.innerHTML = '';
  data.forEach(user => {
    const item = document.createElement('div');
    item.classList.add('leaderboard-item');
    item.innerHTML = `
      <img src="${user.profile_img}" alt="${user.name}">
      <div class="details">
        <h3>${user.name}</h3>
        <div>
          <span class="hours">${user.learning_hours} hrs</span> | 
          <span class="points">${user.points} XP</span>
        </div>
      </div>
    `;
    leaderboardList.appendChild(item);
  });
}

// Filter and display leaderboard based on search and filter input
function filterLeaderboard() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const filterType = document.getElementById('filter').value;

  const filteredData = users
    .filter(user => user.name.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      if (filterType === 'hours') return b.learning_hours - a.learning_hours;
      if (filterType === 'points') return b.points - a.points;
      return 0;
    });

  loadLeaderboard(filteredData); // Display filtered data
}

// Event listeners for search and filter input
document.getElementById('search').addEventListener('input', filterLeaderboard);
document.getElementById('filter').addEventListener('change', filterLeaderboard);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

