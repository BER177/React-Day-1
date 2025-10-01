
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Câu chào theo giờ
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) greeting.textContent = "Chào buổi sáng ☀️";
else if (hour < 18) greeting.textContent = "Chào buổi chiều 🌤️";
else greeting.textContent = "Chào buổi tối 🌙";

// Dark / Light theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

