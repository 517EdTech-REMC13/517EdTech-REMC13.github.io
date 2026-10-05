const tracks = [
  {
    number: "01",
    title: "Google Workspace: Drive",
    type: "Slides",
    cover: "./assets/covers/drive.png",
    coverAlt: "Google Drive presentation cover",
    url: "https://docs.google.com/presentation/d/1LYuoZzNpazRLuKM3cXlW-h70bKxhq93btY-ol3MP9lY/edit?usp=drive_link",
    summary: "Sharing controls, organization tips, hovercards, URL hacks, and e-signature workflows."
  },
  {
    number: "02",
    title: "Google Workspace: Forms",
    type: "Slides",
    cover: "./assets/covers/forms.png",
    coverAlt: "Google Forms presentation cover",
    url: "https://docs.google.com/presentation/d/1VXf7a9GS5BfigJ4tLd1tDTsQBV-NxPi4FX9NVy5Yn5s/edit?usp=drive_link",
    summary: "Creation support, close dates, response limits, publishing updates, and customization ideas."
  },
  {
    number: "03",
    title: "Google Workspace: Slides",
    type: "Slides",
    cover: "./assets/covers/slides.png",
    coverAlt: "Google Slides presentation cover",
    url: "https://docs.google.com/presentation/d/1txiaTD8ZtfE7Mj9tYJ7-4-6JJhcGCRGZVdSN2Dntn3A/edit?usp=drive_link",
    summary: "Gemini in Slides, building blocks, live pointers, video controls, shortcuts, and audience tools."
  },
  {
    number: "04",
    title: "Google Workspace: NotebookLM",
    type: "Slides",
    cover: "./assets/covers/notebooklm.png",
    coverAlt: "NotebookLM presentation cover",
    url: "https://docs.google.com/presentation/d/1foT2UITTqYlWDtL5fQieOODGfHzK7PkcL3JpyefIj90/edit?usp=sharing",
    summary: "Notebook setup, sources, studio tools, limits, teaching applications, and classroom use cases."
  },
  {
    number: "05",
    title: "Google Workspace: Docs",
    type: "Slides",
    cover: "./assets/covers/docs.png",
    coverAlt: "Google Docs presentation cover",
    url: "https://docs.google.com/presentation/d/1v6e95JuTaFN1EHN0YRadn36hvwKvRmBPIXj6hc3IKlU/edit?usp=sharing",
    summary: "Gemini in Docs, tabs, building blocks, smart chips, task assignment, and translation tools."
  },
  {
    number: "06",
    title: "Google Workspace: Sheets",
    type: "Slides",
    cover: "./assets/covers/sheets.png",
    coverAlt: "Google Sheets presentation cover",
    url: "https://docs.google.com/presentation/d/1itB3Atmzm1vhVn_BlCX59evxNuXIOf1pPYBglksEx4s/edit?usp=drive_link",
    summary: "Tables, notifications, formulas, filters, smart chips, and productivity shortcuts."
  },
  {
    number: "07",
    title: "Google Workspace: Gmail",
    type: "Slides",
    cover: "./assets/covers/gmail.png",
    coverAlt: "Gmail presentation cover",
    url: "https://docs.google.com/presentation/d/1jWdJuvcDbBJQsy61m60Ch3Rzlr-Ll0FNpbGF0u65XYM/edit?usp=drive_link",
    summary: "Workspace Studio, scheduling, templates, signatures, snooze, and inbox-management tips."
  },
  {
    number: "08",
    title: "Google Workspace: Gemini",
    type: "Slides",
    cover: "./assets/covers/gemini.png",
    coverAlt: "Gemini presentation cover",
    url: "https://docs.google.com/presentation/d/1DgxZcV3RXHIuS5LSL-jvkMpCoJySXYqPdFf5YnIv1qY/edit?usp=drive_link",
    summary: "Gemini fundamentals, Canvas, Gems, Live, Deep Research, and enhanced app workflows."
  },
  {
    number: "09",
    title: "Google Workspace: Classroom & Chromebooks",
    type: "Slides",
    cover: "./assets/covers/classroom-chromebooks.png",
    coverAlt: "Classroom and Chromebooks presentation cover",
    url: "https://docs.google.com/presentation/d/1_MT7XLOXGytN4_s0rK26ikQsE1Ucs4lxNVDF3ShKhJo/edit?usp=drive_link",
    summary: "Classroom AI updates, Chromebook workflows, accessibility, screencasts, and assignment tools."
  },
  {
    number: "10",
    title: "Google Workspace: Calendar",
    type: "Slides",
    cover: "./assets/covers/calendar.png",
    coverAlt: "Google Calendar presentation cover",
    url: "https://docs.google.com/presentation/d/1FhyWoFQIeSL0qnUHEFBsJ0mP2z5PizK2aH55B2YAmTU/edit?usp=drive_link",
    summary: "Search, meeting notes, scheduling helpers, settings, and duplicate or restore workflows."
  },
  {
    number: "11",
    title: "Google Workspace: Accessibility",
    type: "Slides",
    cover: "./assets/covers/accessibility.png",
    coverAlt: "Accessibility presentation cover",
    url: "https://docs.google.com/presentation/d/1JeiGepYI5VmMCNPAX5dZ2d1YQA33VefhtrdKiAvJM9Q/edit?usp=drive_link",
    summary: "Chrome and Chromebook accessibility supports for reading, writing, focus, mobility, and vision."
  },
  {
    number: "12",
    title: "Google Workspace: Tasks & Keep",
    type: "Slides",
    cover: "./assets/covers/tasks-keep.png",
    coverAlt: "Google Tasks and Keep presentation cover",
    url: "https://docs.google.com/presentation/d/1RzBWyfy6RdKDPCOcch0kSulVufoFnt0fmGffIeWPP3c/edit?usp=sharing",
    summary: "Task lists, reminders, side-panel integrations, Keep workflows, and comparison guidance."
  },
  {
    number: "13",
    title: "Agenda: Google Workspace",
    type: "Doc",
    cover: "",
    coverAlt: "",
    url: "https://docs.google.com/document/d/18GifiVgIPXWurN_I1JqVbssDmMANZGYcVRlAo-gteng/edit?tab=t.0#heading=h.bl1oxykrenwv",
    summary: "Two-day schedule, materials, one-hit-wonders segment, soundtrack work time, and release party."
  },
  {
    number: "14",
    title: "Google Vids & Labs",
    type: "Slides",
    cover: "./assets/covers/vids-labs.png",
    coverAlt: "Google Vids and Labs presentation cover",
    url: "https://docs.google.com/presentation/d/1f3Ma4YQnoOPr8EwkNVvfBGCw27HE9-YA1obNkQwDgS8/edit?usp=sharing",
    summary: "Vids AI features, deck import ideas, and a sampler of Google Labs experiments."
  },
  {
    number: "15",
    title: "Google Workspace: Chrome",
    type: "Slides",
    cover: "./assets/covers/chrome.png",
    coverAlt: "Google Chrome presentation cover",
    url: "https://docs.google.com/presentation/d/1xWTVO3d5JjreK6p4ykDDRWurLo6fpCPiMwcOftx6h5c/edit?slide=id.g31ef4df2872_0_0#slide=id.g31ef4df2872_0_0",
    summary: "AI mode, tab workflows, translation, startup behavior, reading mode, and browser shortcuts."
  }
];

