import CardItem from "./CardItem";
import "./CardBlock.css";
import { React, useEffect, useState } from "react";
import {HEROES_API} from "../../ConnectApi/constants";
import getData from "../../ConnectApi/getDataApi";





function CardBlock({heroes,deleteCard,}) {

 

  

  return (
    
    <div className="_container">
      <div className="block__grid">
        {heroes.map((item) => {
          return <CardItem  
             deleteCard= {deleteCard} 
             key = {item.id} 
             id={item.id}
              image={item.image} 
              name={item.name} />;
        })}
      </div>
    </div>
  );
}



export default CardBlock;
