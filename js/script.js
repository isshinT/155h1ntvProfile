document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggle-theme");
    button.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
    });
  
    // ページ読み込み時にモードを復元
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light-mode");
    }
  });
  