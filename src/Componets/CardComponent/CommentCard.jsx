import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setUpdateHeroesRickyMorty } from "../../store/actions";
function CommentCard() {
    const [comment,setComment] = useState('')
    const heroesRickMorty = useSelector((state) => state.reducerRickMorty.heroes)
    const dispatch = useDispatch()
    function q(e) {
     setComment(()=>e.target.value)
     console.log(comment);
    }
    function showComments(event,id) {
        console.log(event.target.id)
        event.preventDefault()
        const updateHeroes = heroesRickMorty.map((el) => {
            if (el.id === id ) {
               el.comments.push(comment)
               return el;
            }
            if (el.id === id && el.isComments) {
               el.isComments = false;
               return el;
            }
            return el;
         });
         console.log(updateHeroes);
         dispatch(setUpdateHeroesRickyMorty(updateHeroes));


    }
    return(
        <>
        <div>

        </div>
       
        </>
    )
}

export default CommentCard
