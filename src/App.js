/* eslint-disable array-callback-return */
import './App.css';
import Header from './Componets/Header/Header';
import CardBlock from "./Componets/CardComponent/CardBlock"
import Filter from './Componets/Filter/Filter';
import { useEffect,useState } from 'react';
import getData from './ConnectApi/getDataApi';
import { HEROES_API } from './ConnectApi/constants';



function App() {

  const [heroes, setHeroes] = useState([]);
  let [likesCounter, setLikeCounter] = useState(0)
  const [checkedFavorites, setCheckedFavorites ] = useState(false)


 const getHeroes = async (url) => {
  try {
  const response = await getData(url);
  const itemList = response.results.map((e) => {
    return {
      image: e.image,
      name: e.name,
      id: e.id,
      isFavorite: false
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

 function onCheckFavorites() {
    setCheckedFavorites(() => !checkedFavorites)
     };

 function checkLike (id) {
  // setLikeCounter(() => likesCounter += 1)
  setHeroes(prevState => prevState.map((el) => {
    if(el.id === id){
     return {...el,  isFavorite: true }
        } else {
      return el
    }

  })
  )
}

  function filterLike(params) {}

  return (

    <div className="App">
        <Header></Header>
        <Filter
        checkedFavorites={checkedFavorites}
        onCheckFavorites={onCheckFavorites}>
        </Filter>
        <CardBlock
         heroes={heroes}
         likesCounter={likesCounter}
         checkLike={checkLike}
        deleteCard={deleteCard}
        ></CardBlock>
      </div>
  );
  }
export default App;
