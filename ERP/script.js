document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");

  toggle?.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    main.classList.toggle("full");
  });

  document.querySelectorAll(".nav-group > .nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.classList.toggle("open");
    });
  });
});
