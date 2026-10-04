/* JKWD Business Concepts · Navigation */
(function(){
  var burger=document.querySelector('.burger'), menu=document.getElementById('menu');
  burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Menü schließen':'Menü öffnen');});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');burger.setAttribute('aria-expanded',false);});});
  var hs=document.querySelector('.has-sub'), b=hs.querySelector('button');
  b.addEventListener('click',function(e){e.stopPropagation();var o=hs.classList.toggle('open');b.setAttribute('aria-expanded',o);});
  document.addEventListener('click',function(){hs.classList.remove('open');b.setAttribute('aria-expanded',false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){hs.classList.remove('open');menu.classList.remove('open');}});

  var sl=document.getElementById('sched-load');
  if(sl){sl.addEventListener('click',function(){
    var f=document.createElement('iframe');
    f.src='https://scheduler.zoom.us/jkwd-dennis-lasch/jkwd-business-concepts?embed=true';
    f.title='Terminbuchung JKWD Business Concepts (Zoom Scheduler)';
    f.loading='lazy'; f.allow='clipboard-write';
    var box=document.getElementById('sched-frame'); box.appendChild(f); box.hidden=false;
    document.getElementById('sched-gate').hidden=true;
  });}
  if(window.matchMedia('(hover:hover) and (min-width:1061px)').matches){
    hs.addEventListener('mouseenter',function(){hs.classList.add('open');});
    hs.addEventListener('mouseleave',function(){hs.classList.remove('open');});
  }
})();
