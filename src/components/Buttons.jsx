import { createElement as h } from 'react'
import { SHOP } from '../data'
import { Icon } from '../icons'

export const waLink=t=>'https://wa.me/'+SHOP.whatsapp+'?text='+encodeURIComponent(t);
export const Call=({label='Call Now',cls='btn btn-dark',aria})=>h('a',{className:cls,href:'tel:'+SHOP.phoneTel,'aria-label':aria},h(Icon,{name:'phone',size:18}),label);
export const WA=()=>h('a',{className:'btn btn-wa',href:waLink('Hello, I need a repair service.'),target:'_blank',rel:'noopener noreferrer'},h(Icon,{name:'whatsapp',size:18}),'WhatsApp');
