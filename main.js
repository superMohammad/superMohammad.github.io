// Only what HTML/CSS can't do on their own. No libraries.

// 1. Scroll reveal — unobserve after first reveal so it stays put.
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }
}, { rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// 2. Theme toggle — dark is the identity default; persist an explicit choice.
document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// 3. Mobile menu.
const burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
document.getElementById("menu").addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    document.body.classList.remove("menu-open");
    burger.setAttribute("aria-expanded", "false");
  }
});

// 4. Nav hairline on scroll + current year.
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
addEventListener("scroll", onScroll, { passive: true });
onScroll();
document.getElementById("year").textContent = new Date().getFullYear();

// 5. Background — dot-topology graph + Greek glyphs and ML formulas adrift in space.
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
const GLYPHS = ["Γ", "γ", "η", "θ", "ε", "Σ", "σ", "α", "β", "δ", "Δ", "λ", "μ", "π", "ρ", "φ", "Ω"];
const FORMULAS = [
  "θ ← θ − η∇J(θ)",
  "ŷ = w·x + b",
  "L = Σ(y − ŷ)²/n",
  "σ(z) = 1/(1+e^−z)",
  "softmax(QK/√d)·V",
  "P(A|B) = P(B|A)P(A)/P(B)",
  "H = −Σ p log p",
  "∂L/∂w",
  "N(μ, σ²)",
  "e^iπ + 1 = 0",
];
const LINK = 130, CURSOR = 160; // px reach of node edges / pointer edges
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const mouse = { x: -1e4, y: -1e4 };
let W = 0, H = 0, dots = [], glyphs = [], formulas = [], fg = "#FAFAFA";

const rand = (a, b) => a + Math.random() * (b - a);
const readTheme = () => { fg = getComputedStyle(document.body).color; };

function seed() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  W = innerWidth; H = innerHeight;
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  dots = Array.from({ length: Math.min(140, Math.round(W * H / 12000)) }, () => ({
    x: rand(0, W), y: rand(0, H), vx: rand(-.18, .18), vy: rand(-.18, .18), r: rand(.8, 1.8),
  }));
  glyphs = Array.from({ length: Math.min(17, Math.max(6, Math.round(W * H / 80000))) }, (_, i) => ({
    c: GLYPHS[i % GLYPHS.length],
    x: rand(0, W), y: rand(0, H), vx: rand(-.1, .1), vy: rand(-.1, .1),
    a: rand(0, Math.PI * 2), va: rand(-.004, .004), s: rand(18, 48), o: rand(.1, .22),
  }));
  formulas = Array.from({ length: Math.min(8, Math.max(3, Math.round(W * H / 170000))) }, (_, i) => ({
    c: FORMULAS[i % FORMULAS.length],
    x: rand(0, W), y: rand(0, H), vx: rand(-.08, .08), vy: rand(-.08, .08),
    a: rand(0, Math.PI * 2), va: rand(-.002, .002), s: rand(13, 20), o: rand(.08, .16),
  }));
}

function drift(o) {
  o.x += o.vx; o.y += o.vy;
  const m = 60; // wrap outside the viewport so nothing pops at the edge
  if (o.x < -m) o.x = W + m; else if (o.x > W + m) o.x = -m;
  if (o.y < -m) o.y = H + m; else if (o.y > H + m) o.y = -m;
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = ctx.strokeStyle = fg;
  ctx.lineWidth = 1;

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (const f of formulas) {
    ctx.save();
    ctx.globalAlpha = f.o;
    ctx.translate(f.x, f.y);
    ctx.rotate(f.a);
    ctx.font = `italic ${f.s}px Georgia, "Times New Roman", serif`;
    ctx.fillText(f.c, 0, 0);
    ctx.restore();
  }
  for (const g of glyphs) {
    ctx.save();
    ctx.globalAlpha = g.o;
    ctx.translate(g.x, g.y);
    ctx.rotate(g.a);
    ctx.font = `${g.s}px Georgia, "Times New Roman", serif`;
    ctx.fillText(g.c, 0, 0);
    ctx.restore();
  }

  for (let i = 0; i < dots.length; i++) {
    const a = dots[i];
    for (let j = i + 1; j < dots.length; j++) {
      const b = dots[j];
      const dab = Math.hypot(a.x - b.x, a.y - b.y);
      if (dab > LINK) continue;
      ctx.globalAlpha = .15 * (1 - dab / LINK);
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      // fill mutually-linked triples for the geometric feel
      for (let k = j + 1; k < dots.length; k++) {
        const c = dots[k];
        if (Math.hypot(a.x - c.x, a.y - c.y) < LINK && Math.hypot(b.x - c.x, b.y - c.y) < LINK) {
          ctx.globalAlpha = .025;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(c.x, c.y); ctx.fill();
        }
      }
    }
    const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
    if (dm < CURSOR) {
      ctx.globalAlpha = .22 * (1 - dm / CURSOR);
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
    }
    ctx.globalAlpha = .55;
    ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function frame() {
  for (const d of dots) drift(d);
  for (const g of glyphs) { drift(g); g.a += g.va; }
  for (const f of formulas) { drift(f); f.a += f.va; }
  draw();
  requestAnimationFrame(frame);
}

readTheme();
seed();
if (reduced) draw(); else requestAnimationFrame(frame);

addEventListener("resize", () => { seed(); if (reduced) draw(); });
addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
addEventListener("pointerleave", () => { mouse.x = mouse.y = -1e4; });
new MutationObserver(() => { readTheme(); if (reduced) draw(); })
  .observe(document.documentElement, { attributeFilter: ["data-theme"] });

// 6. Project detail dialogs.
document.querySelectorAll("[data-project]").forEach((el) => {
  el.addEventListener("click", () => document.getElementById(el.dataset.project).showModal());
});
document.querySelectorAll(".pj").forEach((d) => {
  d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
  d.querySelector(".pj__close").addEventListener("click", () => d.close());
});
