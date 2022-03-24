const ol=document.querySelector('ol');
ol.addEventListener('click',
(f)=> f.target.style.color='#' + (Math.random().toString(16)).slice(2,8));
