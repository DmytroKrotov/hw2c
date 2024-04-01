import React from 'react'

function Clockcomponent(){

    const [tick,setTick]=React.useState(new Date());
    setInterval(()=>setTick(new Date()),1000);
    return <div>
        <h1>{tick.getHours()}:{tick.getMinutes()}:{tick.getSeconds()}</h1>
    </div>
}
export default Clockcomponent