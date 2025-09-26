
(function(){
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const root = document.documentElement;
  const btn = document.getElementById('printBtn');
  if(btn){ btn.addEventListener('click', () => window.print()); }
})();
