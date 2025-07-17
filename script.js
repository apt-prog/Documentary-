// Directory data example
const directory = [
  {
    name: "Portfolio WebSite",
    website: "https://fenil.justdigitalgurus.com/10-03-2025/Fenil%20Portfolio/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
    tags: ["HTML", "CSS", "JS", "Portfolio", "Animation"],
  },
  {
    name: "To-Do List App",
    website: "https://to-do-list-app-black-tau.vercel.app/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
    tags: ["JS" , "Logic"],
  },
  {
    name: "Text Counter App",
    website: "https://text-counter-app.vercel.app/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
    tags: ["JS" , , "Logic"],
  },
  {
    name: "Palindrom Checker",
    website: "https://palindrom-checker-app.vercel.app/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
    tags: ["JS", , "Logic"],
  },
  {
    name: "Odd Even Cheker",
    website: "https://odd-even-cheker-app.vercel.app/", 
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
    tags: ["JS", "Math"],
  },
  {
    name: "Car Single Page Site",
    website: "https://car-single-page-site.vercel.app/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
    tags: ["Single Page" , "Animation" , "React Js"],
  },
  {
    name: "Blog Management",
    website: "https://blogmanagment-fv.onrender.com/",
    linkedin: "https://www.linkedin.com/in/fenil-vegad-746016322/",
    github: "https://github.com/apt-prog",
    tags: ["Express JS" , "EJS" , "Server Side Rendering","MongoDB","Full Stack"],
  },
];

const tableBody = document.getElementById("directory-table");
const searchInput = document.getElementById("search");
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const languageSelect = document.getElementById("language-select");

function renderTable(filtered) {
  tableBody.innerHTML = "";
  filtered.forEach((entry, idx) => {
    const tr = document.createElement("tr");
    tr.className =
      "border-b border-black dark:border-white hover:bg-black/10 dark:hover:bg-white/10 transition rounded-xl shadow-sm";
    // Tooltip for all tags
    const tagsTooltip = entry.tags.join(", ");
    tr.innerHTML = `
      <td class=\"py-2 px-4 text-center align-middle\">${idx + 1}</td>
      <td class=\"py-2 px-4 text-center font-semibold align-middle\">
        <div class=\"flex items-center justify-center gap-2 flex-nowrap whitespace-nowrap\">
          <span>${entry.name}</span>
          <div class=\"relative group\">
            <button class='inline-block bg-royal/10 text-royal text-xs font-semibold px-2 py-1 rounded-full border border-royal hover:bg-royal/20 transition focus:outline-none'>Info</button>
            <div class=\"absolute right-full top-1/2 -translate-y-1/2 mr-2 z-10 opacity-0 group-hover:opacity-100 pointer-events-none bg-white text-royal border border-royal shadow-lg text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity duration-200 font-semibold\">
              ${tagsTooltip}
            </div>
          </div>
        </div>
      </td>
      <td class=\"py-2 px-4 flex gap-1 sm:gap-2 items-center justify-center text-center align-middle\">
        <a href=\"${
          entry.website
        }\" target=\"_blank\" title=\"Website\" class=\"transition-colors duration-700 transition-transform hover:scale-125 drop-shadow rounded-full p-1 sm:p-2 text-black dark:text-white\"><i class=\"fa-solid fa-globe fa-lg transition-colors duration-300 hover:text-royal\"></i></a>
        <a href=\"${
          entry.linkedin
        }\" target=\"_blank\" title=\"LinkedIn\" class=\"transition-colors duration-700 transition-transform hover:scale-125 drop-shadow rounded-full p-1 sm:p-2 text-black dark:text-white\"><i class=\"fa-brands fa-linkedin fa-lg transition-colors duration-300 hover:text-royal\"></i></a>
        <a href=\"${
          entry.github
        }\" target=\"_blank\" title=\"GitHub\" class=\"transition-colors duration-700 transition-transform hover:scale-125 drop-shadow rounded-full p-1 sm:p-2 text-black dark:text-white\"><i class=\"fa-brands fa-github fa-lg transition-colors duration-300 hover:text-royal\"></i></a>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

function getAllTags() {
  const tagSet = new Set();
  directory.forEach((entry) => entry.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

function populateLanguageSelect() {
  if (!languageSelect) return;
  const tags = getAllTags();
  languageSelect.innerHTML =
    '<option value="">All Languages</option>' +
    tags.map((tag) => `<option value="${tag}">${tag}</option>`).join("");
}

function filterDirectory() {
  const query = searchInput.value.toLowerCase();
  const selectedTag = languageSelect ? languageSelect.value : "";
  const filtered = directory.filter((entry) => {
    const matchesName = entry.name.toLowerCase().includes(query);
    const matchesTag = !selectedTag || entry.tags.includes(selectedTag);
    return matchesName && matchesTag;
  });
  renderTable(filtered);
}

if (languageSelect) {
  languageSelect.addEventListener("change", filterDirectory);
}
searchInput.addEventListener("input", filterDirectory);
document.addEventListener("DOMContentLoaded", () => {
  populateLanguageSelect();
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
