import { React } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CommentCard from './CommentCard.jsx';
import { useDispatch,  } from 'react-redux';
import {
   setCommentRickMorty,
} from '../../store/actions';
import './CardItem.css';
import { useState } from 'react';
function CardItem({
   name,
   image,
   deleteCard,
   id,
   likeCounter,
   onCheckLike,
   switchShowComments,
   isCommentsShow,
   comments,
}) {
   const [commentInput, setCommentInput] = useState('');

   const dispatch = useDispatch();

   function getValueInput(e) {
      setCommentInput(() => e.target.value);
   }

   function generatesComment(id) {
      const date = new Date().toLocaleString();
      let newComment = { id: id, date: date, comment: commentInput };
      dispatch(setCommentRickMorty(newComment));
      setCommentInput('');
   }

   const commentsThisCard = comments.filter((comment) => comment.id === id);

   return (
      <Card className="card" id={id} sx={{ width: 300 }}>
         <div className="card-content">
            {isCommentsShow ? null : (
               <CardMedia
                  component="img"
                  height="194"
                  alt="Paella dish"
                  src={image}
               />
            )}
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  {name}
               </Typography>
            </CardContent>
            <div className="card-icons">
               <CardActions>
                  <Checkbox
                     className="like"
                     icon={<FavoriteBorder />}
                     checkedIcon={<Favorite />}
                     onClick={() => onCheckLike(id)}
                  />
                  <div className="counter">{likeCounter} likes</div>
                  {isCommentsShow ? null : (
                     <IconButton
                        aria-label="share"
                        onClick={() => deleteCard(id)}
                     >
                        <DeleteIcon />
                     </IconButton>
                  )}
               </CardActions>
               <IconButton onClick={() => switchShowComments(id)}>
                  <CommentIcon />
               </IconButton>
            </div>

            <div></div>
            {isCommentsShow ? (
               <>
                  <div className="card-comment">
                     <ul className="card-list">
                        {commentsThisCard.map((comment) => {
                           return (
                              <li
                                 className="card-list__item"
                                 key={Math.random(comment.id)}
                              >
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
                     <Button onClick={() => generatesComment(id)}>
                        Оставить коментарий
                     </Button>
                  </form>
               </>
            ) : null}
         </div>
      </Card>
   );
}

export default CardItem;
