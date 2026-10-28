import { useEffect } from 'react'

export function useReveal(){
  useEffect(()=>{
    const els=[...document.querySelectorAll('.rv')];
    if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    els.forEach(e=>io.observe(e));return()=>io.disconnect();
  },[]);
}
export function useScroll(setOn){
  useEffect(()=>{
    let raf=0;
    const f=()=>{raf=0;const y=window.scrollY,m=document.documentElement.scrollHeight-innerHeight,r=document.documentElement.style;
      r.setProperty('--p',m>0?(y/m).toFixed(4):0);r.setProperty('--sy',y);setOn(y>10)};
    const s=()=>{if(!raf)raf=requestAnimationFrame(f)};
    f();addEventListener('scroll',s,{passive:true});return()=>removeEventListener('scroll',s);
  },[]);
}
