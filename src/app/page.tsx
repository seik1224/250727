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
    <Gsap04 />
   </>
  );
}
