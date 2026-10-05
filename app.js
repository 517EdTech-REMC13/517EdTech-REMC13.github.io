/* 517 Ed Tech — homepage content.
   Edit the data below to update the live cards; the markup is generated from it. */

const svg = (paths, extra = "") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
        stroke-linecap="round" stroke-linejoin="round" ${extra}>${paths}</svg>`;

const icons = {
  calendar: svg('<rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M8 2.5v4M16 2.5v4M3 9.5h18"/><path d="M8.5 15l2.2 2.2L15 13"/>'),
  video: svg('<rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="M15.5 10l6-3.2v10.4l-6-3.2z"/><path d="M6.5 9.5l4 2.5-4 2.5z"/>'),
  toolbox: svg('<rect x="2.5" y="8.5" width="19" height="11" rx="2"/><path d="M8 8.5V6.5a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M2.5 13h6v2h7v-2h6"/>'),
  award: svg('<circle cx="12" cy="9" r="5.2"/><path d="M8.5 13.2L6.5 21l5.5-3 5.5 3-2-7.8"/>'),
  bulb: svg('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 00-3.8 10.7c.6.5 1 1.3 1.1 2.1h5.4c.1-.8.5-1.6 1.1-2.1A6 6 0 0012 3z"/>'),
  captions: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 11h2M8 14h5M14 11h2"/>'),
  spark: svg('<path d="M12 3l1.7 4.6L18.5 9l-4.8 1.4L12 15l-1.7-4.6L5.5 9l4.8-1.4z"/><path d="M18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>'),
};

/* ---- Program hubs ---- */
const hubs = [
  {
    color: "#4d8bff", icon: icons.calendar,
    title: "Gatherings",
    copy: "Full-day workshops and regional meet-ups where educators learn by doing — most free, with SCECHs and lunch.",
    link: "See what's coming up", href: "./gatherings.html",
  },
  {
    color: "#ff6a5a", icon: icons.video,
    title: "Digital Instruction Network",
    copy: "Short, practical instructional-tech videos — Tech Tip Tuesday and 3-Minute Instructional Tech you can watch fast.",
    link: "Watch the series", href: "./dispatch.html",
  },
  {
    color: "#2fd3c4", icon: icons.toolbox,
    title: "The Educator's Workbench",
    copy: "Ready-to-use resources, classroom kits, and shareable materials — including our Google Workspace hubs.",
    link: "Open the workbench", href: "./resources.html",
  },
  {
    color: "#f4b93e", icon: icons.award,
    title: "Grants & Scholarships",
    copy: "Funding and scholarships to help you bring a new idea, tool, or project into your classroom.",
    link: "Find funding", href: "./grants.html",
  },
];

/* ---- Upcoming gatherings (real events) ---- */
const events = [
  {
    month: "May", day: "1",
    title: "Table Top Games: Level-Up Learning",
    detail: "A full-day deep dive into tabletop games for critical thinking & collaboration · Consumers Credit Union, Lansing",
    tag: "Free · RSVP",
  },
  {
    month: "Jun", day: "11",
    title: "Capital Area District Library Series",
    detail: "K-6 resources, Literaturepalooza, and Back-to-School Bootcamp with CADL · June–August",
    tag: "Multi-date",
  },
  {
    month: "On", day: "★",
    title: "Michigan eLibrary (MeL) Exploration",
    detail: "A guided tour of Michigan's free resource collection for your classroom · Recorded, watch anytime",
    tag: "On-demand",
  },
];

/* ---- The 517 Dispatch (blog / newsletter posts) ---- */
const posts = [
  {
    c1: "#1c4aa8", c2: "#3f7ae0", icon: icons.captions, tag: "Tech Tip Tuesday",
    title: "Turn on live captions in Google Slides",
    copy: "A 90-second win that makes every presentation more accessible — no add-ons required.",
    href: "./dispatch-live-captions.html",
  },
  {
    c1: "#a72b20", c2: "#e0503c", icon: icons.video, tag: "3-Minute Instructional Tech",
    title: "Episode #62: Building a Formative check in minutes",
    copy: "Turn any lesson into a quick, low-stakes check for understanding your students will actually finish.",
    href: "./dispatch.html",
  },
  {
    c1: "#0e7c73", c2: "#16b0a6", icon: icons.spark, tag: "Recap",
    title: "What we learned running Table Top Games PD",
    copy: "Why play builds critical thinking — plus the game cards and strategies we shared with the room.",
    href: "./dispatch.html",
  },
];

/* ---- Team (real coordinators) ---- */
const team = [
  { color: "#2660d0", name: "Allison Remington", role: "Instructional Technology Specialist", org: "Clinton County RESA", email: "aremington@ccresa.org" },
  { color: "#14a89c", name: "Christy Lobdell", role: "Assistive & Instructional Technology Consultant", org: "Eaton RESA", email: "clobdell@eatonresa.org" },
  { color: "#d5382a", name: "Ken Turner", role: "Instruction & Technology Coach", org: "Ingham ISD", email: "ken.turner@inghamisd.org" },
  { color: "#e0a52e", name: "Andrew Shauver", role: "Instruction & Technology Coach · REMC13 Director", org: "Ingham ISD", email: "ashauver@inghamisd.org" },
];

const initials = (name) => name.split(" ").map((n) => n[0]).slice(0, 2).join("");
const render = (id, items, tpl) => {
  const host = document.querySelector(id);
  if (host) host.innerHTML = items.map(tpl).join("");
};

render("#hub-grid", hubs, (h) => `
  <a class="hub-card" href="${h.href}">
    <span class="hub-icon" style="color:${h.color}">${h.icon}</span>
    <h3>${h.title}</h3>
    <p>${h.copy}</p>
    <span class="hub-link" style="color:${h.color}">${h.link} →</span>
  </a>`);

render("#event-list", events, (e) => `
  <article class="event-card">
    <div class="event-date"><span class="m">${e.month}</span><span class="d">${e.day}</span></div>
    <div class="event-body"><h3>${e.title}</h3><p>${e.detail}</p></div>
    <span class="event-tag">${e.tag}</span>
  </article>`);

render("#post-grid", posts, (p) => `
  <a class="post-card" href="${p.href}">
    <div class="post-cover" style="background:linear-gradient(135deg,${p.c1},${p.c2})">
      ${p.icon}
      <span class="tag">${p.tag}</span>
    </div>
    <div class="post-body"><h3>${p.title}</h3><p>${p.copy}</p><span class="post-link">Read more →</span></div>
  </a>`);

render("#team-grid", team, (t) => `
  <article class="team-card">
    <div class="avatar" style="background:${t.color}">${initials(t.name)}</div>
    <h3>${t.name}</h3>
    <p class="team-role">${t.role}</p>
    <p class="team-org">${t.org}</p>
    <a class="team-email" href="mailto:${t.email}">${t.email}</a>
  </article>`);

/* ---- Subscribe form (demo confirmation) ---- */
const form = document.querySelector("#subscribe");
if (form) {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const email = document.querySelector("#email").value.trim();
    const note = document.querySelector("#subscribe-note");
    if (email && /.+@.+\..+/.test(email)) {
      note.textContent = `Thanks — we'll send the next Dispatch to ${email}.`;
      note.style.color = "#8fb4ff";
      form.querySelector("#email").value = "";
    } else {
      note.textContent = "Please enter a valid email address.";
      note.style.color = "#ff9a8f";
    }
  });
}
