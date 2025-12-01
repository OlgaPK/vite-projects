import { useEffect, useRef, useState } from 'react'
import './Demo.css'

export default function Demo() {

    const startedAt = useRef<string>((new Date()).toLocaleTimeString()) 
    //useRef use to save constantly value every render (don't update value)
    // cons arr = useState<string>((new Date()).toLocaleTimeString())
    //arr[0] - now - value 
    //arr[1] - setNow - setStateFunction
    
    const [now, setNow] = useState<string>((new Date()).toLocaleTimeString())

    //usage of useEffect is run side effect
    useEffect(() => {   setInterval(() => {
        const intervalId = setNow((new Date()).toLocaleTimeString())
    }, 1000)
    return ()=> {clearInterval(intervalId)}, [])


    // Three useEffect patterns depending on 2d argument:
    //========================================================
    // 1. pass no argument  - the Effect will run with each re-render
    // 2. pass an empty array - the effect will run only on 1st render
    // 3. pass a non empty array containing state vars - the effect will run whenever a "watched" state var changes


 

    return (
        <div className='Demo'>
            <h1>{startedAt.current}</h1>  
            <h1>{now}</h1>                         

        </div>
    )
}