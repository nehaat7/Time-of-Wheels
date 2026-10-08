const DATA = {
  game: [
    { label: "Portal Snake", title: "Portal Snake", pitch: "Classic snake, except the walls are portals. Leave the left edge and you come back on the right.", level: "Beginner", stack: "HTML canvas + JavaScript", learn: "Game loops, grid movement", steps: ["Draw a grid and a snake made of squares", "Move it on a timer and steer with arrow keys", "Spawn food, grow on eat, end on self-collision", "Wrap position at the edges and add a score"] },
    { label: "Memory Match", title: "Memory Match", pitch: "Flip cards two at a time and find all the pairs in as few moves as you can.", level: "Beginner", stack: "HTML + CSS + JavaScript", learn: "DOM events, shuffling, CSS 3D flips", steps: ["Make a 4×4 grid of face-down cards", "Shuffle pairs with Fisher–Yates", "Flip two, keep matches, flip back misses", "Count moves and show a win screen"] },
    { label: "Typing Racer", title: "Typing Racer", pitch: "Type a paragraph against the clock and see your words per minute and accuracy.", level: "Beginner", stack: "JavaScript", learn: "Keyboard events, timing, string compare", steps: ["Show a random paragraph", "Highlight each character as right or wrong", "Start a timer on the first key", "Show WPM and accuracy at the end"] },
    { label: "Breakout", title: "Pixel Breakout", pitch: "Bounce a ball off a paddle to smash a wall of bricks.", level: "Intermediate", stack: "HTML canvas + JavaScript", learn: "Collision detection, velocity", steps: ["Draw the paddle, ball and brick rows", "Move the ball and bounce off walls", "Detect paddle and brick hits", "Add lives, levels and speed-up"] },
    { label: "Word Ladder", title: "Word Ladder", pitch: "Turn COLD into WARM one letter at a time. Every step must be a real word.", level: "Intermediate", stack: "JavaScript + a word list", learn: "Graphs, breadth-first search", steps: ["Load a list of four-letter words", "Check that each guess changes one letter", "Use BFS to find the shortest answer", "Show the player's path against the best path"] },
    { label: "Reaction Test", title: "Reaction Timer", pitch: "Wait for the screen to turn green, then click as fast as you can.", level: "Beginner", stack: "HTML + JavaScript", learn: "Timers, state machines", steps: ["Show a 'wait' screen", "Turn green after a random delay", "Measure the click time in milliseconds", "Catch early clicks and keep a best score"] },
    { label: "Unbeatable XO", title: "Unbeatable Tic-Tac-Toe", pitch: "Tic-tac-toe against a computer that never loses.", level: "Intermediate", stack: "JavaScript", learn: "Recursion, the minimax algorithm", steps: ["Build the 3×3 board and turns", "Detect wins and draws", "Write minimax to score every move", "Add an easy mode that sometimes moves at random"] },
    { label: "Glider", title: "One-Button Glider", pitch: "Tap to flap and steer a paper plane through gaps in the wind towers.", level: "Intermediate", stack: "HTML canvas + JavaScript", learn: "Gravity, scrolling worlds", steps: ["Apply gravity and a tap impulse", "Scroll pipes from right to left", "Detect crashes", "Add a score and a restart"] },
    { label: "Maze Maker", title: "Maze Maker & Solver", pitch: "Generate a random maze, then watch the computer find its way out.", level: "Advanced", stack: "HTML canvas + JavaScript", learn: "Depth-first search, pathfinding", steps: ["Store a grid of cells with walls", "Carve the maze with recursive backtracking", "Let the player walk it with arrow keys", "Animate an A* solver"] },
    { label: "Simon", title: "Simon Says", pitch: "Repeat a growing pattern of colors and tones. One mistake and it's over.", level: "Beginner", stack: "HTML + CSS + Web Audio", learn: "Arrays, async timing, sound", steps: ["Make four colored pads", "Play a random sequence with tones", "Check the player's taps in order", "Add one step each round"] },
    { label: "2048", title: "2048 Remix", pitch: "Slide tiles to merge matching numbers. Reach 2048 to win.", level: "Advanced", stack: "JavaScript", learn: "2D arrays, merging logic, swipes", steps: ["Render a 4×4 board", "Slide and merge one row correctly", "Reuse it for all four directions", "Spawn tiles, detect game over, support swipes"] },
    { label: "Hangman", title: "Category Hangman", pitch: "Guess the word letter by letter before the drawing is finished. Pick a category first.", level: "Beginner", stack: "HTML + JavaScript", learn: "Strings, sets, simple SVG", steps: ["Pick a category and a secret word", "Show blanks and an on-screen keyboard", "Reveal letters or add a body part", "Show win and lose states"] }
  ],
  app: [
    { label: "Habit Tracker", title: "Habit Streaks", pitch: "Check off daily habits and watch the streaks grow on a calendar grid.", level: "Beginner", stack: "HTML + JavaScript + localStorage", learn: "Dates, saving data", steps: ["Add and remove habits", "Show the last 30 days as a grid", "Tick days on and off", "Work out the current and longest streak"] },
    { label: "Focus Timer", title: "Focus Timer", pitch: "A Pomodoro timer: 25 minutes of work, 5 minutes of rest, with a log of sessions.", level: "Beginner", stack: "HTML + JavaScript", learn: "Intervals, state, notifications", steps: ["Build a countdown display", "Add start, pause and reset", "Switch between work and break", "Log finished sessions for today"] },
    { label: "Bill Splitter", title: "Bill Splitter", pitch: "Enter who paid for what on a trip and get the fewest payments to settle up.", level: "Intermediate", stack: "JavaScript", learn: "Forms, balancing algorithms", steps: ["Add people and expenses", "Work out each person's balance", "Match debtors to creditors", "Show 'Ana pays Ben ₹500' style results"] },
    { label: "Recipe Scaler", title: "Recipe Scaler", pitch: "Paste a recipe, choose servings, and every quantity updates.", level: "Beginner", stack: "JavaScript", learn: "Parsing text, fractions", steps: ["Accept a list of ingredients", "Find the number at the start of each line", "Multiply by the serving ratio", "Show nice fractions like 1½ cups"] },
    { label: "Notes App", title: "Markdown Notes", pitch: "Write notes in Markdown and see the formatted version side by side.", level: "Intermediate", stack: "JavaScript + a Markdown library", learn: "Live preview, search, storage", steps: ["Make a list of notes and an editor", "Render a live preview", "Save notes in the browser", "Add search and tags"] },
    { label: "Weather Board", title: "Weather Board", pitch: "Search a city and see today's weather and a five-day forecast.", level: "Intermediate", stack: "JavaScript + Open-Meteo API", learn: "fetch(), APIs, JSON", steps: ["Look up a city's coordinates", "Fetch the forecast", "Show icons and temperatures", "Remember recent cities"] },
    { label: "Flashcards", title: "Flashcard Quizzer", pitch: "Make card decks and study them. Cards you miss come back sooner.", level: "Intermediate", stack: "JavaScript", learn: "Spaced repetition, data models", steps: ["Create decks and cards", "Flip a card to show the answer", "Mark it easy or hard", "Schedule hard cards to repeat sooner"] },
    { label: "Palette Maker", title: "Palette Maker", pitch: "Press space for a new five-color palette. Lock the colors you like.", level: "Beginner", stack: "HTML + CSS + JavaScript", learn: "HSL color, keyboard shortcuts", steps: ["Generate five random colors", "Show hex codes with copy buttons", "Lock colors so they stay", "Check text contrast on each color"] },
    { label: "Unit Converter", title: "Kitchen & Travel Converter", pitch: "Convert cups to grams, °C to °F, km to miles, all in one place.", level: "Beginner", stack: "HTML + JavaScript", learn: "Forms, data tables", steps: ["Choose a category", "Pick from and to units", "Convert as you type", "Swap units with one button"] },
    { label: "Budget Planner", title: "Monthly Budget", pitch: "Set a budget per category and see where your money went with a chart.", level: "Intermediate", stack: "JavaScript + Chart.js", learn: "Charts, totals, CSV export", steps: ["Add income and categories", "Log spending", "Show a bar chart of spent vs budget", "Warn when a category goes over"] },
    { label: "Link Shortener", title: "Link Shortener", pitch: "Turn long links into short codes and count how many times each is opened.", level: "Advanced", stack: "Node.js + Express + SQLite", learn: "Back-end routes, databases", steps: ["Make a form that posts a long URL", "Save it with a random short code", "Redirect /code to the long URL", "Count clicks and show a stats page"] },
    { label: "Chat Room", title: "Tiny Chat Room", pitch: "A live chat room where messages appear for everyone instantly.", level: "Advanced", stack: "Node.js + WebSockets", learn: "Real-time messaging, servers", steps: ["Set up a WebSocket server", "Send messages from a simple client", "Broadcast to all users", "Add names and 'is typing…'"] }
  ],
  topic: [
    { label: "Space", title: "Planet Weight Calculator", pitch: "Enter your weight and see what you would weigh on every planet, with facts about each one.", level: "Beginner", stack: "HTML + JavaScript", learn: "Math, data arrays", steps: ["List planets with their gravity", "Take the user's weight", "Show results as cards", "Add a fun fact per planet"] },
    { label: "Ocean", title: "Ocean Depth Scroller", pitch: "A long page you scroll down into the sea, meeting animals at their real depth.", level: "Intermediate", stack: "HTML + CSS + JavaScript", learn: "Scroll events, layout", steps: ["Make a page 11,000 m tall in scale", "Show the current depth as you scroll", "Place animals at their depths", "Darken the background as you go down"] },
    { label: "Music", title: "Beat Pad", pitch: "A 16-step drum machine. Click squares to make a beat and press play.", level: "Intermediate", stack: "JavaScript + Web Audio", learn: "Audio timing, grids", steps: ["Load kick, snare and hi-hat sounds", "Make a 4×16 grid of toggles", "Loop through steps at a tempo", "Add a BPM slider and save patterns"] },
    { label: "Climate", title: "Carbon Footprint Quiz", pitch: "Ten questions about how you travel, eat and live, then a score and tips.", level: "Beginner", stack: "HTML + JavaScript", learn: "Quiz logic, scoring", steps: ["Write ten questions with options", "Show one at a time", "Add up a score", "Show tips based on the answers"] },
    { label: "Food", title: "What's for Dinner?", pitch: "Tick what's in your fridge and get recipes you can make right now.", level: "Intermediate", stack: "JavaScript", learn: "Filtering, matching", steps: ["Store recipes with ingredient lists", "Let the user tick ingredients", "Rank recipes by how many match", "Show what's missing for each"] },
    { label: "Sports", title: "Match Scoreboard", pitch: "A scoreboard for a cricket or football match with a timer and event log.", level: "Beginner", stack: "HTML + JavaScript", learn: "State updates, undo", steps: ["Show two teams and scores", "Add buttons for scoring events", "Keep a timeline of events", "Add undo for the last event"] },
    { label: "History", title: "Interactive Timeline", pitch: "A scrollable timeline of an era you like. Click an event to read more.", level: "Intermediate", stack: "HTML + CSS + JavaScript", learn: "Data-driven layout", steps: ["Gather 15 events with dates", "Place them on a line by year", "Open details on click", "Filter by theme"] },
    { label: "Animals", title: "Animal Guessing Game", pitch: "Think of an animal and the app guesses it by asking yes/no questions, learning as it goes.", level: "Advanced", stack: "JavaScript", learn: "Binary trees, learning from users", steps: ["Start with a tiny question tree", "Walk it with yes and no", "When wrong, ask for a new question", "Save the tree so it keeps learning"] },
    { label: "Books", title: "Reading Shelf", pitch: "Track books you want to read, are reading and finished, with ratings.", level: "Beginner", stack: "HTML + JavaScript + localStorage", learn: "CRUD, drag and drop", steps: ["Add a book with title and author", "Show three shelves", "Move books between shelves", "Add stars and a yearly count"] },
    { label: "Travel", title: "Trip Packing List", pitch: "Pick where you're going and for how long, and get a packing checklist.", level: "Beginner", stack: "HTML + JavaScript", learn: "Rules, checklists", steps: ["Ask for trip type and days", "Build a list from rules", "Let users tick and add items", "Save lists for next time"] },
    { label: "Health", title: "Water Reminder", pitch: "Track glasses of water through the day with a filling bottle animation.", level: "Beginner", stack: "HTML + CSS + JavaScript", learn: "CSS animation, daily reset", steps: ["Set a daily goal", "Add a glass with one tap", "Animate the bottle filling", "Reset at midnight and show history"] },
    { label: "Movies", title: "Movie Night Picker", pitch: "Friends add movie picks, vote, and the app picks tonight's film.", level: "Intermediate", stack: "JavaScript", learn: "Voting, random weighted picks", steps: ["Add movies to a shared list", "Let each person vote", "Pick a winner weighted by votes", "Show a dramatic reveal"] }
  ]
};
const MODE_NAMES = { game: "Game", app: "App", topic: "Topic", custom: "My wheel" };
const TWISTS = [
  "Add a dark mode toggle", "Make it fully usable with the keyboard", "Save progress so it survives a refresh",
  "Design it for phones first", "Add sound effects", "Add a two-player or multi-user mode", "No libraries allowed",
  "Add an undo button", "Add a 'share my result' copy button", "Add one delightful animation",
  "Give it a retro 1980s look", "Support two languages"
];
const TIMEBOXES = ["1-hour sprint", "One afternoon (3 hours)", "One evening", "A weekend", "One week, 30 minutes a day"];
const DEFAULT_CUSTOM = ["Portfolio website", "Quiz about my city", "Birthday countdown", "Rock paper scissors", "Joke generator", "Study planner"];

