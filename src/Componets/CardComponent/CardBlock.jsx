import CardItem from "./CardItem";
import "./CardBlock.css";
import { React } from "react";



function CardBlock({heroes,deleteCard,likesCounter,onCheckLike,isFavorite}) {
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
              isFavorite ={isFavorite}
              likesCounter={likesCounter}
              onCheckLike={onCheckLike}
               />;
        })}
      </div>
    </div>
  );
}



export default CardBlock;
