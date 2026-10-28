import { createElement as h, useState, useEffect } from 'react'
import { SHOP } from '../data'
import { Call } from './Buttons'

const Brand=()=>h('a',{className:'brand',href:'#top','aria-label':SHOP.name},
  h('svg',{width:44,height:44,viewBox:'0 0 46 46','aria-hidden':'true'},
    h('rect',{width:46,height:46,rx:13,fill:'#1F5EFF'}),
    h('g',{stroke:'#fff',strokeWidth:3,strokeLinecap:'round'},h('path',{d:'M23 11v24M12.6 17l20.8 12M12.6 29l20.8-12'}))),
  h('span',null,h('b',null,'Home ',h('i',null,'Cool'),' Service'),h('small',null,'Appliance repair in Belgaum')));

export const Nav=({on})=>{
  const [act,setAct]=useState('');
  useEffect(()=>{
    const ids=['services','brands','why-us','contact'];
    const f=()=>{let cur='';ids.forEach(id=>{const e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<innerHeight*.4)cur=id});setAct(cur)};
    f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f);
  },[]);
  const L=[['services','Services'],['brands','Brands'],['why-us','Why us'],['contact','Contact']];
  return h('header',{className:'nav'+(on?' on':''),id:'top'},h('div',{className:'wrap'},
    h(Brand),
    h('div',{className:'right'},
      h('nav',{className:'links','aria-label':'Sections'},L.map(l=>h('a',{key:l[0],href:'#'+l[0],className:act===l[0]?'act':'','aria-current':act===l[0]?'true':undefined},l[1]))),
      h(Call,{label:'Call'}))));
};