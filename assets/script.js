
// Active nav highlighting
const navLinks=[...document.querySelectorAll('.nav a')];
const secs=[...document.querySelectorAll('section.section')];
const setActive=(id)=>navLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+id));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){setActive(e.target.id)}}),
  {rootMargin:'-60% 0px -35% 0px', threshold:0.01});
secs.forEach(s=>io.observe(s));
