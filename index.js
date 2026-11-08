import{a as w,S,i as n}from"./assets/vendor-BkAU0gAw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const R="https://pixabay.com/api/",q="39225038-2ac54e14fe4534aeff5d9228c";async function m(s,o=1){return(await w.get(R,{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const h=document.querySelector(".gallery"),g=document.querySelector(".loader"),p=document.querySelector(".load-more"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>

          <div class="image-info">
            <div class="info-item">
              <span>Likes</span>
              <b>${e.likes}</b>
            </div>

            <div class="info-item">
              <span>Views</span>
              <b>${e.views}</b>
            </div>

            <div class="info-item">
              <span>Comments</span>
              <b>${e.comments}</b>
            </div>

            <div class="info-item">
              <span>Downloads</span>
              <b>${e.downloads}</b>
            </div>
          </div>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",o),P.refresh()}function B(){h.innerHTML=""}function L(){g.classList.remove("is-hidden")}function b(){g.classList.add("is-hidden")}function u(){p.classList.remove("is-hidden")}function i(){p.classList.add("is-hidden")}const v=document.querySelector(".form"),M=document.querySelector(".load-more");let l="",a=1,f=0;v.addEventListener("submit",$);M.addEventListener("click",O);async function $(s){if(s.preventDefault(),l=v.elements["search-text"].value.trim(),l===""){n.warning({message:"Please enter a search word!",position:"topRight"});return}a=1,B(),i(),L();try{const o=await m(l,a),e=o.hits;if(f=o.totalHits,e.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight"});return}y(e),a+=1,e.length<f?u():i()}catch{n.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{b()}}async function O(){i(),L();try{const o=(await m(l,a)).hits;if(o.length===0){i(),n.info({message:"We're sorry, but you are at the end of the search results.",position:"topRight"});return}y(o),a+=1;const e=document.querySelector(".gallery-item");if(e){const c=e.getBoundingClientRect().height;window.scrollBy({top:c*2,behavior:"smooth"})}a*15>f?(i(),n.info({message:"We're sorry, but you are at the end of the search results.",position:"topRight"})):u()}catch{n.error({message:"Something went wrong. Please try again!",position:"topRight"}),u()}finally{b()}}
//# sourceMappingURL=index.js.map
