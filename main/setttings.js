function saveProfile() {
    alert("Profile settings have been saved!");
}

function saveAccount() {
    alert("Account settings have been saved!");
}

function saveAppearance() {
    alert("Appearance settings have been saved!");
}

function changeTheme() {
    const theme = document.getElementById('theme').value;
    document.body.classList.toggle('dark-mode', theme === 'dark');
}
