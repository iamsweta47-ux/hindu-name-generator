/* ==========================================================================
   Hindu Name Generator — app.js
   Tab switching, name generation, couple combiner, copy-to-clipboard, FAQ
   ========================================================================== */

/* ---------------------------------------------------------------------- */
/* Name data                                                               */
/* ---------------------------------------------------------------------- */

const BOY_NAMES = [
  { name: "Aarav", meaning: "Peaceful, wise" },
  { name: "Vihaan", meaning: "Dawn, morning" },
  { name: "Advait", meaning: "Unique, one without a second" },
  { name: "Reyansh", meaning: "Ray of light, part of the sun" },
  { name: "Aditya", meaning: "The sun" },
  { name: "Arjun", meaning: "Bright, shining, warrior prince" },
  { name: "Krishna", meaning: "Dark, all-attractive; the divine" },
  { name: "Rohan", meaning: "Ascending, one who grows" },
  { name: "Kabir", meaning: "Great, noble spirit" },
  { name: "Dhruv", meaning: "The pole star, unshakeable" },
  { name: "Ishaan", meaning: "The sun, lord of direction" },
  { name: "Yash", meaning: "Fame, glory" },
  { name: "Vivaan", meaning: "Full of life, radiant" },
  { name: "Sai", meaning: "Divine, the auspicious one" },
  { name: "Aryan", meaning: "Noble, of honourable descent" },
  { name: "Karan", meaning: "Ears; a great warrior of the Mahabharata" },
  { name: "Rudra", meaning: "Fierce, a form of Lord Shiva" },
  { name: "Shiv", meaning: "Auspicious, the benevolent one" },
  { name: "Vedant", meaning: "End of the Vedas, ultimate knowledge" },
  { name: "Kartik", meaning: "Son of Shiva, god of war" },
  { name: "Laksh", meaning: "Aim, goal" },
  { name: "Samar", meaning: "Battle, one who is ready" },
  { name: "Veer", meaning: "Brave, courageous" },
  { name: "Yuvraj", meaning: "Prince, heir" },
  { name: "Tejas", meaning: "Brilliance, radiance" },
  { name: "Om", meaning: "The sacred, primordial sound" },
  { name: "Mohan", meaning: "Enchanting; a name of Krishna" },
  { name: "Raj", meaning: "King, rule" },
  { name: "Ansh", meaning: "Part or portion of the divine" },
  { name: "Harsh", meaning: "Happiness, joy" },
  { name: "Nikhil", meaning: "Whole, entire" },
  { name: "Devansh", meaning: "Part of God" },
  { name: "Pranav", meaning: "The sacred syllable Om" },
  { name: "Ayaan", meaning: "Gift of God, gracious" },
  { name: "Ravi", meaning: "The sun" },
  { name: "Aakash", meaning: "Sky" },
  { name: "Vikram", meaning: "Valorous, courageous" },
  { name: "Manav", meaning: "Human, mankind" },
  { name: "Sarthak", meaning: "Meaningful, worthwhile" },
  { name: "Vansh", meaning: "Lineage, descendant" },
  { name: "Arnav", meaning: "Ocean, sea" },
  { name: "Ishan", meaning: "Direction; another name for Lord Shiva" },
  { name: "Atharv", meaning: "Knowledge, wisdom of the Vedas" },
  { name: "Gautam", meaning: "Name of the Buddha; brightest of the earth" },
  { name: "Nirvaan", meaning: "Enlightenment, liberation" },
  { name: "Parth", meaning: "Another name for Arjuna" },
  { name: "Shaurya", meaning: "Bravery, valor" },
  { name: "Uday", meaning: "Sunrise, rising" },
  { name: "Jai", meaning: "Victory" },
  { name: "Naman", meaning: "Salutation, respect" },
  { name: "Chirag", meaning: "Lamp, light" },
  { name: "Kunal", meaning: "Lotus" },
  { name: "Rishabh", meaning: "The best, a bull" },
  { name: "Siddharth", meaning: "One who has attained his goal" },
  { name: "Varun", meaning: "The Vedic lord of water and sky" },
  { name: "Vinay", meaning: "Humility, discipline" },
  { name: "Yashraj", meaning: "King of fame" },
  { name: "Aarush", meaning: "First ray of the sun" },
  { name: "Advik", meaning: "Unique, unparalleled" },
  { name: "Agastya", meaning: "Name of a revered Vedic sage" },
  { name: "Akshay", meaning: "Immortal, indestructible" },
  { name: "Amrit", meaning: "Nectar of immortality" },
  { name: "Anay", meaning: "Leader, one who guides" },
  { name: "Chetan", meaning: "Consciousness, spirit" },
  { name: "Darsh", meaning: "Vision, sight" },
  { name: "Eshan", meaning: "Wish, desire; a name of Shiva" },
  { name: "Girish", meaning: "Lord of the mountains, Shiva" },
  { name: "Harish", meaning: "Lord Vishnu" },
  { name: "Indra", meaning: "King of the gods" },
  { name: "Jatin", meaning: "Ascetic, one with matted hair" },
  { name: "Kush", meaning: "Son of Lord Rama" },
  { name: "Lakshya", meaning: "Aim, target" },
  { name: "Madhav", meaning: "Sweet as honey; a name of Krishna" },
  { name: "Nakul", meaning: "One of the five Pandava brothers" },
  { name: "Omkar", meaning: "The sound and form of Om" },
  { name: "Pavan", meaning: "Wind; the god of wind" },
  { name: "Rajat", meaning: "Silver" },
  { name: "Sameer", meaning: "Gentle breeze" },
  { name: "Tanish", meaning: "Ambition, aspiration" },
  { name: "Utkarsh", meaning: "Excellence, progress" },
  { name: "Yug", meaning: "Era, epoch" },
  { name: "Bhavesh", meaning: "Lord of existence" },
  { name: "Charan", meaning: "Feet, one who is devoted" },
  { name: "Dev", meaning: "God, divine being" },
  { name: "Farhan", meaning: "Happy, joyful (used across communities)" },
  { name: "Girdhar", meaning: "One who holds the mountain; Krishna" },
  { name: "Hridaan", meaning: "Heart, giver of the heart" }
];

