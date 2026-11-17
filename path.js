// shared helpers for beginners.html and professionals.html
const ALL = (typeof COURSES !== 'undefined') ? COURSES : {};
const money = p => p ? 'KSH ' + Number(p).toLocaleString() : 'Enquire';
const hb = document.getElementById('hamburger'), mm = document.getElementById('mobileMenu');
hb.addEventListener('click', () => mm.classList.toggle('open'));

function cardHTML(c){
  const tags = (c.tags||[]).map(t=>`<span class="tag ${t.cls}">${t.label}</span>`).join('');
  const tool = c.tool ? `<span class="pill">🛠 ${c.tool}</span>` : '';
  const price = c.price
    ? `<div><div class="price">${money(c.price)}</div><div class="price-sub">Full course</div></div>`
    : `<div><div class="price">Enquire</div><div class="price-sub">Contact us</div></div>`;
  return `<div class="card">
    <div class="card-top"><div class="card-icon" style="background:${c.cardBg||'var(--blue-light)'}">${c.icon||'📘'}</div><div class="card-tags">${tags}</div></div>
    <div class="card-title">${c.title}</div>
    <div class="card-desc">${c.tagline||''}</div>
    <div class="card-pills"><span class="pill">⏱ ${c.duration||''}</span><span class="pill">📅 ${c.cohort||''}</span>${tool}</div>
    <div class="card-bottom">${price}<div class="card-actions">
      <a href="course.html?id=${c.id}" class="learn-more">Learn More</a>
      <a href="contact.html?course=${c.id}" class="enroll">${c.price?'Enroll →':'Enquire →'}</a>
    </div></div></div>`;
}