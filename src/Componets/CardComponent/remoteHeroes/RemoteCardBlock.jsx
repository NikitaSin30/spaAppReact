import RemoteCards from './RemoteCard.jsx';
import { useSelector, useDispatch } from 'react-redux';
import '../CardBlock.css';
import { setRebuildCard } from '../../../store/actions/index.js';

function RemoteCardsBlock() {
   const dispatch = useDispatch();
   const remoteHeroes = useSelector(
      (state) => state.reducerRickMorty.remoteHeroes,
   );

   function rebuildCard(id) {
      const card = remoteHeroes.filter((el) => el.id === id);
      dispatch(setRebuildCard(card));
   }
   return (
      <>
         <div className="_container">
            <div className="block__grid">
               {remoteHeroes.map((item) => {
                  return (
                     <RemoteCards
                        id={item.id}
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        rebuildCard={rebuildCard}
                     />
                  );
               })}
            </div>
         </div>
      </>
   );
}

export default RemoteCardsBlock;
