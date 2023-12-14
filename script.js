function toggleDarkMode() {
    const darkMode = document.getElementById('dark-mode');
    const title = document.getElementById('title');
    const areaLight = document.getElementById('area-light');
    const areaDark = document.getElementById('area-dark');

    darkMode.style.backgroundColor = darkMode.classList.contains('none') ? '#9fe6ff' : '#212737';
    title.style.color = title.style.color === '#212737' ? '#ccddee' : '#212737';
    areaLight.classList.toggle('none');
    areaDark.classList.toggle('none');
}

document.getElementById('btn').addEventListener('click', toggleDarkMode);
document.getElementById('btn-dark').addEventListener('click', toggleDarkMode);