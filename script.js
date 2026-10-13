const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = [...document.querySelectorAll('.nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
}

navLinks.forEach(link => link.addEventListener('click', e => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Open navigation');

  const targetId = link.getAttribute('href');
  const target = targetId ? document.querySelector(targetId) : null;
  if (!target) return;

  // Scroll so the selected section starts directly below the fixed/sticky header.
  // This avoids the extra blank area that can appear when browser anchor scrolling
  // combines with the section's large internal padding.
  e.preventDefault();
  const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({ top, behavior: 'smooth' });
  history.replaceState(null, '', targetId);
}));

const setActive = id => navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) setActive(visible.target.id);
}, {threshold: [0.25, 0.5, 0.75], rootMargin: '-20% 0px -45% 0px'});
sections.forEach(section => observer.observe(section));

// Also correct direct loads such as index.html#work so the section starts below the header.
window.addEventListener('load', () => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  requestAnimationFrame(() => {
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'auto' });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = e.currentTarget.elements.name.value.trim();
  document.getElementById('formMessage').textContent = `Thanks, ${name || 'there'} — your enquiry has been captured for this prototype.`;
  e.currentTarget.reset();
});


const newsletterForm = document.getElementById('newsletterForm');
newsletterForm?.addEventListener('submit', e => {
  e.preventDefault();
  const email = e.currentTarget.elements.newsletterEmail.value.trim();
  document.getElementById('newsletterMessage').textContent =
    `Thanks — ${email || 'your email'} has been added to our prototype mailing list.`;
  e.currentTarget.reset();
});
