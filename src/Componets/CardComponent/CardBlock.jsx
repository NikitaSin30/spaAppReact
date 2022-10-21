import React from "react";
import CardItem from "./CardItem";
import "./CardBlock.css"

function CardBlock (){
    return(
        <div className="block__grid">
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
            <CardItem></CardItem>
        </div>
    )
}

export default CardBlock