const GIRL_NAMES = [
  { name: "Aanya", meaning: "Grace, inexhaustible" },
  { name: "Ira", meaning: "Earth; goddess of speech" },
  { name: "Diya", meaning: "Lamp, light" },
  { name: "Myra", meaning: "Wonderful, admirable" },
  { name: "Saanvi", meaning: "Goddess Lakshmi" },
  { name: "Anaya", meaning: "Caring, compassionate" },
  { name: "Aadhya", meaning: "First power; another name for Durga" },
  { name: "Kiara", meaning: "Dark-haired; beam of light" },
  { name: "Pari", meaning: "Angel, fairy" },
  { name: "Navya", meaning: "New, youthful" },
  { name: "Riya", meaning: "Singer; graceful" },
  { name: "Ananya", meaning: "Unique, matchless" },
  { name: "Ishita", meaning: "Desired, one who is admired" },
  { name: "Sara", meaning: "Pure, princess" },
  { name: "Meera", meaning: "Devotee of Krishna; ocean" },
  { name: "Kavya", meaning: "Poetry" },
  { name: "Trisha", meaning: "Desire, thirst for knowledge" },
  { name: "Anika", meaning: "Graceful, sweet-faced" },
  { name: "Nitya", meaning: "Eternal, constant" },
  { name: "Divya", meaning: "Divine, heavenly" },
  { name: "Tanvi", meaning: "Beautiful, delicate" },
  { name: "Shreya", meaning: "Auspicious, fortunate" },
  { name: "Aditi", meaning: "Boundless; mother of the gods" },
  { name: "Priya", meaning: "Beloved" },
  { name: "Radha", meaning: "Beloved of Krishna; success" },
  { name: "Sita", meaning: "Furrow; the divine Goddess Sita" },
  { name: "Gauri", meaning: "Fair one; a name of Parvati" },
  { name: "Lakshmi", meaning: "Goddess of wealth and prosperity" },
  { name: "Parvati", meaning: "Daughter of the mountains" },
  { name: "Kavita", meaning: "A poem" },
  { name: "Rani", meaning: "Queen" },
  { name: "Sneha", meaning: "Love, affection" },
  { name: "Nandini", meaning: "Daughter, one who brings delight" },
  { name: "Kripa", meaning: "Grace, blessing" },
  { name: "Ishaani", meaning: "Goddess Parvati; protector" },
  { name: "Vidya", meaning: "Knowledge" },
  { name: "Jaya", meaning: "Victory" },
  { name: "Bhavya", meaning: "Grand, splendid" },
  { name: "Chitra", meaning: "Picture, bright" },
  { name: "Deepika", meaning: "Little lamp" },
  { name: "Esha", meaning: "Desire, wish" },
  { name: "Falguni", meaning: "Born in the month of Falgun" },
  { name: "Geetanjali", meaning: "An offering of songs" },
  { name: "Hema", meaning: "Golden" },
  { name: "Indira", meaning: "Beauty; a name of Goddess Lakshmi" },
  { name: "Jyoti", meaning: "Light, flame" },
  { name: "Kalyani", meaning: "Auspicious one" },
  { name: "Lalita", meaning: "Playful, charming; a goddess" },
  { name: "Madhavi", meaning: "Sweet as spring" },
  { name: "Nalini", meaning: "Lotus" },
  { name: "Oorja", meaning: "Energy, vitality" },
  { name: "Pallavi", meaning: "New leaves, blossoming" },
  { name: "Rachna", meaning: "Creation" },
  { name: "Sarika", meaning: "A songbird" },
  { name: "Tara", meaning: "Star" },
  { name: "Uma", meaning: "Peace; a name of Parvati" },
  { name: "Vani", meaning: "Speech; goddess of learning" },
  { name: "Yamini", meaning: "Night" },
  { name: "Amara", meaning: "Eternal, immortal" },
  { name: "Bela", meaning: "Jasmine flower" },
  { name: "Charvi", meaning: "Beautiful" },
  { name: "Devika", meaning: "Little goddess" },
  { name: "Falak", meaning: "Sky" },
  { name: "Gia", meaning: "Purity, life" },
  { name: "Hiya", meaning: "Heart" },
  { name: "Jia", meaning: "Heart, victory" },
  { name: "Kiya", meaning: "Ray of light" },
  { name: "Liya", meaning: "Devoted, bound in love" },
  { name: "Naina", meaning: "Eyes" },
  { name: "Ojasvi", meaning: "Radiant, brilliant" },
  { name: "Pihu", meaning: "Sweet-sounding, beloved" },
  { name: "Ridhi", meaning: "Prosperity" },
  { name: "Siya", meaning: "A name of Goddess Sita" },
  { name: "Tisha", meaning: "Of auspicious birth" },
  { name: "Urvi", meaning: "The earth" },
  { name: "Vanya", meaning: "Grace of God" },
  { name: "Zara", meaning: "Princess, blossoming flower" },
  { name: "Aarohi", meaning: "Rising musical note" },
  { name: "Amoli", meaning: "Precious, priceless" },
  { name: "Dhriti", meaning: "Courage, steadfastness" },
  { name: "Eshita", meaning: "Desired one" },
  { name: "Gunjan", meaning: "The gentle buzz of bees" },
  { name: "Harini", meaning: "Deer, gentle one" },
  { name: "Ishika", meaning: "Paintbrush" },
  { name: "Jhanvi", meaning: "Another name for the river Ganga" },
  { name: "Kashvi", meaning: "Shining, radiant" },
  { name: "Lavanya", meaning: "Grace, beauty" },
  { name: "Manasi", meaning: "Born of the mind; thoughtful" },
  { name: "Niharika", meaning: "Nebula, morning dew" }
];

