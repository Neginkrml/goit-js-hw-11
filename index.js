import{a as n,i as d,S as u}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(s){if(s.ep)return;s.ep=!0;const e=t(s);fetch(s.href,e)}})();const l=document.querySelector(".app-form"),c=document.querySelector(".gallery");l.addEventListener("submit",i=>{i.preventDefault();//!sayfa yenilenmesini engeller
c.innerHTML="";//! her submitte içerik temizleniyor
const r=l.elements.search.value;n.get("https://pixabay.com/api/",{params:{key:"49510576-2403f70685e3c4d9a30d56514",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{console.log(t);const o=t.data.hits;o.length===0?d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(o.forEach(e=>{console.log(e),c.innerHTML+=`
           <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
            <div class="content">
              <div class="info">
                <h5 class="key">Likes</h5>
                <p class="value">${e.likes}</p>
              </div>
              <div class="info">
                <h5 class="key">Views</h5>
                <p class="value">${e.views}</p>
              </div>
              <div class="info">
                <h5 class="key">Comments</h5>
                <p class="value">${e.comments}</p>
              </div>
              <div class="info">
                <h5 class="key">Downloads</h5>
                <p class="value">${e.downloads}</p>
              </div>
            </div>
          </li>`}),new u(".gallery a",{}).refresh())}).catch(t=>{console.error(t)})});
//# sourceMappingURL=index.js.map