const $ = (id) => document.getElementById(id);
const canvas = $("wheel"), ctx = canvas.getContext("2d");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const TAU = Math.PI * 2;
const mod = (x, m) => ((x % m) + m) % m;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function load(key, fallback) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; } }
function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }

let state, rot = 0, spinning = false, audio = null, lastIdx = -1;

function items() {
  if (state.mode !== "custom") return DATA[state.mode];
  return state.custom.map((line) => ({
    label: line, title: line, custom: true,
    pitch: "Your own idea. Let the twist and the time limit shape what you build.",
    level: "You decide", stack: "Whatever you want to learn", learn: "Scoping a project",
    steps: ["Write one sentence on what it does and who it's for", "Sketch the main screen on paper", "Build the smallest version that works", "Apply the twist, then polish"]
  }));
}

function colors() {
  const cs = getComputedStyle(document.documentElement);
  const g = (n) => cs.getPropertyValue(n).trim();
  return { seg: [[g("--s1"), g("--s1-ink")], [g("--s2"), g("--s2-ink")], [g("--s3"), g("--s3-ink")], [g("--s4"), g("--s4-ink")]], rim: g("--rim"), bg: g("--bg") };
}
function segColor(i, n) { let c = i % 4; if (n > 1 && i === n - 1 && c === 0) c = 2; return c; }

