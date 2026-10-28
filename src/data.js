import ifbLogo from './assets/logos/ifb.png'
import whirlpoolLogo from './assets/logos/whirlpool.png'
import samsungLogo from './assets/logos/samsung.png'
import lgLogo from './assets/logos/lg.png'
import bluestarLogo from './assets/logos/bluestar.png'
import marqLogo from './assets/logos/marq.png'
import onidaLogo from './assets/logos/onida.png'
import acPhoto from './assets/photos/ac.jpg'
import tvPhoto from './assets/photos/tv.jpg'
import washing_machinePhoto from './assets/photos/washing-machine.jpg'
import fridgePhoto from './assets/photos/fridge.jpg'
import microwavePhoto from './assets/photos/microwave.jpg'
import chimneyPhoto from './assets/photos/chimney.jpg'
import gas_stovePhoto from './assets/photos/gas-stove.jpg'
import geyserPhoto from './assets/photos/geyser.jpg'
import mixer_inductionPhoto from './assets/photos/mixer-induction.jpg'

export const SHOP={name:'Home Cool Service',phoneDisplay:'+91 63637 65973',phoneTel:'+916363765973',whatsapp:'916363765973',address:'Belagavi (Belgaum), Karnataka, India',credit:'CubicCode',creditUrl:'https://www.cubiccode.in/',creditTitle:'Best Website and WebApps Designing and Development Company in Belgaum and Bangalore, Karnataka, India - Cubiccode Digital Media LLP - ISO 9001:2015 Certified Company.'};

export const SERVICES=[
{name:'AC Repair',photo:acPhoto,alt:'AC repair in Belgaum',desc:'AC repair in Belgaum and the best AC service near you. Blue Star AC repair and service centre, Samsung AC repair and other brands: gas refilling, cooling and leakage problems, plus jet-wash servicing for split and window ACs.'},
{name:'TV Repair',photo:tvPhoto,alt:'TV repair in Belgaum',desc:'TV repair in Belgaum for LED, LCD and smart TVs, including Onida service and Marq service centre support. No display, lines on screen, sound faults and backlight problems fixed.'},
{name:'Washing Machine Repair',photo:washing_machinePhoto,alt:'Washing machine repair in Belgaum',desc:'Washing machine repair in Belgaum, including Tilakwadi, and the best washing machine service near you. IFB, Whirlpool, Haier, Samsung and LG washing machine service centre and repair for front-load and top-load machines: drum, drain, spin, water-inlet, motor and PCB faults.'},
{name:'Refrigerator Repair',photo:fridgePhoto,alt:'Fridge repair in Belgaum',desc:'Fridge repair in Belgaum and the best fridge service near you. Single and double door refrigerators repaired for poor cooling, gas leaks, noisy compressors and thermostat faults.'},
{name:'Microwave Repair',photo:microwavePhoto,alt:'Microwave oven repair in Belgaum',desc:'Microwave oven repair in Belgaum for solo, grill and convection models: heating faults, dead panels, sparking and turntable trouble.'},
{name:'Kitchen Chimney',photo:chimneyPhoto,alt:'Kitchen chimney service in Belgaum',desc:'Auto-clean and filter chimneys serviced for weak suction, oil build-up, noisy motors and faulty switches.'},
{name:'Gas Stove & Hob',photo:gas_stovePhoto,alt:'Gas stove and hob repair in Belgaum',desc:'Gas stove and glass-top hob repair for uneven flame, clogged burners, ignition faults and loose knobs.'},
{name:'Geyser',photo:geyserPhoto,alt:'Geyser repair in Belgaum',desc:'Geyser (gyzer) repair in Belgaum for electric and instant geysers: no heating, thermostat and element faults, leaks and tripping.'},
{name:'Mixer Grinder & Induction',photo:mixer_inductionPhoto,alt:'Mixer grinder and induction cooktop repair in Belgaum',desc:'Mixer grinder, wet grinder and induction cooktop repair: motor, jar coupler, switch and heating faults.'},
];

export const WHY=[
{icon:'wrench',title:'Skilled technicians',text:'Repairs are handled by experienced technicians, so the real fault is found and fixed properly.'},
{icon:'home',title:'Home service',text:'Call us for washing machine, fridge or AC repair near you in Belgaum and we come to your door. No need to carry anything heavy anywhere.'},
{icon:'shield',title:'Quality spare parts',text:'We use good quality spares and tell you what is being replaced and why.'},
{icon:'rupee',title:'Fair, upfront pricing',text:'You hear the estimate before work starts, so there are no surprise charges later.'},
{icon:'clock',title:'Quick turnaround',text:'We aim to fix common faults in a single visit so your home gets back to normal soon.'},
{icon:'star',title:'Service warranty',text:'Repairs come with a service warranty. Ask us about the details for your appliance.'}
];

const LOGOS={'IFB':ifbLogo,'Whirlpool':whirlpoolLogo,'Samsung':samsungLogo,'LG':lgLogo,'Blue Star':bluestarLogo,'MarQ':marqLogo,'Onida':onidaLogo};
export const BRANDS=[['IFB','#E31E24'],['Whirlpool','#F2A900'],['Haier','#0B5FA5'],['Samsung','#1428A0'],['LG','#A50034'],['Blue Star','#0B4EA2'],['MarQ','#0C1424'],['Onida','#D6001C']].map(x=>[x[0],x[1],LOGOS[x[0]]||null]);
export const ALTS={'IFB':'IFB washing machine service centre in Belgaum','Whirlpool':'Whirlpool washing machine repair in Belgaum','Haier':'Haier washing machine service centre in Belgaum','Samsung':'Samsung washing machine and AC repair in Belgaum','LG':'LG washing machine service centre in Belgaum','Blue Star':'Blue Star AC repair and service centre in Belgaum','MarQ':'MarQ service centre in Belgaum','Onida':'Onida service in Belgaum'};
