
import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [pshow , setPshow] = useState(true);
    let template : any = '';
    if(pshow){
        template = <>
        <p>hello</p>
        <button onClick={()=>setPshow(!pshow)}>hide</button>
        </>;

    }else{
        template = <button onClick={()=>setPshow(!pshow)}>show</button>
    }
  return (
    <div>
        {template}
    </div>
  )
}

export default ConditionalRendering