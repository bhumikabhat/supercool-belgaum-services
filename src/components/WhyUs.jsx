import { createElement as h } from 'react'
import { WHY } from '../data'
import { Icon } from '../icons'

const WhyUs=()=>h('section',{className:'sec soft',id:'why-us'},h('div',{className:'wrap'},
  h('div',{className:'sh rv'},
    h('div',null,h('p',{className:'eb'},'Our promise'),h('h2',null,'Why Choose Us')),
    h('p',{className:'lead'},'When something stops working at home, you want it fixed without fuss. This is what you can expect from us.')),
  h('ul',{className:'why'},WHY.map((w,i)=>h('li',{className:'wi rv',key:w.title,style:{'--d':(i%3)*.1+'s'}},
    h('span',{className:'ic'},h(Icon,{name:w.icon,size:24})),h('h3',null,w.title),h('p',null,w.text))))));

export default WhyUs
