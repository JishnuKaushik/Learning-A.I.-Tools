document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((open) => open.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  });
});
