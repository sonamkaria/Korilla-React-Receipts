import React, { useState } from "react";
import receiptsArr from "../receiptsArr";
import Receipt from './Receipt'

const Receipts = ({ receipt }) => {
    const receipts = receipt.map((ele, index) => {
        return (
            <Receipt
                {...ele}
                key={index}
            />
        )
    })


    return (
        <>
            <div>{receipts}</div>
        </>
    )
}

export default Receipts;



