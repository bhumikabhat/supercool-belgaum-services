import { createElement as h, useRef } from 'react'
import { SHOP } from '../data'
import { Icon } from '../icons'
import { Call, WA } from './Buttons'

export default function Hero(){
  const ref=useRef(null);
  const set=(x,y)=>{const st=ref.current.style;st.setProperty('--ry',(-12+x*18)+'deg');st.setProperty('--rx',(4-y*12)+'deg')};
  const move=e=>{const r=ref.current.getBoundingClientRect();set((e.clientX-r.left)/r.width-.5,(e.clientY-r.top)/r.height-.5)};
  const steps=[['Call or WhatsApp us','Tell us what stopped working'],['Technician visits','Estimate shared before work starts'],['Fixed, with warranty','Your home is back to normal']];
  return h('section',{className:'hero'},h('div',{className:'wrap'},
    h('div',{className:'rv in'},
      h('span',{className:'tag'},
        h('span',{className:'live'},h('i'),'Available today'),
        h('span',{className:'loc'},h(Icon,{name:'pin',size:16}),'Doorstep service across Belagavi')),
      h('h1',null,'Appliances fixed in Belgaum, ',h('em',null,'right at your door.')),
      h('p',{className:'sub'},'Washing machine, fridge, AC, microwave oven and TV repair in Belgaum, and more. Call or WhatsApp us, tell us what stopped working, and a technician comes to you.'),
      h('div',{className:'cta'},h(Call,{label:SHOP.phoneDisplay}),h(WA))),
    h('div',{className:'stage',onPointerMove:move,onPointerLeave:()=>set(0,0)},
      h('div',{className:'rig',ref:ref},
        h('div',{className:'back'}),
        h('div',{className:'pane'},
          h('div',{className:'ph-h'},h('span',{className:'ic'},h(Icon,{name:'wrench',size:24})),h('div',null,h('b',null,'Repair request'),h('small',null,'Doorstep visit')),h('em',null,'Today')),
          h('ol',{className:'steps'},steps.map((t,i)=>h('li',{key:t[0],style:{'--i':i}},h('span',{className:'ck'},h(Icon,{name:'check',size:16})),h('div',null,h('b',null,t[0]),h('span',null,t[1])))))),
        h('div',{className:'chip c1'},h(Icon,{name:'shield',size:16}),'Service warranty'),
        h('div',{className:'chip c2'},h(Icon,{name:'clock',size:16}),'Quick turnaround'),
        h('div',{className:'chip c3'},h(Icon,{name:'rupee',size:16}),'Upfront estimate')))));
}
