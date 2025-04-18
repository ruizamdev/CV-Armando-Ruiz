const themeSelect = document.getElementById('themeSelect');
const themeLink = document.getElementById('theme-style');
const themeLabel = document.querySelector('.theme-select-label');

themeSelect.addEventListener('change', () => {
  const theme = themeSelect.value;
  themeLink.href = `themes/${theme}.css`;
});

if(window.innerWidth > 768) {
  themeLabel.innerHTML = "🎨 Tema:";
} else {
  themeLabel.innerHTML = "🎨";
}