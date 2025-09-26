
// Active nav highlighting + reveal animations
const sections = [...document.querySelectorAll('section.section')];
const navLinks = [...document.querySelectorAll('.navlinks a')];
const setActive = (id) => {
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+id));
};
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ setActive(e.target.id); } });
},{rootMargin:'-50% 0px -45% 0px', threshold:0.01});
sections.forEach(s=>io.observe(s));

// Reveal
const reveals = document.querySelectorAll('.reveal');
const io2 = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); e.target.style.animationDelay = (e.target.dataset.delay||'0')+'s'; } });
},{threshold:0.05});
reveals.forEach(el=>io2.observe(el));
