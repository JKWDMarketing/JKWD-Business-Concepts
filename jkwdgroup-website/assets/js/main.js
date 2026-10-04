/* JKWD Business Concepts · Navigation */
(function(){
  var burger=document.querySelector('.burger'), menu=document.getElementById('menu');
  burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o);});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');burger.setAttribute('aria-expanded',false);});});
  var hs=document.querySelector('.has-sub'), b=hs.querySelector('button');
  b.addEventListener('click',function(e){e.stopPropagation();var o=hs.classList.toggle('open');b.setAttribute('aria-expanded',o);});
  document.addEventListener('click',function(){hs.classList.remove('open');b.setAttribute('aria-expanded',false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){hs.classList.remove('open');menu.classList.remove('open');}});
  if(window.matchMedia('(hover:hover) and (min-width:1061px)').matches){
    hs.addEventListener('mouseenter',function(){hs.classList.add('open');});
    hs.addEventListener('mouseleave',function(){hs.classList.remove('open');});
  }
})();
