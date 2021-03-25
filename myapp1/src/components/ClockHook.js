import React, { useEffect, useState } from 'react';

function ClockHook() {
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
        let timerID=setInterval(()=>setTime(new Date()),1000);
        return()=>{
            clearInterval(timerID)
        }
    });
    return (
        <div>
             <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default ClockHook;