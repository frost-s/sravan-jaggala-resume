
(function(){
  const printBtn = document.getElementById('printBtn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
