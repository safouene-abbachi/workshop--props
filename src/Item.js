



import React from "react"


export default function Item (props){
    return(
        <div className="tab">
            <table>
                <tr>
                    <th>name</th>
                    <th>count</th>
                    <th>price</th>
                    <th>total</th>
                </tr>
                {props.productItems.map(item=>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td>{item.price}</td>
                        <td>{item.count*item.price}</td>
                    </tr>
                    )}
            </table>

        </div>
    )
}