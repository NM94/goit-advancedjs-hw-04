import{a as f,S as u,i as a}from"./assets/vendor-7vHzLila.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="39225038-2ac54e14fe4534aeff5d9228c";function g(s){return f.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>
    <div class="image-info">
    <div class="info-item">
    <span>Likes</span>
    <b>${t.likes}</b>
    </div>
    <div class="info-item">
    <span>Views</span>
    <b>${t.views}</b>
    </div>
    <div class="info-item">
    <span>Comments</span>
    <b>${t.comments}</b>
    </div>
    <div class="info-item">
    <span>Downloads</span>
    <b>${t.downloads}</b>
    </div>
    </div>
        </li>
      `).join("");l.innerHTML=o,h.refresh()}function b(){l.innerHTML=""}function v(){d.classList.remove("is-hidden")}function L(){d.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const o=c.elements["search-text"].value.trim();if(o===""){a.warning({message:"Please enter a search word!",position:"topRight"});return}b(),v(),g(o).then(t=>{const i=t.data.hits;if(i.length===0){a.error({message:"Sorry, there no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight"});return}y(i)}).catch(t=>{a.error({message:"Something went wrong. Please try again!",position:"topRight"}),console.error("Request error:",t)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
