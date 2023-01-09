import CardItem from './CardItem.jsx';
import './CardBlock.css';
import { React } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUpdateHeroesRickyMorty,
  setRemoteCard,
} from '../../store/actions/index.js';
import { RickMorty } from './mapperCard/mapper.js';

function CardBlock({ checkedFavorites }) {
  const dispatch = useDispatch();
  const heroesRickMorty = useSelector((state) => state.reducerRickMorty.heroes);

  const mapper = new RickMorty(heroesRickMorty);
  const comments = useSelector((state) => state.reducerRickMorty.comments);

  function generatesRemoteCards(id) {
    const remoteCard = mapper.getCard(id);
    dispatch(setRemoteCard(remoteCard));
  }
  function deleteCard(id) {
    const updatedHeroes = mapper.deleteCard(id);
    dispatch(setUpdateHeroesRickyMorty(updatedHeroes));
  }

  function onCheckLike(id) {
    const updatedHeroes = mapper.switchIsLikeCard(id);
    dispatch(setUpdateHeroesRickyMorty(updatedHeroes));
  }
  function switchShowComments(id) {
    const updatedHeroes = mapper
      .switchIsComments(id)
      .sort((a, b) => a.id - b.id);
    dispatch(setUpdateHeroesRickyMorty(updatedHeroes));
  }

  const filterFavoriteHeroes = useMemo(() => {
    return heroesRickMorty.filter((item) => item.isFavorite === true);
  }, [heroesRickMorty]);

  const customHeroes = checkedFavorites
    ? filterFavoriteHeroes
    : heroesRickMorty;

  return (
    <>
      <div className='_container'>
        <div className='block__grid'>
          {customHeroes.map((item) => {
            return (
              <CardItem
                deleteCard={deleteCard}
                id={item.id}
                key={item.id}
                image={item.image}
                name={item.name}
                onCheckLike={onCheckLike}
                likeCounter={item.likeCounter}
                isCommentsShow={item.isCommentsShow}
                switchShowComments={switchShowComments}
                generatesRemoteCards={generatesRemoteCards}
                comments={comments}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CardBlock;
