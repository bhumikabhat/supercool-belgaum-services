import { createElement as h } from 'react'
import { SERVICES } from '../data'

const Marquee=()=>{const l=SERVICES.map(s=>h('span',{key:s.name},s.name));
  return h('div',{className:'mq','aria-hidden':'true'},h('div',null,l,SERVICES.map(s=>h('span',{key:'b'+s.name},s.name))))};

export default Marquee
