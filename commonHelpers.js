import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as u,i as l}from"./assets/vendor-77e16229.js";let t;const n=document.querySelector("button"),o={seconds:document.querySelector("span[data-second]"),minutes:document.querySelector("span[data-minutes]"),hours:document.querySelector("span[data-hours]"),days:document.querySelector("span[data-days]")},d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){t=e[0],t<new Date?(l.show({iconUrl:"../img/bi_x-octagon.svg",title:"Error",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",titleFontWeight:"700",message:"Please choose a date in the future",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",messageFontWeight:"400",backgroundColor:"#ef4040",close:!0,position:"topRight"}),n.disabled=!0):n.disabled=!1}};u("#datetime-picker",d);const m=t.getSeconds(),h=t.getMinutes(),g=t.getHours(),f=t.getDay();setInterval(()=>{o.seconds.textContent=m,o.minutes.textContent=h,o.hours.textContent=g,o.hours.textContent=f},1e3);n.addEventListener("click",setInterval);function s(e){const r=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),c=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:a,minutes:c,seconds:i}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));
//# sourceMappingURL=commonHelpers.js.map
