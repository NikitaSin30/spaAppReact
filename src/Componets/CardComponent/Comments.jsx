import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCommentRickMorty } from '../../store/actions';
import { useState } from 'react';

export default function Comments({ id }) {
   const [commentInput, setCommentInput] = useState('');
   const dispatch = useDispatch();
   const comments = useSelector((state) => state.reducerRickMorty.comments);

   function getValueInput(e) {
      setCommentInput(() => e.target.value);
   }

   function generatesComment(id,event) {
    event.preventDefault()
      const date = new Date().toLocaleString();
      let newComment = { id: id, date: date, comment: commentInput };
      dispatch(setCommentRickMorty(newComment));
      setCommentInput((prev) => (prev = ''));
   }

   const commentsCurrentCard = comments.filter((comment) => comment.id === id);

   return (
      <>
         <div className="card-comment">
            <ul className="card-list">
               {commentsCurrentCard.map((comment) => {
                  return (
                     <li className="card-list__item" key={comment.date}>
                        <span>{comment.date}</span>
                        {comment.comment}
                     </li>
                  );
               })}
            </ul>
         </div>
         <form>
            <label>
               <BorderColorIcon />
               <input
                  value={commentInput}
                  type="text"
                  onChange={getValueInput}
               />
            </label>
            <Button onClick={(event) => generatesComment(id,event)}>
               Оставить коментарий
            </Button>
         </form>
      </>
   );
}
