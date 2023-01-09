import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Comments from '../CardComponent/Comments';

function RequireAuth({ id, comments }) {
  const nameUser = useSelector((state) => state.reducerRickMorty.nameUser);
  if (!nameUser.length) {
    return <Navigate to='login' />;
  }
  return <Comments comments={comments} id={id} />;
}

export default RequireAuth;