/* ---------------------------------------------------------------------- */
/* Utilities                                                               */
/* ---------------------------------------------------------------------- */

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      () => showToast("Copied to clipboard!"),
      () => fallbackCopy(text)
    );
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    showToast("Copied to clipboard!");
  } catch (e) {
    showToast("Could not copy — please copy manually.");
  }
  document.body.removeChild(ta);
}

/* ---------------------------------------------------------------------- */
/* Mobile navigation                                                       */
/* ---------------------------------------------------------------------- */

function initNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Highlight current page in nav
  const current = window.location.pathname.split("/").pop() || "index.html";
  nav.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });
}

/* ---------------------------------------------------------------------- */
/* Home page tabs                                                          */
/* ---------------------------------------------------------------------- */

function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  if (!tabButtons.length) return;
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");
      tabButtons.forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Name generator pages (boy / girl)                                       */
/* ---------------------------------------------------------------------- */

function renderNameCards(container, list) {
  if (!list.length) {
    container.innerHTML = '<p class="empty-state">No names match that filter. Try a different letter.</p>';
    return;
  }
  container.innerHTML = list
    .map(
      (item, idx) => `
      <div class="name-card">
        <h3>${item.name}</h3>
        <p class="meaning">${item.meaning}</p>
        <div class="card-actions">
          <button type="button" class="icon-btn" data-copy-single="${idx}">Copy</button>
        </div>
      </div>`
    )
    .join("");

  container.querySelectorAll("[data-copy-single]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-copy-single"));
      const item = list[idx];
      copyText(`${item.name} — ${item.meaning}`);
    });
  });
}

