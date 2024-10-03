"use client"
import { useEffect, useState } from "react"

export default function Cursor() {
    const [position,setPosition] = useState({x:0,y:0});
    const [visible,setVisible] = useState(true);

    useEffect(()=>{
        const moveCursor =(e:MouseEvent)=>{
            setPosition({x:e.clientX,y:e.clientY});
        };
        const toogleCursorVisiblity =(e:MouseEvent)=>{
            if(e.target instanceof HTMLElement){
                if(e.target.tagName === 'BUTTON' || e.target.tagName === 'A'){
                    setVisible(false);

                }
                else{
                    setVisible(true);
                }
           }
        }


        window.addEventListener('mousemove',moveCursor);
        window.addEventListener('mouseover', toogleCursorVisiblity);

        return ()=>{
            window.removeEventListener('mousemove',moveCursor);
            window.removeEventListener('mouseover', toogleCursorVisiblity);
        };


    },[])
  return (
    <div
    className={`fixed border-[3px] border-primary rounded-full pointer-events-none transition-transform duration-100 
                ${visible ? 'opacity-100' : 'opacity-100'}`}
    style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      width: '40px',  // Custom cursor width
      height: '40px',
      zIndex: '200',
      transform: 'translate(-50%, -50%)',
    }}
  />
  )
}
