document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  const plus = question.querySelector(".plus");
  question.addEventListener("click", () => {
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((open) => {
      open.classList.remove("open");
      open.querySelector(".plus").textContent = "+";
    });
    if (!wasOpen) {
      item.classList.add("open");
      plus.textContent = "−";
    }
  });
});
