'use client';

import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Horizontal from "./lenis/horizontal";
import Lenis01 from "./lenis/lenis";
import Observer01 from "./lenis/observer01";
import Gsap01 from './gsap/gsap01';
import Gsap02 from './gsap/gsap02';
import Gsap03 from './gsap/gsap03';
import Gsap04 from './gsap/gsap04';
import Framer01 from './framer/framer01';
import Framer03 from './framer/framer03';
import Framer04 from './framer/framer04';
import Framer05 from './framer/framer05';
import Framer06 from './framer/framer06';
import Framer07 from './framer/framer07';
import Framer08 from './framer/framer08';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
   <>
    {/* <Observer01 /> */}
    {/* <Lenis01 /> */}
    {/* <Horizontal /> */}
    {/* <Gsap01 /> */}
    {/* <Gsap02 /> */}
    {/* <Gsap03 /> */}
    {/* <Gsap04 /> */}
    {/* <Framer01 /> */}
    {/* <Framer03 /> */}
    {/* <Framer04 /> */}
    {/* <Framer05 /> */}
    {/* <Framer06 /> */}
    {/* <Framer07 /> */}
    <Framer08 />
   </>
  );
}
