import { createElement as h } from 'react'
import { SHOP } from '../data'
import { Icon } from '../icons'
import { Call, WA } from './Buttons'

export default function Hero(){
  return h('section',{className:'hero'},h('div',{className:'wrap'},
    h('div',{className:'rv in hero-copy'},
      h('span',{className:'tag'},
        h('span',{className:'live'},h('i'),'Available today'),
        h('span',{className:'loc'},h(Icon,{name:'pin',size:16}),'Doorstep service across Belagavi')),
      h('h1',null,'Appliances fixed in Belgaum, ',h('em',null,'right at your door.')),
      h('p',{className:'sub'},'Washing machine, fridge, AC, microwave oven and TV repair in Belgaum, and more. Call or WhatsApp us, tell us what stopped working, and a technician comes to you.'),
      h('div',{className:'cta'},h(Call,{label:SHOP.phoneDisplay}),h(WA)))));
}
