import { createElement as h, useRef } from 'react'
import { SERVICES, SHOP } from '../data'
import { Icon } from '../icons'
import { Call, WA } from './Buttons'

function Card({s,i}){
  const ref=useRef(null);
  const move=e=>{const el=ref.current,r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height,st=el.style;
    el.classList.add('hov');st.setProperty('--ty',((x-.5)*9)+'deg');st.setProperty('--tx',((.5-y)*9)+'deg');st.setProperty('--mx',x*100+'%');st.setProperty('--my',y*100+'%')};
  const leave=()=>{const el=ref.current;el.classList.remove('hov');el.style.setProperty('--tx','0deg');el.style.setProperty('--ty','0deg')};
  return h('article',{className:'card rv',ref:ref,style:{'--d':(i%3)*.1+'s'},onPointerMove:move,onPointerLeave:leave},
    h('div',{className:'ph'},s.photo?h('img',{src:s.photo,alt:s.alt||s.name+' in Belagavi',loading:'lazy'}):h('div',null,h(Icon,{name:'image',size:26}),'Photo space')),
    h('div',{className:'cb'},
      h('span',{className:'idx'},String(i+1).padStart(2,'0')),
      h('h3',null,s.name),h('p',null,s.desc),
      h('div',{className:'acts'},h(Call,{label:'Call Now · '+SHOP.phoneDisplay,cls:'btn btn-line',aria:'Call us about '+s.name}),h(WA,{text:'Hello, I need '+s.name+' service in Belgaum.',cls:'btn btn-wa btn-full'}))));
}

const Services=()=>h('section',{className:'sec',id:'services'},h('div',{className:'wrap'},
  h('div',{className:'sh rv'},
    h('div',null,h('p',{className:'eb'},'Home appliance repair'),h('h2',null,'Services Available')),
    h('p',{className:'lead'},'Looking for the best home appliances service in Belgaum? From the AC in your bedroom to the geyser in your bathroom, we repair the appliances homes depend on every day. Pick your appliance and call us.')),
  h('div',{className:'grid'},SERVICES.map((s,i)=>h(Card,{key:s.name,s,i})))));

export default Services