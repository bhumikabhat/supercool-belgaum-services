import { createElement as h } from 'react'
import { SHOP } from '../data'
import { Icon } from '../icons'
import { Call, WA } from './Buttons'

const Contact=()=>h('section',{className:'sec',id:'contact'},h('div',{className:'wrap'},
  h('div',{className:'cta-box rv'},
    h('div',null,h('h2',null,'Something not working? Call us today.'),
      h('p',null,'Repair and service for home appliances and electronics in Belagavi. Call or WhatsApp us and tell us what is not working.'),
      h('div',{className:'cta',style:{margin:0}},h(Call,{label:'Call Now · '+SHOP.phoneDisplay}),h(WA))),
    h('ul',{className:'info'},
      h('li',null,h('span',{className:'ic'},h(Icon,{name:'phone'})),h('span',null,h('small',null,'Phone'),h('b',null,SHOP.phoneDisplay))),
      h('li',null,h('span',{className:'ic'},h(Icon,{name:'pin'})),h('span',null,h('small',null,'Address'),h('b',null,SHOP.address)))))));

export default Contact