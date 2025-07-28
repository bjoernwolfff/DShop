const hash = window.location.hash.substring(1);
loadCategory(hash);

function loadCategory(hash) {
  const categories = document.querySelectorAll(".category");
  categories.forEach(cat => cat.style.display = "none");

  if (hash) {
    const target = document.getElementById(hash);
    if (target) {
      target.style.display = "block";
    }
  }
}
