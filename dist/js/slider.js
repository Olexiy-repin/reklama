(()=>{function e(e){let t=1;const{rootSelector:r,slidesSelector:l,counterSelector:o}=e,c=document.querySelector(r);this.init=(()=>{c.querySelector(".slider-prev").onclick=(()=>this.switch(-1)),c.querySelector(".slider-next").onclick=(()=>this.switch(1)),this.render()}),this.render=(()=>{const e=c.querySelectorAll(l),r=c.querySelector(o);t>e.length&&(t=1),t<1&&(t=e.length),Array.from(e).forEach(e=>{e.style.display="none"}),e[t-1].style.display="block",r&&(r.innerHTML=t)}),this.switch=(e=>{this.render(t+=e)})}new e({rootSelector:".sec-04__mobile-slider",slidesSelector:".mySlides",counterSelector:"#mySlides-counter"}).init(),new e({rootSelector:".sec-10__slider",slidesSelector:".slides",counterSelector:"#slides-counter"}).init()})();