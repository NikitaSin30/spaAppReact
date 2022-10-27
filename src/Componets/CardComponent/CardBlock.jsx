import CardItem from "./CardItem";
import "./CardBlock.css";
import { React, useEffect, useState } from "react";
import {HEROES_API} from "../../ConnectApi/constants";
import getData from "../../ConnectApi/getDataApi";





function CardBlock() {

   const [heroes, setHeroes] = useState([]);   

   useEffect(() => {
    getHeroes(HEROES_API);
  }, []);


  const getHeroes = async (url) => {  
    try {
    const response = await getData(url);
    const itemList = response.results.map((e) => {
      return {
        image: e.image,
        name: e.name,
        id: e.id
      }; 
      
    });
    setHeroes(itemList);
    
    } catch (error) {
        alert(error, "Ошибка загрузки c сервера" )
    }       
   };
 
  
   
   function deleteCard (id) {
  setHeroes(prevState => prevState.filter(el => el.id !== id))
  }

  

  return (
    
    <div className="_container">
      <div className="block__grid">
        {heroes.map((item) => {
          return <CardItem   heroes ={heroes} deleteCard= {deleteCard} key = {item.id} id={item.id} image={item.image} name={item.name} />;
        })}
      </div>
    </div>
  );
}



export default CardBlock;
