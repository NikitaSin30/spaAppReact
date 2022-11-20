import './App.css';
import Header from './Componets/Header/Header';
import CardBlock from "./Componets/CardComponent/CardBlock"
import Filter from './Componets/Filter/Filter';
import { useEffect,useState } from 'react';
import getData from './ConnectApi/getDataApi';
import { HEROES_API } from './ConnectApi/constants';



function App() { 
  
  // Нужно связать состояние invisible в Fliter с состояние CheckedLike 
  // в CardItem . Когда invisible true остаются только лайкнутые карточки


  const [heroes, setHeroes] = useState([]);  

    
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


 useEffect(() => {
  getHeroes(HEROES_API);
}, []);




 function deleteCard (id) {
  setHeroes(prevState => prevState.filter(el => el.id !== id))
  }
 
 
 




  
  function filterLike(params) {
    
  }

  return (
    <div className="App">
        <Header></Header>
        <Filter  heroes={heroes}></Filter>
        <CardBlock heroes={heroes}
        deleteCard={deleteCard}
        ></CardBlock> 
      </div>
  );
}

export default App;
