import React, { useState } from "react";
import receiptsArr from "../receiptsArr";


const Receipt = ({paid,person,order}) => {

    let newpaid = "true"
    if(paid===false){
        newpaid = "false";
    }

    const [paidStat,setPaidStat] = useState(newpaid)
    function toggle() {
        if(paidStat === "true"){
            setPaidStat("false")
        } else{
            setPaidStat("true")
        }
    }

    return (
        <>
        <h1>Receipt</h1>
        <div>{person}</div>
        <div>{order.name}</div>
        <div>{order.protein}</div>
        <div>{order.rice}</div>
        <div>{order.sauce}</div>
        <div>{order.drink}</div>
        <div>{order.cost}</div>
        
        <button onClick={toggle}>{paidStat}</button>
        </>
    )
};

export default Receipt;