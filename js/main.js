
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const navkey = document.getElementById("navkey");
  navkey.classList.toggle('in');
});