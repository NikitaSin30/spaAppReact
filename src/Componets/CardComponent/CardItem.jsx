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
import CommentIcon from '@mui/icons-material/Comment';
import './CardItem.css';
import Comments from './Comments';

function CardItem({
   name,
   image,
   deleteCard,
   id,
   likeCounter,
   onCheckLike,
   switchShowComments,
   isCommentsShow,
   generatesRemoteCards
}) {

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
                        onClick={() =>{deleteCard(id);generatesRemoteCards(id)}}
                     >
                        <DeleteIcon />
                     </IconButton>
                  )}
               </CardActions>
               <IconButton onClick={() => switchShowComments(id)}>
                  <CommentIcon />
               </IconButton>
            </div>
            {isCommentsShow ? <Comments id={id} /> : null}
         </div>
      </Card>
   );
}

export default CardItem;
