(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");const n=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};t.addEventListener("click",i),s.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();const a={el:document.querySelector(".btn-up"),scrolling:!1,show(){this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")&&(this.el.classList.remove("btn-up_hide"),this.el.classList.add("btn-up_hiding"),window.setTimeout(()=>{this.el.classList.remove("btn-up_hiding")},300))},hide(){!this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")&&(this.el.classList.add("btn-up_hiding"),window.setTimeout(()=>{this.el.classList.add("btn-up_hide"),this.el.classList.remove("btn-up_hiding")},300))},addEventListener(){window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop;this.scrolling&&e>0||(this.scrolling=!1,e>1800?this.show():this.hide())}),document.querySelector(".btn-up").onclick=()=>{this.scrolling=!0,this.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}};a.addEventListener();new Swiper(".mySwiper",{slidesPerView:4,spaceBetween:18,grabCursor:!0,loop:!1,pagination:{el:".swiper-pagination-2",clickable:!0},breakpoints:{250:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}}});new Swiper(".reviews-slider",{pagination:{el:".swiper-pagination-1",clickable:!0},grabCursor:!0,slidesPerView:1,spaceBetween:10,breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}}});const l=document.querySelector(".header-fixed"),r=document.querySelector(".hero"),u=l.offsetHeight;r.offsetHeight;let d=0;window.addEventListener("scroll",()=>{let e=window.scrollY;e>d?(l.classList.remove("header--fixed"),r.style.marginTop=null):(l.classList.add("header--fixed"),r.style.marginTop=`${u}px`),e===0&&(l.classList.remove("header--fixed"),r.style.marginTop=null),d=e});(()=>{const e={openModalBtn:document.querySelector("[data-hero-open]"),closeModalBtn:document.querySelector("[data-hero-close]"),modal:document.querySelector("[data-hero-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden")}})();(()=>{const e={openModalBtn:document.querySelector("[data-sellers-open]"),modal:document.querySelector("[data-sellers-modal]")};e.openModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden")}})();(()=>{const e={openModalBtn:document.querySelector("[data-review-open]"),closeModalBtn:document.querySelector("[data-review-close]"),modal:document.querySelector("[data-review-modal]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden")}})();(()=>{const e={openModalBtn:document.querySelector("[data-explore-open]"),closeModalBtn:document.querySelector("[data-explore-close]"),modal:document.querySelector("[data-explore]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-hidden")}})();window.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".how-its-made-img-block");e.addEventListener("click",function(){if(!e.classList.contains("ready")){e.classList.add("ready");var t=e.dataset.src;e.insertAdjacentHTML("afterbegin",'<iframe src="'+t+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')}})});const p=document.querySelectorAll(".smooth");p.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const s=e.getAttribute("href").substring(1);document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})})});
