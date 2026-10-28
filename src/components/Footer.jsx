import { createElement as h } from 'react'
import { SHOP } from '../data'

const Foot=()=>h('footer',{className:'foot'},h('div',{className:'wrap'},
  h('span',null,'© 2026 '+SHOP.name),
  h('span',null,'Designed and developed by ',h('a',{href:SHOP.creditUrl,target:'_blank',rel:'noopener noreferrer',title:SHOP.creditTitle},h('b',null,SHOP.credit)))));

export default Foot
