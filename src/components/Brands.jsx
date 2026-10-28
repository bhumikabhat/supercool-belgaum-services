import { createElement as h, useState } from 'react'
import { BRANDS, ALTS } from '../data'

const BrandTile=({b,hide})=>{const [ok,setOk]=useState(!!b[2]);return h('li',{className:'bt','aria-hidden':hide?'true':undefined,style:{'--c':b[1]}},ok?h('img',{src:b[2],alt:hide?'':(ALTS[b[0]]||b[0]+' service in Belgaum'),loading:'lazy',onError:()=>setOk(false)}):h('span',null,b[0]))};

const Brands=()=>h('section',{className:'sec brands',id:'brands'},h('div',{className:'wrap'},
  h('div',{className:'sh rv'},
    h('div',null,h('p',{className:'eb'},'Trusted brands'),h('h2',null,'Brands We Service')),
    h('p',{className:'lead'},'Looking for an IFB, Whirlpool, Haier, Samsung or LG washing machine service centre, or a Blue Star, Samsung, MarQ or Onida service in Belgaum? We repair and service all of these brands.')),
  h('div',{className:'bmq rv'},h('ul',{className:'btrack'},BRANDS.concat(BRANDS).map((b,i)=>h(BrandTile,{key:i,b,hide:i>=BRANDS.length})))),
  h('p',{className:'bnote rv'},'Don\u2019t see your brand? Call us, we may still be able to help with your appliance in Belgaum.')));

export default Brands
