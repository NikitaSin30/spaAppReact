import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';

function Layout({ checkedFavorites, onChangeFavoriteFilter }) {
  return (
    <>
      <Header />
      <Filter
        onChangeFavoriteFilter={onChangeFavoriteFilter}
        checkedFavorites={checkedFavorites}
      />
      <div className='wrapper'>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
