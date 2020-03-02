import React from 'react'

export default function Footer(props) {
    return (
        <div>
         <h2>{props.total.reduce((a,c)=>(a+c.count*c.price),0)}</h2>   
        </div>
    )
}


