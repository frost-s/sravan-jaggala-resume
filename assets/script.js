
(function(){
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  var p=document.getElementById('printBtn'); if(p) p.addEventListener('click',()=>window.print());
})();
