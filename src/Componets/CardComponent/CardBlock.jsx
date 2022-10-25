import CardItem from "./CardItem";
import "./CardBlock.css";
import { React, useEffect, useState } from "react";
import PEOPLE_API from "../../ConnectApi/api";
import getApi from "../../ConnectApi/network";





function CardBlock() {


  const [heroes, setHeroes] = useState([]);   

  const getData = async (url) => {          {/* получение данных с api */}
    const response = await getApi(url);
    const itemList = response.results.map((e) => {
      return {
        image: e.image,
        name: e.name,
        id: e.id
      }; /* вытащили из данных нужные поля и вернули их */
      
    });
    setHeroes(itemList);
     /* занисли в наш heroes перебранный  массив */
  };
 
  
      useEffect(() => {
    /* в ней вызовем функцию с запросом на сервер */
    getData(PEOPLE_API);
  }, []);

//  Удаление карточки через перебор по filter
   function deleteCard (id) {
    console.log(id)
  setHeroes(prevState => prevState.filter(el => el.id !== id))
  }


  return (
    
    <div className="_container">
      <div className="block__grid">
        {heroes.map((item) => {
          /* перебираем массив и заносим его в разметку и возвращаем его  */
          return <CardItem heroes ={heroes} deleteCard= {deleteCard} key = {item.id} id={item.id} image={item.image} name={item.name} />;
        })}
      </div>
    </div>
  );
}



export default CardBlock;
