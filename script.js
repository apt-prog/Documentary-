// Directory data example
const directory = [
  {
    name: "Portfolio WebSite",
    website: "https://fenil.justdigitalgurus.com/10-03-2025/Fenil%20Portfolio/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
  },
  {
    name:"To-Do List App",
    website:"https://to-do-list-app-black-tau.vercel.app/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
  },
  {
    name:"Text Counter App",
    website:"https://text-counter-app.vercel.app/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
  },
  {
    name:"Palindrom Checker",
    website:"https://palindrom-checker-app.vercel.app/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
  },
  {
    name:"Odd Even Cheker",
    website:"https://odd-even-cheker-app.vercel.app/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
  },
];

const tableBody = document.getElementById("directory-table");
const searchInput = document.getElementById("search");
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

function renderTable(filtered) {
  tableBody.innerHTML = "";
  filtered.forEach((entry, idx) => {
    const tr = document.createElement("tr");
    tr.className =
      "border-b border-blue hover:bg-blue/10 transition rounded-xl shadow-sm";
    tr.innerHTML = `
      <td class="py-2 px-4 text-center align-middle">${idx + 1}</td>
      <td class="py-2 px-4 text-center font-semibold align-middle">${
        entry.name
      }</td>
      <td class="py-2 px-4 flex gap-4 items-center justify-center text-center align-middle">
        <a href="${
          entry.website
        }" target="_blank" title="Website" class="hover:text-blue-600 transition-transform duration-200 hover:scale-125 drop-shadow"><i class="fa-solid fa-globe fa-lg"></i></a>
        <a href="${
          entry.linkedin
        }" target="_blank" title="LinkedIn" class="hover:text-blue-600 transition-transform duration-200 hover:scale-125 drop-shadow"><i class="fa-brands fa-linkedin fa-lg"></i></a>
        <a href="${
          entry.github
        }" target="_blank" title="GitHub" class="hover:text-blue-600 transition-transform duration-200 hover:scale-125 drop-shadow"><i class="fa-brands fa-github fa-lg"></i></a>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

function filterDirectory() {
  const query = searchInput.value.toLowerCase();
  const filtered = directory.filter((entry) =>
    entry.name.toLowerCase().includes(query)
  );
  renderTable(filtered);
}

searchInput.addEventListener("input", filterDirectory);
document.addEventListener("DOMContentLoaded", () => {
  renderTable(directory);
});

// Theme toggle logic
function setThemeIcon() {
  if (html.classList.contains("dark")) {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}
themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  setThemeIcon();
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  );
});
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}
setThemeIcon();
