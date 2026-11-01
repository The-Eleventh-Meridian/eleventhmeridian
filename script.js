const trigger = document.getElementById('indexTrigger');
const nav = document.getElementById('overlayNav');
const links = nav ? nav.querySelectorAll('a') : [];

function closeNav() {
  if (!trigger || !nav) return;
  trigger.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  nav.setAttribute('aria-hidden', 'true');
}

function openNav() {
  if (!trigger || !nav) return;
  trigger.setAttribute('aria-expanded', 'true');
  nav.classList.add('is-open');
  nav.setAttribute('aria-hidden', 'false');
}

trigger?.addEventListener('click', () => {
  const expanded = trigger.getAttribute('aria-expanded') === 'true';
  expanded ? closeNav() : openNav();
});

links.forEach(link => link.addEventListener('click', closeNav));

document.addEventListener('click', (event) => {
  if (!nav || !trigger) return;
  if (!nav.contains(event.target) && !trigger.contains(event.target)) closeNav();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNav();
});

