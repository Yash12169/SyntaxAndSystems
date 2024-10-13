"use client";
import './Bezier.css'
import { useRef, useEffect } from 'react';

export default function Bezier() {

  const path = useRef<SVGPathElement>(null);
  let progress:number = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId:number|null = null;

  useEffect(() => {
    setPath(progress);
  })

  const setPath = (progress:number) => {
    const width = window.innerWidth * 0.59;
    const currentPath = path.current;
    if(currentPath)
    currentPath.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)

  }
  
  const lerp = (x:number, y:number, a:number) => x * (1 - a) + y * a

  const manageMouseEnter = () => {
    if(reqId){
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e:React.MouseEvent) => {
    const { movementY, clientX } = e;
    const pathBound =  path.current?.getBoundingClientRect();
    if(pathBound)
    x = (clientX - pathBound.left) / pathBound.width;
    progress+= movementY
    setPath(progress);
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time+=0.2;
    setPath(newProgress);
    if(Math.abs(progress) > 0.75){
      reqId = requestAnimationFrame(animateOut);
    }
    else{
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

  return (
    <div className={'container-bez'}>
        <div className={'body-bez'}>
            <div className={'line-bez'}>
              <div onMouseEnter={() => {manageMouseEnter()}} onMouseMove={(e) => {manageMouseMove(e)}} onMouseLeave={() => {manageMouseLeave()}} className={'box-bez'}></div>
              <svg>
                <path className='stroke-gray-700' ref={path}></path>
              </svg>
            </div>
        </div>
    </div>
  )
}