function fitLabel(text, max) {
  if (ctx.measureText(text).width <= max) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(t + "…").width > max) t = t.slice(0, -1);
  return t + "…";
}

function draw() {
  const size = canvas.clientWidth, dpr = window.devicePixelRatio || 1;
  if (!size) return;
  if (canvas.width !== Math.round(size * dpr)) { canvas.width = canvas.height = Math.round(size * dpr); }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);
  const list = items(), n = list.length, seg = TAU / n, c = colors();
  const cx = size / 2, r = size / 2 - 10;

  ctx.beginPath(); ctx.arc(cx, cx, r + 7, 0, TAU); ctx.fillStyle = c.rim; ctx.fill();

  for (let i = 0; i < n; i++) {
    const a0 = -Math.PI / 2 + rot + i * seg, [fill, ink] = c.seg[segColor(i, n)];
    ctx.beginPath(); ctx.moveTo(cx, cx); ctx.arc(cx, cx, r, a0, a0 + seg); ctx.closePath();
    ctx.fillStyle = fill; ctx.fill();
    ctx.save();
    ctx.translate(cx, cx); ctx.rotate(a0 + seg / 2);
    ctx.fillStyle = ink; ctx.textAlign = "right"; ctx.textBaseline = "middle";
    const fs = Math.max(11, Math.min(r * 0.075, r * seg * 0.42));
    ctx.font = `700 ${fs}px Figtree, "Avenir Next", system-ui, sans-serif`;
    ctx.fillText(fitLabel(list[i].label, r * 0.62), r - 16, 0);
    ctx.restore();
  }
  // rim studs at segment boundaries
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + rot + i * seg;
    ctx.beginPath(); ctx.arc(cx + Math.cos(a) * (r + 1), cx + Math.sin(a) * (r + 1), 3.2, 0, TAU);
    ctx.fillStyle = c.bg; ctx.fill();
  }
}

