/* Botón flotante "LABO": abre el transformador de laboratorio sin salir de la página actual.
   Se incluye con <script src="lab-fab.js" defer></script> en pases.html y guardias.html.
   Si cambiás conversor-labo.html, actualizá LABO_VERSION (igual que en index.html). */
(function(){
  if(window.top!==window.self) return;
  const LABO_VERSION='2026-10-22-1';
  const css=document.createElement('style');
  css.textContent='#laboFab{position:fixed;left:12px;bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:1100;background:#1e403d;color:#fff;border:2px solid #111;border-radius:22px;padding:9px 14px;font:700 12px/1 "IBM Plex Mono",monospace;letter-spacing:.08em;cursor:pointer;box-shadow:0 3px 10px rgba(0,0,0,.3)}'
   +'#laboFabOv{display:none;position:fixed;inset:0;z-index:2000;background:rgba(28,35,33,.6);padding:clamp(8px,2vh,28px) 10px}#laboFabOv.open{display:block}'
   +'#laboFabBox{background:#fff;border:2px solid #111;border-radius:4px;height:100%;max-width:1220px;margin:0 auto;display:flex;flex-direction:column;overflow:hidden}'
   +'#laboFabBox header{display:flex;justify-content:space-between;align-items:center;padding:9px 14px;border-bottom:2px solid #111;font:700 13px "IBM Plex Sans",Arial,sans-serif}'
   +'#laboFabBox button{background:none;border:none;font-size:24px;line-height:1;cursor:pointer}#laboFabBox iframe{flex:1;border:none;width:100%;background:#f6f5f1}';
  document.head.appendChild(css);
  const b=document.createElement('button');b.id='laboFab';b.type='button';b.textContent='LABO';b.title='Abrir laboratorio';
  const ov=document.createElement('div');ov.id='laboFabOv';
  ov.innerHTML='<div id="laboFabBox"><header><span>LABORATORIO — Transformador de resultados</span><button type="button" aria-label="Cerrar">×</button></header><iframe title="Laboratorio"></iframe></div>';
  document.body.append(b,ov);
  const fr=ov.querySelector('iframe');
  const close=()=>ov.classList.remove('open');
  b.onclick=()=>{if(!fr.src)fr.src='conversor-labo.html?v='+LABO_VERSION;ov.classList.add('open')};
  ov.querySelector('button').onclick=close;
  ov.addEventListener('click',e=>{if(e.target===ov)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
})();
