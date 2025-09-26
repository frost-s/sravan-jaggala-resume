
// Active nav highlighting
const navLinks=[...document.querySelectorAll('.nav a')];
const secs=[...document.querySelectorAll('section.section')];
const setActive=(id)=>navLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+id));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){setActive(e.target.id)}}),
  {rootMargin:'-60% 0px -35% 0px', threshold:0.01});
secs.forEach(s=>io.observe(s));

// Collapsibles
function toggle(el){ el.classList.toggle('open'); const body = el.querySelector('.expbody'); if(body) body.classList.toggle('hidden'); }
document.querySelectorAll('.expitem').forEach(item=>{
  const head=item.querySelector('.exphead');
  head.addEventListener('click', ()=>toggle(item));
});

// Expand/Collapse All
const expAllBtn = document.getElementById('expandAll');
const colAllBtn = document.getElementById('collapseAll');
if(expAllBtn){ expAllBtn.addEventListener('click',()=>{
  document.querySelectorAll('.expitem').forEach(el=>{ const body=el.querySelector('.expbody'); if(body && body.classList.contains('hidden')) body.classList.remove('hidden'); });
});}
if(colAllBtn){ colAllBtn.addEventListener('click',()=>{
  document.querySelectorAll('.expitem').forEach(el=>{ const body=el.querySelector('.expbody'); if(body && !body.classList.contains('hidden')) body.classList.add('hidden'); });
});}