function tick() {
  const p = $("pointer");
  p.classList.remove("tick"); void p.offsetWidth; p.classList.add("tick");
  if (!state.sound || !audio) return;
  const o = audio.createOscillator(), g = audio.createGain(), t = audio.currentTime;
  o.type = "triangle"; o.frequency.value = 1400;
  g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
  o.connect(g).connect(audio.destination); o.start(t); o.stop(t + 0.05);
}

function spin() {
  if (spinning) return;
  const list = items(), n = list.length;
  if (n < 2) { toast("Add at least two ideas to your wheel"); return; }
  if (state.sound && !audio) { try { audio = new (window.AudioContext || window.webkitAudioContext)(); } catch {} }
  if (audio && audio.state === "suspended") audio.resume();
  spinning = true; $("hub").disabled = true;
  const seg = TAU / n, target = Math.floor(Math.random() * n);
  const desired = mod(-(target + 0.15 + Math.random() * 0.7) * seg, TAU);
  let final = rot - mod(rot, TAU) + desired;
  const turns = reduced ? 1 : 6;
  while (final < rot + turns * TAU) final += TAU;
  const start = rot, dur = reduced ? 700 : 5200, t0 = performance.now();
  lastIdx = Math.floor(mod(-rot, TAU) / seg);
  function frame(now) {
    const t = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - t, 4);
    rot = start + (final - start) * e;
    const idx = Math.floor(mod(-rot, TAU) / seg);
    if (idx !== lastIdx) { lastIdx = idx; if (!reduced) tick(); }
    draw();
    if (t < 1) requestAnimationFrame(frame);
    else {
      rot = mod(rot, TAU); spinning = false; $("hub").disabled = false;
      const result = { mode: state.mode, idea: list[target], twist: pick(TWISTS), time: pick(TIMEBOXES), at: Date.now() };
      state.current = result; state.example = false;
      state.history = [result, ...state.history].slice(0, 8);
      save("tow-history", state.history);
      renderCard(true); renderHistory();
    }
  }
  requestAnimationFrame(frame);
}

