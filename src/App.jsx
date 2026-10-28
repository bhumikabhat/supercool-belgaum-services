import { createElement as h, Fragment, useState } from 'react'
import { useReveal, useScroll } from './hooks'
import { Nav } from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Brands from './components/Brands'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Foot from './components/Footer'

export default function App() {
  const [on, setOn] = useState(false)
  useScroll(setOn)
  useReveal()
  return h(Fragment, null,
    h('div', { className: 'prog' }),
    h(Nav, { on }),
    h('main', null, h(Hero), h(Marquee), h(Services), h(Brands), h(WhyUs), h(Contact)),
    h(Foot))
}