const agendaDays = [
  {
    title: "Day 1",
    meta: "Housekeeping, Gemini, one-hit wonders, and new Workspace releases.",
    items: [
      ["9:00 am", "Housekeeping, welcome, lunch order, and Gemini forced fun"],
      ["9:30 am", "Google AI tools: Gemini, Nano Banana, Canvas, Deep Research, Guided Learning"],
      ["10:45 am", "Gemini continued: Gems, sharing, and exploration"],
      ["11:30 am", "Intro to the 517 Ed Tech Soundtrack"],
      ["12:30 pm", "Workspace One Hit Wonders"],
      ["1:15 pm", "New releases: Chrome, Drive, Docs, and Slides"],
      ["2:30 pm", "517 Ed Tech Soundtrack work time"]
    ]
  },
  {
    title: "Day 2",
    meta: "NotebookLM, productivity apps, Classroom updates, and the soundtrack release party.",
    items: [
      ["9:00 am", "Forced fun with Google Vids and Google Labs"],
      ["9:45 am", "NotebookLM overview, sources, studio tools, and exploration"],
      ["10:45 am", "New releases: Sheets, Tasks, Keep, Forms, Gmail, and Calendar"],
      ["12:30 pm", "Workspace One Hit Wonders"],
      ["1:00 pm", "Overview of Classroom updates"],
      ["1:30 pm", "Soundtrack work time"],
      ["2:00 pm", "517 Ed Tech Soundtrack release party"],
      ["2:30 pm", "Shareout and wrap-up"]
    ]
  }
];