function initNameGenerator(dataset, config) {
  const grid = document.getElementById(config.gridId);
  if (!grid) return;

  const letterSelect = document.getElementById(config.letterId);
  const countSelect = document.getElementById(config.countId);
  const generateBtn = document.getElementById(config.generateId);
  const copyAllBtn = document.getElementById(config.copyAllId);

  let currentList = [];

  function generate() {
    const letter = letterSelect.value;
    const count = Number(countSelect.value);
    let pool = dataset;
    if (letter !== "all") {
      pool = dataset.filter((n) => n.name.charAt(0).toUpperCase() === letter);
    }
    currentList = shuffle(pool).slice(0, count);
    renderNameCards(grid, currentList);
  }

  generateBtn.addEventListener("click", generate);

  copyAllBtn.addEventListener("click", () => {
    if (!currentList.length) {
      showToast("Generate some names first!");
      return;
    }
    const text = currentList.map((i) => `${i.name} — ${i.meaning}`).join("\n");
    copyText(text);
  });

  // Initial batch on load
  generate();
}

function populateLetterOptions(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.forEach((letter) => {
    const opt = document.createElement("option");
    opt.value = letter;
    opt.textContent = letter;
    select.appendChild(opt);
  });
}

/* ---------------------------------------------------------------------- */
/* Couple name combiner                                                    */
/* ---------------------------------------------------------------------- */

function splitName(name) {
  const clean = name.trim();
  const mid = Math.max(1, Math.ceil(clean.length / 2));
  return { first: clean.slice(0, mid), second: clean.slice(mid) || clean.slice(-1) };
}

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function generateCoupleNames(nameA, nameB) {
  const a = nameA.trim();
  const b = nameB.trim();
  if (!a || !b) return null;

  const pa = splitName(a);
  const pb = splitName(b);

  const rawBlends = [
    pa.first + pb.second,
    pb.first + pa.second,
    pa.first + pb.first,
    pb.second + pa.second,
    a.slice(0, 3) + b.slice(-3),
    b.slice(0, 3) + a.slice(-3),
    a.slice(0, Math.ceil(a.length / 3)) + b.slice(Math.ceil(b.length / 3)),
    b.slice(0, 2) + a.slice(2),
    a.slice(0, 2) + b.slice(2),
    pa.first + b.slice(-2),
    pb.first + a.slice(-2),
    a.slice(0, -1) + b.slice(-1)
  ];

  const blends = [];
  const seen = new Set();
  rawBlends.forEach((raw) => {
    const clean = cap(raw.toLowerCase());
    const key = clean.toLowerCase();
    if (clean.length >= 3 && !seen.has(key) && key !== a.toLowerCase() && key !== b.toLowerCase()) {
      seen.add(key);
      blends.push(clean);
    }
  });

  while (blends.length < 8) {
    blends.push(cap(a.slice(0, 2) + b.slice(1)));
    break;
  }

  const shipName = cap(pa.first.toLowerCase() + pb.second.toLowerCase());
  const initials = `${a.charAt(0).toUpperCase()} ❤ ${b.charAt(0).toUpperCase()}`;

  const suffixes = ["Jaan", "Sona", "Pyaari", "Rani", "Raja", "Munna", "Laddoo", "Jaanu"];
  const nicknames = [
    `${cap(a)} ${suffixes[0]}`,
    `My ${cap(b)}`,
    `${a.slice(0, 3)}${b.slice(0, 3)} Jodi`,
    `${cap(b)} ${suffixes[2]}`,
    `${cap(a)}-${cap(b)} Forever`,
    `${suffixes[6]} ${cap(a)}`
  ];

  return {
    blends: blends.slice(0, 12),
    shipName,
    initials,
    nicknames
  };
}

