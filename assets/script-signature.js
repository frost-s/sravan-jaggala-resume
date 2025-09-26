
const $ = (sel, el=document)=>el.querySelector(sel);
const $$ = (sel, el=document)=>[...el.querySelectorAll(sel)];

const tabButtons=$$('.tab'); const tabContents=$$('.tcontent');
function setTab(id){
  tabButtons.forEach(b=>b.classList.toggle('active', b.dataset.tab===id));
  tabContents.forEach(c=>c.classList.toggle('active', c.id===id));
}
tabButtons.forEach(b=>b.addEventListener('click', ()=>setTab(b.dataset.tab)));
setTab('experience'); // default

// Theme cycle
const themes=['ocean','royal','emerald']; let i=0;
const root=document.documentElement;
const themeBtn=$('#themeBtn');
if(themeBtn){
  themeBtn.addEventListener('click', ()=>{ i=(i+1)%themes.length; root.setAttribute('data-theme', themes[i]); });
}

// Print
const printBtn=$('#printBtn'); if(printBtn){ printBtn.addEventListener('click', ()=>window.print()); }
