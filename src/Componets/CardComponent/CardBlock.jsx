import CardItem from "./CardItem";
import "./CardBlock.css";
import { React } from "react";



function CardBlock({heroes,deleteCard,likesCounter,checkLike}) {
  return (
    <div className="_container">
      <div className="block__grid">
        {heroes.map((item) => {
          return <CardItem
             deleteCard= {deleteCard}
              key = {item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              isFavorite ={item.isFavorite}
              likesCounter={likesCounter}
              checkLike={checkLike}
               />;
        })}
      </div>
    </div>
  );
}



export default CardBlock;