function initCoupleCombiner() {
  const form = document.getElementById("coupleForm");
  if (!form) return;

  const nameAInput = document.getElementById("nameA");
  const nameBInput = document.getElementById("nameB");
  const resultsSection = document.getElementById("coupleResults");
  const shipDisplay = document.getElementById("shipNameDisplay");
  const shipValue = document.getElementById("shipNameValue");
  const initialsValue = document.getElementById("initialsValue");
  const blendGrid = document.getElementById("blendGrid");
  const nicknameList = document.getElementById("nicknameList");
  const copyAllBtn = document.getElementById("copyCoupleAll");

  let lastResult = null;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const a = nameAInput.value;
    const b = nameBInput.value;
    const result = generateCoupleNames(a, b);
    if (!result) {
      showToast("Please enter both names.");
      return;
    }
    lastResult = result;

    shipValue.textContent = result.shipName;
    initialsValue.textContent = result.initials;

    blendGrid.innerHTML = result.blends
      .map((name) => `<div class="name-card"><h3>${name}</h3><p class="meaning">Blended couple name</p></div>`)
      .join("");

    nicknameList.innerHTML = result.nicknames
      .map((nick) => `<span class="pill">${nick}</span>`)
      .join("");

    resultsSection.style.display = "block";
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  copyAllBtn.addEventListener("click", () => {
    if (!lastResult) {
      showToast("Generate some names first!");
      return;
    }
    const text = [
      `Ship name: ${lastResult.shipName}`,
      `Initials: ${lastResult.initials}`,
      `Blended names: ${lastResult.blends.join(", ")}`,
      `Nicknames: ${lastResult.nicknames.join(", ")}`
    ].join("\n");
    copyText(text);
  });
}

/* ---------------------------------------------------------------------- */
/* FAQ accordion                                                           */
/* ---------------------------------------------------------------------- */

function initAccordion() {
  const items = document.querySelectorAll(".accordion-item");
  items.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");
    if (!trigger || !panel) return;
    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      items.forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".accordion-panel").style.maxHeight = null;
        other.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + 40 + "px";
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Init                                                                     */
/* ---------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initTabs();
  initAccordion();
  initCoupleCombiner();

  populateLetterOptions("boyLetterFilter");
  populateLetterOptions("girlLetterFilter");

  initNameGenerator(BOY_NAMES, {
    gridId: "boyNameGrid",
    letterId: "boyLetterFilter",
    countId: "boyCountSelect",
    generateId: "boyGenerateBtn",
    copyAllId: "boyCopyAllBtn"
  });

  initNameGenerator(GIRL_NAMES, {
    gridId: "girlNameGrid",
    letterId: "girlLetterFilter",
    countId: "girlCountSelect",
    generateId: "girlGenerateBtn",
    copyAllId: "girlCopyAllBtn"
  });

  // Home page mini previews (if present) reuse the same datasets
  const homeBoyGrid = document.getElementById("homeBoyPreview");
  if (homeBoyGrid) renderNameCards(homeBoyGrid, shuffle(BOY_NAMES).slice(0, 6));

  const homeGirlGrid = document.getElementById("homeGirlPreview");
  if (homeGirlGrid) renderNameCards(homeGirlGrid, shuffle(GIRL_NAMES).slice(0, 6));

  const homeRegenBoy = document.getElementById("homeRegenBoy");
  if (homeRegenBoy) {
    homeRegenBoy.addEventListener("click", () => renderNameCards(homeBoyGrid, shuffle(BOY_NAMES).slice(0, 6)));
  }
  const homeRegenGirl = document.getElementById("homeRegenGirl");
  if (homeRegenGirl) {
    homeRegenGirl.addEventListener("click", () => renderNameCards(homeGirlGrid, shuffle(GIRL_NAMES).slice(0, 6)));
  }
});
