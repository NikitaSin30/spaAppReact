import { useLocation,Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Comments from "../CardComponent/Comments";

function RequireAuth (id) {
   const nameUser = useSelector((state) => state.reducerRickMorty.nameUser);
if(!nameUser.length) {
return (
   <Navigate to='login'/>
)
}
return (
   <Comments id={id} />
)
}

export default RequireAuth