function esc(s) { return String(s).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[ch]); }

function renderCard(animate) {
  const r = state.current, card = $("card"), d = r.idea;
  const sw = { game: "--s1", app: "--s4", topic: "--s2", custom: "--s3" }[r.mode];
  card.innerHTML = `
    <div class="eyebrow"><span class="swatch" style="background: var(${sw})"></span>${esc(MODE_NAMES[r.mode])}${d.custom ? "" : " · " + esc(d.level)}${state.example ? ' <span class="example">Example spin. Press SPIN for yours.</span>' : ""}</div>
    <div style="display:grid; gap:10px"><h2>${esc(d.title)}</h2><p class="pitch">${esc(d.pitch)}</p></div>
    <div><p class="steps-h">Build it in four steps</p><ol class="steps">${d.steps.map((s) => `<li><span>${esc(s)}</span></li>`).join("")}</ol></div>
    <dl class="meta" style="margin:0">
      <div><dt>Suggested stack</dt><dd>${esc(d.stack)}</dd></div>
      <div><dt>You'll practice</dt><dd>${esc(d.learn)}</dd></div>
      <div><dt>Time limit</dt><dd>${esc(r.time)}</dd></div>
    </dl>
    <div class="twist"><div><b>Twist</b><span>${esc(r.twist)}</span></div><button class="btn" id="reroll">New twist</button></div>
    <div class="actions"><button class="btn primary" id="copy">Copy brief</button></div>`;
  if (animate) { card.classList.remove("reveal"); void card.offsetWidth; card.classList.add("reveal"); }
  $("reroll").onclick = () => {
    let t; do { t = pick(TWISTS); } while (t === r.twist);
    r.twist = t; save("tow-history", state.history); renderCard(false);
  };
  $("copy").onclick = () => {
    const text = `${d.title} (${MODE_NAMES[r.mode]})\n${d.pitch}\n\nSteps:\n${d.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\nStack: ${d.stack}\nPractice: ${d.learn}\nTime limit: ${r.time}\nTwist: ${r.twist}`;
    navigator.clipboard.writeText(text).then(() => toast("Brief copied"), () => toast("Copy isn't available here. Select the text instead."));
  };
}

