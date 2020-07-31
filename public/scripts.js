// Toggle Dark Theme
var d = document.documentElement,
  t = document.querySelector('#btn'),
  m = localStorage.getItem('theme');

if (m == 'dark') {
  d.classList.add('theme-dark');
  t.textContent = "Switch to light"
}else{
  t.textContent = "Switch to dark"
}

t.addEventListener('click', function () {
  if (d.classList.contains('theme-dark')) {
    d.classList.remove('theme-dark');
    localStorage.removeItem('theme');
    t.textContent = "Switch to dark"
  } else {
    d.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
    t.textContent = "Switch to light"
  }
});
