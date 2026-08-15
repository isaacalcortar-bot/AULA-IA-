const menuBtn=document.querySelector('.menu');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const toast=document.querySelector('.toast');
document.querySelectorAll('.copy').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.prompt);toast.textContent='Prompt copiado';}catch{toast.textContent='No se pudo copiar automáticamente';}toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800);}));