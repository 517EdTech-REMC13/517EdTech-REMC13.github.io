/* Beyond the Screen — deck engine with entrance animations + number count-ups. */
(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const total = slides.length;
  const fill = document.getElementById("progressFill");
  const curEl = document.getElementById("cur");
  const totalEl = document.getElementById("total");
  let idx = 0;
  if (totalEl) totalEl.textContent = total;

  const clamp = (n) => Math.max(0, Math.min(total - 1, n));

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    const dur = parseInt(el.dataset.dur || "1100", 10);
    const dec = (el.dataset.count.split(".")[1] || "").length;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    if (reduce) { el.textContent = prefix + target.toFixed(dec) + suffix; return; }
    const t0 = performance.now();
    function step(t) {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (target * eased).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toFixed(dec) + suffix;
    }
    el.textContent = prefix + (0).toFixed(dec) + suffix;
    requestAnimationFrame(step);
  }

  function show(n, updateHash) {
    idx = clamp(n);
    slides.forEach((s, i) => {
      const on = i === idx;
      s.classList.toggle("active", on);
      if (!on) s.classList.remove("in");
    });
    const active = slides[idx];
    // let the entrance transition start, then fire in-slide animations
    requestAnimationFrame(() => requestAnimationFrame(() => {
      active.classList.add("in");
      active.querySelectorAll("[data-count]").forEach(countUp);
    }));
    if (fill) fill.style.width = ((idx + 1) / total) * 100 + "%";
    if (curEl) curEl.textContent = idx + 1;
    if (updateHash !== false) history.replaceState(null, "", "#" + (idx + 1));
  }

  const next = () => show(idx + 1);
  const prev = () => show(idx - 1);

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight": case " ": case "PageDown": case "l": case "j": next(); e.preventDefault(); break;
      case "ArrowLeft": case "PageUp": case "h": case "k": prev(); e.preventDefault(); break;
      case "Home": show(0); break;
      case "End": show(total - 1); break;
      case "f": case "F":
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
        break;
    }
  });

  document.getElementById("deck").addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return;
    (e.clientX < window.innerWidth / 3 ? prev : next)();
  });

  let x0 = null;
  addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    x0 = null;
  });

  addEventListener("hashchange", () => {
    const n = parseInt(location.hash.slice(1), 10);
    if (!isNaN(n) && n - 1 !== idx) show(n - 1, false);
  });

  const start = parseInt(location.hash.slice(1), 10);
  show(isNaN(start) ? 0 : start - 1, false);
})();