function renderHistory() {
  const ol = $("history");
  if (!state.history.length) { ol.innerHTML = '<li><p class="empty">Your spins will show up here.</p></li>'; return; }
  const sw = { game: "--s1", app: "--s4", topic: "--s2", custom: "--s3" };
  ol.innerHTML = state.history.map((h, i) => `<li><button data-i="${i}"><span class="swatch" style="background: var(${sw[h.mode]})"></span><span class="t">${esc(h.idea.title)}</span><time>${new Date(h.at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</time></button></li>`).join("");
  ol.querySelectorAll("button").forEach((b) => b.onclick = () => { state.current = state.history[+b.dataset.i]; state.example = false; renderCard(true); });
}

function setMode(m) {
  if (spinning) return;
  state.mode = m; save("tow-mode", m);
  document.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", String(t.dataset.mode === m)));
  $("custom").hidden = m !== "custom";
  draw();
}

function syncCustom() {
  $("custom-items").value = state.custom.join("\n");
  $("custom-count").textContent = `${state.custom.length} ideas on the wheel`;
}

let toastTimer;
function toast(msg) { const t = $("toast"); t.textContent = msg; t.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => t.hidden = true, 2200); }

function start(prev) {
  state = {
    mode: prev.mode || load("tow-mode", "game"),
    history: prev.history || load("tow-history", []),
    custom: prev.custom || load("tow-custom", DEFAULT_CUSTOM),
    sound: prev.sound ?? load("tow-sound", true),
    current: prev.current || null, example: prev.example ?? false
  };
  if (!DATA[state.mode] && state.mode !== "custom") state.mode = "game";
  if (!state.current) {
    state.current = state.history[0] || { mode: "game", idea: DATA.game[0], twist: TWISTS[0], time: TIMEBOXES[2], at: Date.now() };
    state.example = !state.history.length;
  }
  if (state.example && state.mode === "game") rot = -0.5 * (TAU / DATA.game.length);

  document.querySelectorAll(".tab").forEach((t) => t.onclick = () => setMode(t.dataset.mode));
  $("hub").onclick = spin;
  $("sound").setAttribute("aria-pressed", String(state.sound));
  $("sound").onclick = () => { state.sound = !state.sound; save("tow-sound", state.sound); $("sound").setAttribute("aria-pressed", String(state.sound)); };
  $("custom-save").onclick = () => {
    const lines = $("custom-items").value.split("\n").map((s) => s.trim()).filter(Boolean).slice(0, 24);
    if (lines.length < 2) { toast("Add at least two ideas, one per line"); return; }
    state.custom = lines; save("tow-custom", lines); syncCustom(); draw(); toast("Wheel updated");
  };
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !/TEXTAREA|BUTTON|INPUT/.test(document.activeElement.tagName)) { e.preventDefault(); spin(); }
  });

  syncCustom(); setMode(state.mode); renderCard(false); renderHistory();
  new ResizeObserver(draw).observe($("wrap"));
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", draw);
  new MutationObserver(draw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  if (document.fonts) document.fonts.ready.then(draw);
}

start({});