const bandMembers = [
  {
    name: "Christy Lobdell",
    role: "Assistive and Instructional Technology Consultant",
    org: "Eaton RESA",
    email: "clobdell@eatonresa.org",
    image: "./assets/portraits/christy-performance.png"
  },
  {
    name: "Andrew Shauver",
    role: "Instruction and Technology Coach",
    org: "Ingham ISD",
    email: "ashauver@inghamisd.org",
    image: "./assets/portraits/andrew-performance.png"
  },
  {
    name: "Allison Remington",
    role: "Instructional Technology Specialist",
    org: "Clinton County RESA",
    email: "aremington@ccresa.org",
    image: "./assets/portraits/allison-performance.png"
  },
  {
    name: "Ken Turner",
    role: "Instruction and Technology Coach",
    org: "Ingham ISD",
    email: "ken.turner@inghamisd.org",
    image: "./assets/portraits/ken-performance.png"
  }
];

const trackGrid = document.querySelector("#track-grid");
const agendaGrid = document.querySelector("#agenda-grid");
const bandGrid = document.querySelector("#band-grid");

tracks.forEach((track) => {
  const card = document.createElement("a");
  card.className = "track-card";
  card.href = track.url;
  card.target = "_blank";
  card.rel = "noreferrer";
  card.setAttribute("aria-label", `Open ${track.title}`);

  const coverMarkup = track.cover
    ? `<img class="track-cover" src="${track.cover}" alt="${track.coverAlt}" />`
    : `<div class="track-cover track-cover-empty" aria-hidden="true"><span>Agenda</span></div>`;

  card.innerHTML = `
    ${coverMarkup}
    <div class="track-copy">
      <span class="track-badge">Track ${track.number} - ${track.type}</span>
      <div>
        <h3 class="track-title">${track.title}</h3>
        <p class="track-meta">${track.summary}</p>
      </div>
      <span class="track-cta">Open resource</span>
    </div>
  `;

  trackGrid.appendChild(card);
});

agendaDays.forEach((day) => {
  const card = document.createElement("article");
  card.className = "agenda-card";

  const items = day.items
    .map(
      ([time, topic]) => `
        <div class="agenda-item">
          <span class="agenda-time">${time}</span>
          <span class="agenda-topic">${topic}</span>
        </div>
      `
    )
    .join("");

  card.innerHTML = `
    <h3>${day.title}</h3>
    <p class="agenda-meta">${day.meta}</p>
    <div class="agenda-list">${items}</div>
  `;

  agendaGrid.appendChild(card);
});

bandMembers.forEach((member) => {
  const card = document.createElement("article");
  card.className = "band-card";

  card.innerHTML = `
    <img class="band-photo" src="${member.image}" alt="${member.name}" />
    <div>
      <h3>${member.name}</h3>
      <p>${member.role}</p>
      <p>${member.org}</p>
    </div>
    <a href="mailto:${member.email}">${member.email}</a>
  `;

  bandGrid.appendChild(card);
});
