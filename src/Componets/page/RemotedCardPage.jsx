import RemoteCardsBlock from '../CardComponent/remoteHeroes/RemoteCardBlock.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import './RemotedPage.css';

function RemotedCardPage() {
  const remoteHeroes = useSelector(
    (state) => state.reducerRickMorty.remoteHeroes
  );
  const containsElements = remoteHeroes.length > 0;

  return (
    <>
      {containsElements ? (
        <RemoteCardsBlock />
      ) : (
        <div className='goMain _container'>
          <h2 style={{ color: 'black', fontSize: 18, margin: 20 }}>
            Удалённых героев нет
          </h2>
          <Button variant='contained'>
            <Link to='/'>На галвную</Link>
          </Button>
        </div>
      )}
    </>
  );
}

export default RemotedCardPage;
