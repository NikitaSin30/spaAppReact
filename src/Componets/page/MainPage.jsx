import CardBlock from '../CardComponent/CardBlock.jsx';
import LoadingComponets from '../loadingComponent/LoadingComponent.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

function Main({ isError, isLoading, checkedFavorites }) {
  return (
    <>
      {isLoading ? <LoadingComponets /> : null}
      {isError ? (
        <ErrorMessage />
      ) : (
        <CardBlock checkedFavorites={checkedFavorites} />
      )}
    </>
  );
}

export default Main;
