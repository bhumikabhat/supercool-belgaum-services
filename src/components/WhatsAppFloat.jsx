import { createElement as h, useState, useEffect } from 'react'
import { SHOP } from '../data'
import { Icon } from '../icons'
import { waLink } from './Buttons'

export default function WhatsAppFloat(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    let t;
    try{if(!sessionStorage.getItem('wf-seen')){t=setTimeout(()=>{setOpen(true);try{sessionStorage.setItem('wf-seen','1')}catch(e){}},6000)}}catch(e){}
    const k=e=>{if(e.key==='Escape')setOpen(false)};
    addEventListener('keydown',k);
    return()=>{clearTimeout(t);removeEventListener('keydown',k)};
  },[]);
  const tick=h('svg',{viewBox:'0 0 24 24',width:16,height:16,'aria-label':'Verified',role:'img'},h('circle',{cx:12,cy:12,r:11,fill:'#25D366'}),h('path',{d:'M7 12.5l3.2 3.2L17 9',fill:'none',stroke:'#fff',strokeWidth:2.4,strokeLinecap:'round',strokeLinejoin:'round'}));
  const close=h('svg',{viewBox:'0 0 24 24',width:24,height:24,fill:'none',stroke:'currentColor',strokeWidth:2.4,strokeLinecap:'round','aria-hidden':'true'},h('path',{d:'M6 6l12 12M18 6L6 18'}));
  return h('div',{className:'wf'+(open?' open':'')},
    h('div',{className:'wf-pop',role:'dialog','aria-label':'Chat with '+SHOP.name,'aria-hidden':open?'false':'true'},
      h('div',{className:'wf-hd'},
        h('span',{className:'wf-av'},h('svg',{width:30,height:30,viewBox:'0 0 46 46','aria-hidden':'true'},h('rect',{width:46,height:46,rx:13,fill:'#1F5EFF'}),h('g',{stroke:'#fff',strokeWidth:3,strokeLinecap:'round'},h('path',{d:'M23 11v24M12.6 17l20.8 12M12.6 29l20.8-12'})))),
        h('div',null,h('b',null,SHOP.name,tick),h('small',null,'Business Account')),
        h('button',{className:'wf-x',type:'button','aria-label':'Close chat',tabIndex:open?0:-1,onClick:()=>setOpen(false)},close)),
      h('div',{className:'wf-bd'},h('div',{className:'wf-msg'},h('b',null,SHOP.name),h('span',null,'Hi There, How may I help you?'))),
      h('div',{className:'wf-ft'},h('a',{className:'wf-go',href:waLink('Hello, I need a repair service.'),target:'_blank',rel:'noopener noreferrer',tabIndex:open?0:-1},h(Icon,{name:'whatsapp',size:20}),'Chat Now'))),
    h('button',{className:'wf-btn',type:'button','aria-label':open?'Close WhatsApp chat':'Chat with us on WhatsApp','aria-expanded':open,onClick:()=>setOpen(o=>!o)},h(Icon,{name:'whatsapp',size:32})));
}